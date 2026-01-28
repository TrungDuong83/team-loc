/* ===== CONFIG ===== */
const TEAM_CONFIG = {
  1: 6,
  2: 6,
  3: 7,
  4: 6,
  5: 8,
  6: 6,
  7: 7,
  8: 6
};

const LUCKY_POOL = [
  { title: "🎉 LỘC ĐỒNG ĐỘI", content: "Cả bàn nhận 100.000 VNĐ / người" },
  { title: "🌱 LỘC MAY MẮN", content: "Cả bàn nhận 50.000 VNĐ / người" },
  { title: "🔥 LỘC BỨT PHÁ", content: "01 người nhận 500.000 VNĐ<br>Các thành viên còn lại 50.000 VNĐ" },
  { title: "🎁 LỘC ĐẶC BIỆT", content: "Cả bàn nhận 200.000 VNĐ / người" }
];

/* ===== STATE ===== */
const params = new URLSearchParams(window.location.search);
const teamId = params.get("team");

if (!teamId || !TEAM_CONFIG[teamId]) {
  alert("QR không hợp lệ hoặc thiếu mã bàn");
}

const usedTeams = JSON.parse(localStorage.getItem("usedTeams") || "{}");
if (usedTeams[teamId]) {
  alert(`BÀN SỐ ${teamId} đã hái lộc rồi`);
}

const teamSize = TEAM_CONFIG[teamId];
document.getElementById("teamTitle").innerText = `TEAM LỘC – BÀN SỐ ${teamId}`;

const nameInputsDiv = document.getElementById("nameInputs");
const openBtn = document.getElementById("openBtn");
const statusText = document.getElementById("statusText");

/* ===== BUILD INPUTS ===== */
for (let i = 1; i <= teamSize; i++) {
  const input = document.createElement("input");
  input.placeholder = `Thành viên ${i}`;
  input.oninput = checkNames;
  nameInputsDiv.appendChild(input);
}

/* ===== CHECK NAMES ===== */
function checkNames() {
  const inputs = nameInputsDiv.querySelectorAll("input");
  const filled = [...inputs].filter(i => i.value.trim() !== "").length;

  if (filled === teamSize) {
    statusText.innerText = "✅ Đã đủ thành viên";
    openBtn.disabled = false;
  } else {
    statusText.innerText = `⛔ Còn thiếu ${teamSize - filled} người`;
    openBtn.disabled = true;
  }
}

/* ===== START LUCKY ===== */
function startLucky() {
  document.getElementById("screen-names").classList.add("hidden");
  document.getElementById("screen-countdown").classList.remove("hidden");

  let count = 3;
  const num = document.getElementById("countNum");
  num.innerText = count;

  const timer = setInterval(() => {
    count--;
    num.innerText = count;
    if (count === 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

/* ===== RESULT ===== */
function showResult() {
  document.getElementById("screen-countdown").classList.add("hidden");
  document.getElementById("screen-result").classList.remove("hidden");

  const pick = LUCKY_POOL[Math.floor(Math.random() * LUCKY_POOL.length)];
  document.getElementById("resultTitle").innerText = pick.title;
  document.getElementById("resultContent").innerHTML = pick.content;

  usedTeams[teamId] = true;
  localStorage.setItem("usedTeams", JSON.stringify(usedTeams));
}
