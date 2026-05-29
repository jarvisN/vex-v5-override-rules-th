const ruleGroups = {
  scoring: [
    ["SC1", "คิดคะแนนหลังแมตช์จบ", "สถานะการทำคะแนนประเมินหลังจบแมตช์ โดยมีช่วงรอ 5 วินาทีให้วัตถุและหุ่นยนต์หยุดนิ่ง ช่วงนี้ไม่ใช่เวลาเล่นเพิ่ม", "warning"],
    ["SC3", "Pin มีสองครึ่ง", "ครึ่งสีแดงนับให้แดง ครึ่งสีน้ำเงินนับให้น้ำเงิน ส่วนครึ่งสีเหลืองจะนับให้ Alliance ที่ Owns Pin นั้น"],
    ["SC5", "Yellow Pin และ Ownership", "Yellow Pin ใน Quadrant ขึ้นกับ Toggle ของ Quadrant นั้น ส่วน Yellow Pin ใน Midfield ขึ้นกับฝ่ายที่มี Robot ใน Midfield มากกว่า"],
    ["SC7", "Autonomous Bonus", "ประเมินทันทีเมื่อ Autonomous จบ ฝ่ายที่คะแนนมากกว่าได้ 12 คะแนน ถ้าเสมอรวมถึง 0-0 ได้ฝ่ายละ 6 คะแนน"],
    ["SC8", "Autonomous Win Point", "ต้องทำชุดภารกิจที่กำหนดให้ครบ และไม่มี Violation ใน Autonomous เช่น มี Pins/Goals ตามเกณฑ์ และ Robot ไม่แตะ Field Perimeter"],
  ],
  specific: [
    ["SG1", "Starting a Match", "หุ่นยนต์เริ่มไม่เกิน 18 x 18 x 18 นิ้ว ไม่แตะ Goal, Loader, Load Zone, Toggle หรือหุ่นยนต์อื่น และแตะ field tile กับ perimeter ฝั่งตน"],
    ["SG2", "Horizontal expansion is limited", "หลังแมตช์เริ่ม หุ่นยนต์ขยายแนวนอนได้ แต่ต้อง fit ใน footprint 24 x 24 นิ้วตลอดเวลา", "warning"],
    ["SG3", "Vertical expansion is limited", "ก่อน Endgame หุ่นยนต์ขยายแนวตั้งได้แต่ต้องไม่สูงเกิน 50 นิ้ว"],
    ["SG4", "Keep Scoring Objects in the Field", "ห้ามนำ Scoring Objects ออกจากสนาม วัตถุที่ออกจากสนามจะถูกนำกลับเข้ามาตามดุลยพินิจของกรรมการ/อาสาสมัคร"],
    ["SG5", "Each Robot gets one Pin as a Preload", "แต่ละ Robot มี Preload เป็น Pin สีของ Alliance ตน และต้องวางตามเงื่อนไขก่อนเริ่มแมตช์"],
    ["SG6", "Possession limit", "หุ่นยนต์ครอบครองได้สูงสุด 1 Pin และ 1 Cup พร้อมกัน ถ้าเกินต้องหยุดทำอย่างอื่นและแก้ให้กลับมาถูกกฎ", "danger"],
    ["SG7", "Autonomous Line", "ช่วง Autonomous ห้ามข้ามไปแตะพื้นที่ วัตถุ หรือ Field Element ฝั่งตรงข้าม ยกเว้นวัตถุบนเส้นตามเงื่อนไข", "danger"],
    ["SG8", "Midfield during Autonomous", "การเข้าเล่น Midfield หรือวัตถุบน Autonomous Line ในช่วง Autonomous มีความเสี่ยง เพราะอีกฝ่ายก็อาจเข้าเล่นพื้นที่เดียวกันได้", "warning"],
    ["SG9", "Alliance Goals are protected", "ห้ามยุ่งกับ Goal สีของฝ่ายตรงข้าม ทั้งทางตรงและทางอ้อม รวมถึงการวางหรือเอาวัตถุออก", "danger"],
    ["SG10", "Do not remove from neutral/opponent Goals", "ห้ามเอา Scoring Objects ออกจาก Goals ที่ไม่ใช่สี Alliance ของตน", "danger"],
    ["SG11", "Match Loads", "ใส่ Match Load ได้เฉพาะช่วง Driver Controlled Period ผ่าน Loader สี Alliance ของตน และ Robot ต้องนำออกทางช่องล่างของ Loader"],
    ["SG12", "Endgame changes", "ช่วง 20 วินาทีสุดท้าย หุ่นยนต์ที่อยู่ใน Midfield ต้องสูงไม่เกิน 18 นิ้ว และควรคาดว่าจะมีการปะทะหนักขึ้น", "warning"],
  ],
  safety: [
    ["S1", "Be safe out there", "ถ้าการทำงานของหุ่นยนต์หรือพฤติกรรมทีมไม่ปลอดภัย อาจถูก Disable, Disqualify และต้องตรวจหุ่นยนต์ใหม่", "danger"],
    ["S2", "Students must be accompanied by an Adult", "นักเรียนต้องมีผู้ใหญ่รับผิดชอบอยู่ด้วยตลอดอีเวนต์"],
    ["S4", "Stay inside the Field", "ถ้าหุ่นยนต์ออกนอกสนามทั้งหมดระหว่างแมตช์ จะถูก Disable สำหรับแมตช์นั้น"],
    ["S5", "Wear safety glasses", "Drive Team Members ต้องใส่ eye protection ตอนอยู่ที่สนามสำหรับแมตช์"],
  ],
  general: [
    ["G1", "Treat everyone with respect", "ทุกทีมและผู้ร่วมงานต้องประพฤติตัวอย่างสุภาพ มืออาชีพ และเคารพผู้อื่น", "warning"],
    ["G2", "Student-centered program", "นักเรียนต้องเป็นผู้ตัดสินใจหลักในการออกแบบ สร้าง เขียนโค้ด และวางกลยุทธ์ ผู้ใหญ่ควรช่วยในเชิงสอน/ชี้แนะ"],
    ["G3", "Use common sense", "ให้ใช้สามัญสำนึกในการอ่านกฎ ถ้าไม่มีข้อห้ามชัดเจนมักถือว่าทำได้ แต่สิ่งที่ขัด spirit หรือความปลอดภัยยังผิดได้"],
    ["GG14", "Don’t destroy other Robots", "การป้องกันทำได้ แต่ต้องไม่เล่นเพื่อทำลาย ทำให้พันกัน หรือทำให้คู่แข่งเสียหายอย่างไม่เหมาะสม", "danger"],
    ["GG17", "No Holding for more than a 3-count", "ห้าม Holding เกิน 3-count ต้องปล่อยให้คู่แข่งมีโอกาสเคลื่อนที่ต่อ"],
  ],
  robot: [
    ["R1", "One Robot per Team", "หนึ่งทีมใช้หุ่นยนต์ได้หนึ่งตัวในอีเวนต์เดียวกัน และห้ามสลับหุ่นยนต์ระหว่างรูปแบบแมตช์"],
    ["R2", "Robots must pass inspection", "หุ่นยนต์ต้องผ่าน inspection ก่อนแข่ง และอาจต้องตรวจใหม่หลังเปลี่ยนแปลงใหญ่หรือถูกพบว่าผิดกฎ"],
    ["R3", "Starting size", "หุ่นยนต์ต้อง fit ใน 18 x 18 x 18 นิ้วตอนเริ่มแมตช์"],
    ["R4", "License plates", "ต้องติดป้ายเลขทีมสองด้านตรงข้าม มองเห็นชัด อ่านออก และตรงสี Alliance ของแมตช์"],
    ["R6", "One Brain", "ใช้ VEX V5 Robot Brain ได้เพียง 1 ตัว และห้ามใช้ microcontroller อื่นใน V5RC ปกติ", "warning"],
    ["R7", "Power access", "ปุ่มเปิดปิดหรือ battery connection ต้องเข้าถึงได้โดยไม่ต้องยกหรือขยับหุ่นยนต์"],
    ["R8", "Firmware", "ต้องใช้ VEXos ขั้นต่ำตาม manual และห้าม custom firmware"],
    ["R10", "Motor limit", "กำลังมอเตอร์รวมทั้งหุ่นยนต์ต้องไม่เกิน 88W โดยนับทุกมอเตอร์บนหุ่นยนต์", "danger"],
    ["R11", "Subsystem 1 motor limit", "มอเตอร์ฐานขับเคลื่อนรวมไม่เกิน 55W และห้ามใช้ขับกลไกอื่น", "warning"],
    ["R18", "Prohibited items", "ห้ามชิ้นส่วนที่เสี่ยงทำลายสนาม/หุ่นยนต์ เสี่ยงพันกัน เสี่ยงอันตราย หรือ Robot parts ที่ 3D print ใน V5RC ปกติ", "danger"],
    ["R24", "Custom plastic", "ใช้ non-shattering plastic ได้สูงสุด 12 ชิ้น แต่ละชิ้นไม่เกิน 4 x 8 x 0.070 นิ้ว", "warning"],
    ["R25", "Pneumatics", "ใช้ VEX Air Tanks ได้สูงสุด 2 ถัง ชาร์จได้ไม่เกิน 100 psi และใช้อากาศอัดกับอุปกรณ์ pneumatic ที่ถูกกฎเท่านั้น"],
  ],
  skills: [
    ["RSC1", "Standard rules apply", "Robot Skills ใช้กฎมาตรฐานเป็นหลัก เว้นแต่ RSC rules จะระบุปรับไว้"],
    ["RSC2", "Different match play", "Robot Skills เป็นรูปแบบที่ Robot หนึ่งตัวพยายามทำคะแนนให้มากที่สุด ไม่ใช่ Head-to-Head ปกติ"],
    ["RSC4", "Skills field setup", "Field setup ของ Skills ต่างจาก Head-to-Head เช่น Goals เริ่มว่าง ไม่มี Placed Pins"],
    ["RSC5", "Skills Stop Time", "ทีมสามารถขอจบ Skills Match ก่อนเวลาเพื่อบันทึก Skills Stop Time เป็น tiebreaker แต่ต้อง opt-in ก่อนเริ่มแมตช์", "warning"],
  ],
};

