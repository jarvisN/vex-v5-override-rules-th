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

renderRuleLists();
updateScore();
searchRules("");

document.getElementById("scoreCalculator").addEventListener("input", updateScore);
document.getElementById("searchBox").addEventListener("input", (event) => searchRules(event.target.value));
