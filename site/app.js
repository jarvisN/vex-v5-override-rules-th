const rules = {
  field: [
    {
      code: "Field",
      title: "สนาม 12' x 12'",
      text: "เล่นบนสนามสี่เหลี่ยม 12 ฟุต x 12 ฟุต แบ่งฝ่ายแดง/น้ำเงิน และมี Midfield ตรงกลางเป็นพื้นที่แย่งชิงท้ายเกม",
    },
    {
      code: "Objects",
      title: "Pins และ Cups",
      text: "เริ่มเกมมี Cups 56 ชิ้น และ Pins 63 ชิ้น หลายสี รวมถึง red/yellow, blue/yellow และ yellow/yellow",
    },
    {
      code: "Goals",
      title: "Goals 9 จุด",
      text: "มี Alliance Goals 4 จุด แยกสีแดง/น้ำเงิน และ Neutral Goals 5 จุด รวมถึง goal สูงตรงกลาง",
    },
    {
      code: "Toggles",
      title: "Toggles 4 จุด",
      text: "Toggle ใช้กำหนด ownership ของ yellow Pins ใน Quadrant ถ้า set เป็นแดง/น้ำเงิน Yellow Pins ใน Quadrant นั้นจะนับให้ฝ่ายนั้น",
    },
  ],
  scoring: [
    {
      code: "SC",
      title: "ตารางคะแนนหลัก",
      text: "Autonomous Bonus = 12, Placed Alliance-colored Pin = 5 ต่อชิ้น, Owned yellow Pin = 10 ต่อชิ้น, Robot ใน Midfield = 8 ต่อหุ่นยนต์",
    },
    {
      code: "SC1",
      title: "คิดคะแนนหลังแมตช์จบ",
      text: "สถานะการทำคะแนนประเมินหลังจบแมตช์ โดยมีช่วงรอ 5 วินาทีเพื่อให้วัตถุและหุ่นยนต์หยุดนิ่ง ไม่ใช่เวลาเล่นเพิ่ม",
    },
    {
      code: "SC3",
      title: "Pin มีสองครึ่ง",
      text: "ครึ่งสีแดงนับให้แดง ครึ่งสีน้ำเงินนับให้น้ำเงิน ส่วนครึ่งสีเหลืองจะนับให้ Alliance ที่ Owns Pin นั้น",
    },
    {
      code: "SC5",
      title: "Yellow Pin ขึ้นกับ ownership",
      text: "Yellow Pin ใน Quadrant ถูก Own โดยสีของ Toggle ใน Quadrant นั้น ส่วน Yellow Pin ใน Midfield ขึ้นกับฝ่ายที่มี Robot ใน Midfield มากกว่า",
    },
  ],
  autonomous: [
    {
      code: "SC7",
      title: "Autonomous Bonus",
      text: "ประเมินทันทีเมื่อ Autonomous จบ ฝ่ายที่มีคะแนนมากกว่าได้ 12 คะแนน ถ้าเสมอรวมถึง 0-0 ทั้งสองฝ่ายได้ 6 คะแนน",
    },
    {
      code: "SC8",
      title: "Autonomous Win Point",
      text: "ต้องจบ Autonomous โดยมีอย่างน้อย 7 Pins Placed ให้ฝ่ายตน, อย่างน้อย 3 Goals มี Pins ของฝ่ายตนอย่างน้อย 2 ชิ้น และไม่มี Robot แตะ Field Perimeter",
    },
    {
      code: "SG7",
      title: "อย่าข้าม Autonomous Line",
      text: "ช่วง Autonomous หุ่นยนต์ห้ามไปแตะพื้นที่ วัตถุ หรือ field elements ฝั่งตรงข้าม ยกเว้นวัตถุที่เริ่มเกมอยู่บนเส้นตามเงื่อนไข",
      tone: "danger",
    },
    {
      code: "SG8",
      title: "Midfield ช่วง Autonomous มีความเสี่ยง",
      text: "ทั้งสองฝ่ายอาจเข้าหา Midfield หรือวัตถุบน Autonomous Line ได้ การปะทะที่เกิดจากทั้งคู่เข้าไปเล่นพื้นที่เดียวกันจะเป็น judgment call ของ Head Referee",
      tone: "warning",
    },
  ],
  gameplay: [
    {
      code: "SG1",
      title: "เริ่มแมตช์ให้ถูกตำแหน่ง",
      text: "ก่อนเริ่ม หุ่นยนต์ต้องไม่เกิน 18 x 18 x 18 นิ้ว แตะ tile และ perimeter ฝั่งตน ไม่แตะ Goal/Loader/Toggle และถือ Preload ได้สูงสุด 1 Pin",
    },
    {
      code: "SG2",
      title: "ขยายแนวนอนสูงสุด 24 x 24 นิ้ว",
      text: "หลังแมตช์เริ่ม หุ่นยนต์ขยายแนวนอนได้ แต่ footprint ต้องไม่เกิน 24 x 24 นิ้วตลอดเวลา",
    },
    {
      code: "SG3",
      title: "ขยายแนวตั้งก่อน Endgame สูงสุด 50 นิ้ว",
      text: "ตั้งแต่เริ่มแมตช์จนก่อน Endgame ไม่มีส่วนใดของหุ่นยนต์สูงเกิน 50 นิ้ว",
    },
    {
      code: "SG6",
      title: "ครอบครองได้ไม่เกิน 1 Pin + 1 Cup",
      text: "หุ่นยนต์ห้าม Possess มากกว่า 1 Pin และมากกว่า 1 Cup พร้อมกัน แต่การ plow หลายวัตถุโดยไม่ครอบครองยังทำได้",
      tone: "warning",
    },
    {
      code: "SG9",
      title: "Alliance Goals ได้รับการป้องกัน",
      text: "หุ่นยนต์ห้ามยุ่งกับ Goals สีของฝ่ายตรงข้าม ทั้งการวางและการเอาวัตถุออก",
      tone: "danger",
    },
    {
      code: "SG10",
      title: "อย่าดึงวัตถุออกจาก Goal ที่ไม่ใช่สีเรา",
      text: "ห้ามเอา Scoring Objects ออกจาก neutral Goals หรือ Goals สีของคู่แข่ง",
      tone: "danger",
    },
    {
      code: "SG11",
      title: "Match Loads ใส่ได้ช่วง Driver Control",
      text: "Drive Team Member ใส่ Match Load ผ่าน Loader สี Alliance ของตนได้เฉพาะช่วง Driver Controlled Period และ Robot ต้องนำออกจากช่องล่างของ Loader",
    },
    {
      code: "SG12",
      title: "Endgame 20 วินาทีสุดท้าย",
      text: "หุ่นยนต์ที่อยู่ใน Midfield ช่วง Endgame ต้องสูงไม่เกิน 18 นิ้ว และควรคาดว่าจะมีการปะทะรุนแรงขึ้นในพื้นที่นี้",
      tone: "warning",
    },
    {
      code: "S1-S5",
      title: "ความปลอดภัยมาก่อน",
      text: "หุ่นยนต์หรือพฤติกรรมที่ไม่ปลอดภัยอาจถูก Disable หรือ Disqualify ต้องมีผู้ใหญ่ดูแลนักเรียนและ Drive Team Members ต้องสวม eye protection ที่สนาม",
      tone: "danger",
    },
    {
      code: "GG14-GG17",
      title: "ห้ามทำลาย กัก หรือบังคับให้คู่แข่งผิดกฎ",
      text: "การป้องกันทำได้ แต่ห้ามเล่นเพื่อทำลาย ทำให้พันกัน กักเกิน 3-count หรือบังคับคู่แข่งให้โดนโทษ",
      tone: "warning",
    },
  ],
  robot: [
    {
      code: "R1",
      title: "หนึ่งทีม หนึ่งหุ่นยนต์",
      text: "แต่ละทีมใช้หุ่นยนต์ได้เพียงตัวเดียวในอีเวนต์เดียวกัน และห้ามสลับหุ่นยนต์ระหว่าง Skills, Qualification หรือ Elimination",
    },
    {
      code: "R2",
      title: "ต้องผ่าน inspection",
      text: "หุ่นยนต์ต้องผ่านการตรวจ ถ้ามีการเปลี่ยนแปลงใหญ่หรือถูกพบว่าผิดกฎ อาจต้องตรวจใหม่หรือถูกตัดสิทธิ์ในแมตช์นั้น",
    },
    {
      code: "R3",
      title: "ขนาดเริ่มต้น 18 x 18 x 18 นิ้ว",
      text: "ต้องสามารถอยู่ใน volume เริ่มต้นตามกฎได้ และ restraints ที่ใช้คุมขนาดต้องยังติดอยู่กับหุ่นยนต์ตลอดแมตช์",
    },
    {
      code: "R4",
      title: "ป้ายเลขทีม",
      text: "ต้องมี license plates พร้อมเลขทีมบนสองด้านตรงข้ามของหุ่นยนต์ มองเห็น อ่านออก และตรงกับสี Alliance ของแมตช์",
    },
    {
      code: "R6-R8",
      title: "Brain, power และ firmware",
      text: "ใช้ VEX V5 Brain ได้ 1 ตัว ปุ่มเปิดปิดหรือ battery connection ต้องเข้าถึงได้ และใช้ VEXos ขั้นต่ำตาม manual",
    },
    {
      code: "R10",
      title: "กำลังมอเตอร์รวมไม่เกิน 88W",
      text: "ใช้ V5 Smart Motors 11W และ 5.5W ได้รวมกันไม่เกิน 88W โดยนับทุกมอเตอร์บนหุ่นยนต์แม้ไม่ได้เสียบอยู่",
      tone: "warning",
    },
    {
      code: "R11",
      title: "Subsystem 1 ไม่เกิน 55W",
      text: "มอเตอร์ของฐานขับเคลื่อนรวมกันไม่เกิน 55W และห้ามใช้พลังจาก subsystem นี้ไปขับกลไกอื่น",
      tone: "warning",
    },
    {
      code: "R18",
      title: "ของต้องห้าม",
      text: "ห้ามชิ้นส่วนที่เสี่ยงทำลายสนาม/หุ่นยนต์, เสี่ยงพันกัน, เสี่ยงอันตราย, 3D printed Robot parts และอุปกรณ์จากระบบ VEX อื่นที่ไม่ได้อนุญาต",
      tone: "danger",
    },
    {
      code: "R24",
      title: "Custom plastic จำกัด",
      text: "ใช้ non-shattering plastic ได้สูงสุด 12 ชิ้น แต่ละชิ้นไม่เกิน 4 x 8 x 0.070 นิ้ว และต้องแสดงให้ inspector ตรวจได้",
      tone: "warning",
    },
    {
      code: "R25-R26",
      title: "Pneumatics",
      text: "ใช้ VEX Air Tanks ได้สูงสุด 2 ถัง ชาร์จได้ไม่เกิน 100 psi และถ้ามี pneumatics ต้องมี VEX Pressure Gauge ที่มองเห็นได้",
    },
  ],
  skills: [
    {
      code: "RSC1",
      title: "ใช้กฎมาตรฐานเป็นหลัก",
      text: "Robot Skills ใช้กฎสนามและหุ่นยนต์เดียวกับ Head-to-Head ยกเว้นจุดที่ RSC ระบุปรับไว้",
    },
    {
      code: "RSC2",
      title: "หนึ่งหุ่นยนต์ทำคะแนนเอง",
      text: "Robot Skills เป็นแมตช์ที่หุ่นยนต์หนึ่งตัวพยายามทำคะแนนให้มากที่สุด โดยรูปแบบการเล่นและ field setup แตกต่างจาก Head-to-Head",
    },
    {
      code: "RSC4",
      title: "Field setup ต่างจากแมตช์ปกติ",
      text: "บาง Match Loads และ Goals ถูกจัดต่างออกไป โดย Goals เริ่มว่าง ไม่มี Placed Pins ตั้งแต่ต้น",
    },
    {
      code: "RSC5",
      title: "Skills Stop Time",
      text: "ทีมสามารถขอจบ Robot Skills Match ก่อนเวลาเพื่อบันทึก Skills Stop Time ใช้เป็น tiebreaker แต่ต้องแจ้งก่อนเริ่มแมตช์",
      tone: "warning",
    },
  ],
};