const allRules = Object.values(ruleGroups).flat().map(([code, title, text, tone]) => ({ code, title, text, tone }));
const knownRuleDetails = new Map(allRules.map((rule) => [rule.code, rule]));
const externalRuleTitles = Object.entries(window.RULE_TITLES || {}).filter(([, title]) => title && !title.includes("?"));
const ruleTitleLookup = new Map([...externalRuleTitles, ...allRules.map((rule) => [rule.code, rule.title])]);
const pageSectionText = {
  cover: ["ปก", "หน้าปกของคู่มือ ระบุชื่อเกม Override ฤดูกาล 2026-2027 และเวอร์ชันของ Game Manual ที่ใช้เป็นแหล่งอ้างอิง"],
  copyright: ["ประกาศลิขสิทธิ์", "หน้าประกาศสิทธิ์และข้อจำกัดการใช้งาน เอกสารต้นฉบับเป็นทรัพย์สินทางปัญญาของผู้จัดและไม่ควรนำไปเผยแพร่ซ้ำโดยไม่ได้รับอนุญาต"],
  toc: ["สารบัญ", "หน้าสารบัญ แสดงโครงสร้างคู่มือ ตั้งแต่บทนำ กฎเกม กฎหุ่นยนต์ ทัวร์นาเมนต์ VEX U และภาคผนวก"],
  changelog: ["Changelog", "หน้าประวัติการเปลี่ยนแปลง ใช้ตรวจว่าคู่มือที่อ่านเป็นรุ่นใดและมีการแก้ไขอะไรจากรุ่นก่อนหน้า"],
  quick: ["Quick Reference", "หน้ารวมรหัสกฎแบบเร็ว เหมาะสำหรับเปิดหา rule code ก่อนอ่านรายละเอียดใน section หลัก"],
  intro: ["Section 1 - Introduction", "หน้าบทนำ อธิบายวิธีอ่านคู่มือ ลำดับความน่าเชื่อถือของข้อมูล และบทบาทของ Q&A ทางการ"],
  game: ["Section 2 - The Game", "หน้าอธิบายภาพรวมเกม Override สนาม วัตถุในเกม เป้าหมายการทำคะแนน และเจตนารมณ์ของรูปแบบการเล่น"],
  scoring: ["Scoring", "หน้ากฎการคิดคะแนน อธิบายว่า Pins, Toggles, Midfield และ Autonomous มีผลต่อคะแนนอย่างไร"],
  specific: ["Specific Game Rules", "หน้ากฎเฉพาะของเกม ระบุข้อจำกัดการเริ่มแมตช์ การขยายตัว การครอบครองวัตถุ Autonomous Line, Goals, Match Loads และ Endgame"],
  general: ["Safety / General Game Rules", "หน้ากฎความปลอดภัยและกฎทั่วไป ครอบคลุมพฤติกรรมทีม ความรับผิดชอบของนักเรียน การตัดสิน และการปะทะระหว่าง Robot"],
  skills: ["Section 3 - Robot Skills", "หน้ากฎ Robot Skills อธิบายความต่างจาก Head-to-Head, field setup, scoring และ Skills Stop Time"],
  robot: ["Section 4 - The Robot", "หน้ากฎตรวจหุ่นยนต์ ครอบคลุมข้อจำกัดขนาด ป้ายทีม Brain, firmware, motor, วัสดุ และชิ้นส่วนที่อนุญาตหรือห้ามใช้"],
  tournament: ["Section 5 - The Tournament", "หน้ากฎทัวร์นาเมนต์ อธิบายบทบาท Head Referee/Event Partner, schedule, ranking, alliance selection, eliminations และ skills rankings"],
  vexu: ["Section 6 - VEX U", "หน้ากฎ VEX U และ VURC ที่ปรับจาก V5RC ปกติ รวมถึงจำนวน Robot, fabricated parts, electronics, pneumatics และรูปแบบ tournament"],
  fieldAppendix: ["Appendix A - Field Overview", "หน้าภาคผนวกสนาม แสดงภาพรวมสนาม รายการ Game Objects/Field Elements และรายละเอียดเชิงมิติสำหรับการสร้างหรืออ้างอิงสนาม"],
  glossary: ["Appendix B - Glossary", "หน้าคำศัพท์นิยาม ใช้อ่านความหมายทางกติกาของคำสำคัญ ซึ่งอาจต่างจากความหมายทั่วไป"],
  violations: ["Appendix C - Rule Violations", "หน้าสรุปลักษณะการละเมิดกฎและผลที่อาจเกิดขึ้น ช่วยเชื่อม rule code กับประเภทโทษหรือการพิจารณา Match Affecting"],
  classifications: ["Appendix D - Team Classifications", "หน้าจัดประเภททีมและบทบาทของนักเรียน ใช้แยกความรับผิดชอบของ Student, Adult และทีมตามนโยบาย VEX"],
};

