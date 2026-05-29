from __future__ import annotations

import json
import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator
from pypdf import PdfReader


PDF_PATH = Path(r"C:\Users\User\Downloads\v5rc-override-0.1.2.pdf")
CACHE_PATH = Path("data/full_translation_cache.json")
OUT_PATH = Path("site/fullTranslation.js")

SECTIONS = [
    (1, 1, "cover"),
    (2, 2, "copyright"),
    (3, 4, "toc"),
    (5, 5, "changelog"),
    (6, 10, "quick"),
    (11, 15, "intro"),
    (16, 23, "game"),
    (24, 28, "scoring"),
    (29, 34, "specific"),
    (35, 49, "general"),
    (50, 54, "skills"),
    (55, 68, "robot"),
    (69, 82, "tournament"),
    (83, 96, "vexu"),
    (97, 110, "fieldAppendix"),
    (111, 122, "glossary"),
    (123, 129, "violations"),
    (130, 131, "classifications"),
]


def section_key(page_number: int) -> str:
    for start, end, key in SECTIONS:
        if start <= page_number <= end:
            return key
    return "manual"


def clean_text(text: str) -> str:
    text = text.replace("\u0000", "")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def split_chunks(text: str, limit: int = 4300) -> list[str]:
    paragraphs = re.split(r"\n\s*\n", text)
    chunks: list[str] = []
    current = ""
    for paragraph in paragraphs:
        paragraph = paragraph.strip()
        if not paragraph:
            continue
        if len(paragraph) > limit:
            sentences = re.split(r"(?<=[.!?])\s+", paragraph)
            for sentence in sentences:
                if len(current) + len(sentence) + 1 > limit and current:
                    chunks.append(current)
                    current = ""
                current = f"{current} {sentence}".strip()
            continue
        if len(current) + len(paragraph) + 2 > limit and current:
            chunks.append(current)
            current = paragraph
        else:
            current = f"{current}\n\n{paragraph}".strip()
    if current:
        chunks.append(current)
    return chunks


def load_cache() -> dict[str, dict]:
    if not CACHE_PATH.exists():
        return {}
    return json.loads(CACHE_PATH.read_text(encoding="utf-8"))


def save_cache(cache: dict[str, dict]) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def translate_text(translator: GoogleTranslator, text: str) -> str:
    chunks = split_chunks(text)
    translated_chunks = []
    for chunk_index, chunk in enumerate(chunks, 1):
        for attempt in range(1, 4):
            try:
                translated_chunks.append(translator.translate(chunk))
                break
            except Exception:
                if attempt == 3:
                    raise
                time.sleep(2 * attempt)
        time.sleep(0.25)
    return "\n\n".join(translated_chunks)


def post_process_terms(text: str) -> str:
    replacements = {
        "แทนที่การแข่งขันหุ่นยนต์ VEX V5": "VEX V5 Robotics Competition Override",
        "การแข่งขันหุ่นยนต์ VEX V5 แทนที่": "VEX V5 Robotics Competition Override",
        "การแข่งขันหุ่นยนต์ VEX V5 - คู่มือเกม": "VEX V5 Robotics Competition Override - คู่มือเกม",
        "การแข่งขันหุ่นยนต์ VEX V5": "VEX V5 Robotics Competition",
        "การแข่งขันหุ่นยนต์ Vex V5": "VEX V5 Robotics Competition",
        "Vex Robotics": "VEX Robotics",
        "พันธมิตร": "Alliance",
        "เขตข้อมูล": "สนาม",
        "องค์ประกอบภาคสนาม": "Field Element",
        "วัตถุให้คะแนน": "Scoring Object",
        "วัตถุการให้คะแนน": "Scoring Object",
        "ผู้ตัดสินหัวหน้า": "Head Referee",
        "กรรมการผู้ตัดสินหัวหน้า": "Head Referee",
        "การแข่งขันทักษะหุ่นยนต์": "Robot Skills Match",
        "การแข่งขันทักษะ": "Skills Match",
        "ช่วงควบคุมผู้ขับขี่": "Driver Controlled Period",
        "ระยะเวลาอัตโนมัติ": "Autonomous Period",
        "ระยะเวลาอิสระ": "Autonomous Period",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    return text


def main() -> None:
    reader = PdfReader(str(PDF_PATH))
    cache = load_cache()
    translator = GoogleTranslator(source="en", target="th")
    output_pages = []

    for page_number, page in enumerate(reader.pages, 1):
        raw_text = clean_text(page.extract_text() or "")
        key = str(page_number)
        cached = cache.get(key)
        if cached and cached.get("source_chars") == len(raw_text) and cached.get("thai"):
            thai = post_process_terms(cached["thai"])
        else:
            print(f"translating page {page_number}/{len(reader.pages)} chars={len(raw_text)}", flush=True)
            thai = translate_text(translator, raw_text)
            thai = post_process_terms(thai)
            cache[key] = {"source_chars": len(raw_text), "thai": thai}
            save_cache(cache)

        rule_codes = list(dict.fromkeys(re.findall(r"<([A-Z]{1,5}\d+)>", raw_text)))
        output_pages.append(
            {
                "page": page_number,
                "sectionKey": section_key(page_number),
                "ruleCodes": rule_codes,
                "thai": thai,
            }
        )

    OUT_PATH.write_text(
        "window.FULL_TRANSLATION_PAGES = "
        + json.dumps(output_pages, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT_PATH} pages={len(output_pages)}", flush=True)


if __name__ == "__main__":
    main()