const checklist = [
  ["SG1/R3", "หุ่นยนต์อยู่ใน 18 x 18 x 18 นิ้วตอนเริ่ม และอยู่ฝั่ง Alliance ของตน"],
  ["SG5", "Preload เป็น Pin สีถูกฝ่าย และแตะหุ่นยนต์ของฝ่ายเดียวกันเพียงตัวเดียว"],
  ["SG6", "กลไกไม่ทำให้ครอบครองเกิน 1 Pin และ 1 Cup"],
  ["SG2/SG3/SG12", "ตรวจ footprint 24 x 24, ความสูง 50 นิ้ว, และ Endgame Midfield 18 นิ้ว"],
  ["R4", "ติดป้ายเลขทีมสองด้านตรงข้าม สีตรง Alliance และมองเห็นชัด"],
  ["R6/R12", "มี V5 Brain หนึ่งตัว ใช้ V5 Robot Battery หนึ่งก้อน และเข้าถึง power ได้"],
  ["R10/R11", "รวมมอเตอร์ไม่เกิน 88W และฐานขับเคลื่อนไม่เกิน 55W"],
  ["S5", "Drive Team Members มี eye protection ก่อนเข้าสนาม"],
];

const allRules = Object.values(rules).flat();

function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
        <article class="rule-card ${item.tone || ""}">
          <span class="rule-code">${item.code}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderChecklist() {
  const container = document.getElementById("checklistItems");
  container.innerHTML = checklist
    .map(
      ([code, text], index) => `
        <label class="check-item">
          <input type="checkbox" aria-label="เช็กข้อ ${index + 1}" />
          <span>
            <strong>${code}</strong>
            <p>${text}</p>
          </span>
        </label>
      `,
    )
    .join("");
}