function pageTitle(page) {
  if (!page.ruleCodes.length) return pageSectionText[page.sectionKey]?.[0] || "Game Manual";
  const titles = page.ruleCodes.slice(0, 3).map((code) => ruleTitleLookup.get(code) || fallbackRuleTitle(code));
  return `${titles.join(" / ")}${page.ruleCodes.length > 3 ? " และกฎต่อเนื่อง" : ""}`;
}

function pageSummary(page) {
  return pageSectionText[page.sectionKey]?.[1] || "หน้าคู่มือที่ควรอ่านประกอบกับ section ก่อนหน้าและถัดไปเพื่อให้ตีความกฎครบถ้วน";
}

function pageStudyNotes(page) {
  const notes = [];
  if (page.ruleCodes.length) {
    notes.push(`รหัสกฎที่ควรเปิดเทียบ: ${page.ruleCodes.slice(0, 8).join(", ")}`);
    notes.push(`ประเด็นหลัก: ${page.ruleCodes.slice(0, 4).map((code) => ruleTitleLookup.get(code) || fallbackRuleTitle(code)).join("; ")}`);
  }
  if (["scoring", "specific"].includes(page.sectionKey)) notes.push("อ่านร่วมกับ Appendix C เพราะหลายกฎมี violation notes เพิ่มเติม");
  if (page.sectionKey === "robot") notes.push("ควรใช้เป็น checklist ระหว่างออกแบบและก่อน inspection");
  if (page.sectionKey === "glossary") notes.push("นิยามใน glossary มีผลเหนือความหมายทั่วไปของคำ");
  if (!notes.length) notes.push("ใช้หน้านี้เพื่อจับตำแหน่งเนื้อหาในคู่มือก่อนอ่านรายละเอียดหัวข้อถัดไป");
  return notes.slice(0, 3);
}

function ruleFamily(code) {
  if (code.startsWith("SC")) return "scoring";
  if (code.startsWith("SG")) return "specific";
  if (code.startsWith("GG")) return "generalGame";
  if (code.startsWith("RSC")) return "skills";
  if (code.startsWith("R")) return "robot";
  if (code.startsWith("T")) return "tournament";
  if (code.startsWith("VUG") || code.startsWith("VUR") || code.startsWith("VUT") || code.startsWith("VURS")) return "vexu";
  if (code.startsWith("S")) return "safety";
  if (code.startsWith("G")) return "general";
  return "manual";
}

function fallbackRuleTitle(code) {
  const family = ruleFamily(code);
  const labels = {
    scoring: "กฎการคิดคะแนน",
    specific: "กฎเฉพาะของเกม",
    safety: "กฎความปลอดภัย",
    general: "กฎทั่วไป",
    generalGame: "กฎทั่วไปในสนาม",
    skills: "กฎ Robot Skills",
    robot: "กฎหุ่นยนต์",
    tournament: "กฎทัวร์นาเมนต์",
    vexu: "กฎ VEX U / VURC",
    manual: "หัวข้ออ้างอิง",
  };
  return `${labels[family] || "กฎ"} ${code}`;
}

function ruleExplanation(code) {
  const known = knownRuleDetails.get(code);
  if (known) {
    return {
      code,
      title: known.title,
      detail: known.text,
      checklist: "อ่านเงื่อนไขย่อยของกฎนี้ใน PDF ต้นฉบับก่อนใช้ตัดสิน เพราะบางข้อมี exception และ violation notes เพิ่มเติม",
      tone: known.tone || "",
    };
  }

  const title = ruleTitleLookup.get(code) || fallbackRuleTitle(code);
  const family = ruleFamily(code);
  const templates = {
    scoring: [
      "กฎนี้อยู่ในหมวดการคิดคะแนน จึงควรใช้ตอนตรวจว่าสถานะสุดท้ายของวัตถุหรือ Robot เข้าเกณฑ์คะแนนหรือไม่",
      "เวลาอ่าน ให้แยกก่อนว่าเป็นคะแนนของ Pin, Toggle, Midfield หรือ Autonomous เพราะแต่ละสถานะมีเวลาประเมินและเงื่อนไขต่างกัน",
      "เช็กจากตำแหน่งจริงหลังแมตช์ ไม่ใช่จากความตั้งใจของทีม",
    ],
    specific: [
      "กฎนี้เป็นข้อจำกัดเฉพาะของเกม Override และมักส่งผลโดยตรงต่อ strategy ในสนาม",
      "ทีมควรแยกให้ชัดว่าอะไรทำได้ตอน Autonomous, Driver Control และ Endgame เพราะบางกฎเปลี่ยนตามช่วงเวลา",
      "ถ้าแผนเล่นต้องเข้าใกล้คู่แข่งหรือ Goal ของอีกฝ่าย ให้ตรวจ violation notes เพิ่มก่อนซ้อมจริง",
    ],
    safety: [
      "กฎนี้เป็นฐานด้านความปลอดภัย กรรมการสามารถใช้ดุลยพินิจได้เมื่อ Robot หรือพฤติกรรมทีมสร้างความเสี่ยง",
      "ใช้ตรวจทั้งตัว Robot, วิธีขับ, การทำงานของกลไก และพฤติกรรมของ Drive Team Members รอบสนาม",
      "ถ้าไม่แน่ใจว่าปลอดภัยพอ ให้แก้ก่อนลงสนาม ไม่ใช่รอให้กรรมการตัดสินระหว่างแมตช์",
    ],
    general: [
      "กฎนี้กำหนดมาตรฐานพฤติกรรมและบทบาทของทีม มากกว่าจะเป็นกลไกทำคะแนนโดยตรง",
      "ใช้ตีความร่วมกับ spirit of the competition โดยเฉพาะบทบาทนักเรียน ผู้ใหญ่ และการใช้สามัญสำนึก",
      "ทีมควรเตรียมอธิบายเหตุผลการออกแบบ/โค้ด/กลยุทธ์ด้วยภาษาของนักเรียนเอง",
    ],
    generalGame: [
      "กฎนี้เป็นกฎทั่วไปในสนาม ใช้กับการเล่น Head-to-Head และมักมีผลต่อการตัดสินระหว่าง Robot ปะทะกัน",
      "อ่านร่วมกับ context ของแมตช์ เพราะหลายกรณีขึ้นกับว่าใครเป็นฝ่ายรุก ใครเป็นฝ่ายรับ และเหตุการณ์เกิดโดยเจตนาหรือไม่",
      "ซ้อม drive team ให้รู้ขั้นตอน appeal, timeout, replay และการสื่อสารกับ Head Referee อย่างสุภาพ",
    ],
    skills: [
      "กฎนี้ใช้กับ Robot Skills ซึ่งไม่เหมือน Head-to-Head ทั้งด้าน field setup, schedule และวิธีบันทึกผล",
      "ทีมควรแยกแผน Skills ออกจากแผน match play เพราะวัตถุเริ่มต้นและเป้าหมายการแข่งขันต่างกัน",
      "ก่อนเริ่ม Skills ให้ยืนยัน field setup, stop time และวิธีควบคุมสนามกับ Scorekeeper Referee",
    ],
    robot: [
      "กฎนี้ใช้ตอนออกแบบ สร้าง และตรวจ Robot ก่อนแข่ง เป็น hard limit ในหลายกรณี",
      "ควรตรวจตั้งแต่ CAD หรือ prototype เพราะการแก้ตอน inspection มักเสียเวลาและอาจทำให้พลาดแมตช์",
      "เตรียมหลักฐานให้ inspector ดูได้ เช่น จำนวนมอเตอร์ ขนาด กลไกที่ขยาย วัสดุ custom และตำแหน่งป้ายทีม",
    ],
    tournament: [
      "กฎนี้เกี่ยวกับการจัดอีเวนต์ การตัดสิน ตารางแข่ง ranking หรือขั้นตอน tournament",
      "ทีมควรรู้สิทธิ์และหน้าที่ของ Drive Team Members โดยเฉพาะการถาม ruling, การ appeal และการเข้าร่วม Alliance Selection",
      "เรื่อง gameplay ให้ Head Referee เป็นผู้ตัดสินสุดท้าย ส่วนเรื่องการจัดงานให้ Event Partner มีอำนาจในขอบเขตของตน",
    ],
    vexu: [
      "กฎนี้เป็นการปรับสำหรับ VEX U / VURC จึงไม่ควรนำไปใช้กับ V5RC ปกติถ้า manual ไม่ได้บอกชัด",
      "ตรวจให้ดีว่าข้อใดแก้กฎเกม ข้อใดแก้กฎ Robot และข้อใดแก้รูปแบบ tournament",
      "ทีม VEX U ควรอ่านกฎ V5RC พื้นฐานก่อน แล้วค่อยใช้หมวดนี้เป็น override สำหรับระดับมหาวิทยาลัย",
    ],
    manual: [
      "รายการนี้เป็นเนื้อหาอ้างอิงในคู่มือ ใช้เพื่อเชื่อมตำแหน่งอ่านกับกฎหลัก",
      "อ่านร่วมกับหัวข้อก่อนหน้าและถัดไปเพื่อไม่ตัดบริบทของกฎออกจากกัน",
      "ใช้ PDF ต้นฉบับเป็นแหล่งตัดสินเมื่อมีข้อสงสัย",
    ],
  };
  const [detail, reading, checklist] = templates[family] || templates.manual;
  return {
    code,
    title,
    detail: `${title}: ${detail} ${reading}`,
    checklist,
    tone: ["danger", "warning"].includes(family) ? family : "",
  };
}