function showSection(sectionId) {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === sectionId);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
}

function updateScore() {
  const form = document.getElementById("scoreCalculator");
  const formData = new FormData(form);
  const alliancePins = Number(formData.get("alliancePins") || 0);
  const yellowPins = Number(formData.get("yellowPins") || 0);
  const midfieldRobots = Number(formData.get("midfieldRobots") || 0);
  const autoBonus = formData.get("autoBonus") === "on" ? 12 : 0;
  const total = alliancePins * 5 + yellowPins * 10 + midfieldRobots * 8 + autoBonus;
  document.getElementById("scoreTotal").textContent = `${total} คะแนน`;
}

function searchRules(query) {
  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? allRules.filter((item) => `${item.code} ${item.title} ${item.text}`.toLowerCase().includes(normalized))
    : allRules.slice(0, 6);

  document.getElementById("searchResults").innerHTML = results
    .slice(0, 12)
    .map(
      (item) => `
        <article class="rule-card ${item.tone || ""}">
          <span class="rule-code">${item.code}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

renderCards("fieldCards", rules.field);
renderCards("scoringCards", rules.scoring);
renderCards("autonomousCards", rules.autonomous);
renderCards("gameplayCards", rules.gameplay);
renderCards("robotCards", rules.robot);
renderCards("skillsCards", rules.skills);
renderChecklist();
searchRules("");
updateScore();

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => showSection(button.dataset.section));
});

document.getElementById("scoreCalculator").addEventListener("input", updateScore);
document.getElementById("searchBox").addEventListener("input", (event) => searchRules(event.target.value));