function pageRuleDetails(page) {
  return (page.ruleCodes || []).slice(0, 8).map((code) => ruleExplanation(code));
}

function renderRuleLists() {
  document.querySelectorAll("[data-rule-list]").forEach((container) => {
    const group = ruleGroups[container.dataset.ruleList] || [];
    container.innerHTML = group
      .map(
        ([code, title, text, tone]) => `
          <article class="rule-block ${tone || ""}">
            <div class="rule-num">${code}</div>
            <div>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          </article>
        `,
      )
      .join("");
  });
}

function updateScore() {
  const form = document.getElementById("scoreCalculator");
  const data = new FormData(form);
  const alliancePins = Number(data.get("alliancePins") || 0);
  const yellowPins = Number(data.get("yellowPins") || 0);
  const midfieldRobots = Number(data.get("midfieldRobots") || 0);
  const autoBonus = data.get("autoBonus") === "on" ? 12 : 0;
  const total = alliancePins * 5 + yellowPins * 10 + midfieldRobots * 8 + autoBonus;
  document.getElementById("scoreTotal").textContent = `${total} คะแนน`;
}

function searchRules(query) {
  const normalized = query.trim().toLowerCase();
  const matches = normalized
    ? allRules.filter((rule) => `${rule.code} ${rule.title} ${rule.text}`.toLowerCase().includes(normalized))
    : allRules.slice(0, 6);

  document.getElementById("searchResults").innerHTML = matches
    .slice(0, 10)
    .map(
      (rule) => `
        <article class="search-card ${rule.tone || ""}">
          <strong>${rule.code}</strong>
          <h4>${rule.title}</h4>
          <p>${rule.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderPageTranslations(query = "") {
  const container = document.getElementById("pageTranslationList");
  const count = document.getElementById("pageCount");
  const translationPages = window.FULL_TRANSLATION_PAGES || window.PAGE_TRANSLATIONS;
  if (!container || !translationPages) return;

  const normalized = query.trim().toLowerCase();
  const pages = normalized
    ? translationPages.filter((page) =>
        [
          page.page,
          pageSectionText[page.sectionKey]?.[0],
          pageTitle(page),
          pageSummary(page),
          page.thai || "",
          ...(page.ruleCodes || []),
          ...pageStudyNotes(page),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
    : translationPages;

  count.textContent = `${pages.length} / ${translationPages.length} หน้า`;
  container.innerHTML = pages
    .map(
      (page) => `
        <article class="translation-page-card">
          <div class="translation-page-number">
            <span>PDF Page</span>
            <strong>${page.page}</strong>
          </div>
          <div class="translation-page-body">
            <p class="translation-section">${pageSectionText[page.sectionKey]?.[0] || "Game Manual"}</p>
            <h3>${pageTitle(page)}</h3>
            ${
              page.thai
                ? `<div class="full-translation-text">${page.thai
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line) => `<p>${line}</p>`)
                    .join("")}</div>`
                : `<p>${pageSummary(page)}</p>`
            }
            ${page.ruleCodes.length ? `<div class="code-row">${page.ruleCodes.map((code) => `<span>${code}</span>`).join("")}</div>` : ""}
            ${
              page.ruleCodes.length
                ? `<details class="page-rule-digest">
                    <summary>รหัสกฎในหน้านี้</summary>
                    ${pageRuleDetails(page)
                      .map(
                        (rule) => `
                          <div class="digest-rule ${rule.tone}">
                            <strong>${rule.code} - ${rule.title}</strong>
                            <p>${rule.detail}</p>
                            <em>${rule.checklist}</em>
                          </div>
                        `,
                      )
                      .join("")}
                    ${page.ruleCodes.length > 8 ? `<p class="more-rules">หน้านี้ยังมีรหัสกฎเพิ่มเติม: ${page.ruleCodes.slice(8).join(", ")}</p>` : ""}
                  </details>`
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

renderRuleLists();
renderPageTranslations();
updateScore();
searchRules("");

document.getElementById("scoreCalculator").addEventListener("input", updateScore);
document.getElementById("searchBox").addEventListener("input", (event) => searchRules(event.target.value));
document.getElementById("pageSearch").addEventListener("input", (event) => renderPageTranslations(event.target.value));

if (!window.location.hash) {
  window.requestAnimationFrame(() => {
    document.getElementById("page-by-page").scrollIntoView({ block: "start" });
  });
}
