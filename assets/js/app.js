// assets/js/app.js
const PARTS = [
  { type: "trac-nghiem", title: "PHẦN I. Trắc nghiệm", total: 12 },
  { type: "dung-sai", title: "PHẦN II. Đúng / Sai", total: 2 },
  { type: "tra-loi-ngan", title: "PHẦN III. Trả lời ngắn", total: 4 },
  { type: "tu-luan", title: "PHẦN IV. Tự luận", total: 3 }
];

const builder = document.getElementById("builder");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");
const createBtn = document.getElementById("createBtn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
};

function getTopicsByType(type) {
  const map = new Map();

  QUESTIONS
    .filter(q => q.type === type)
    .forEach(q => {
      map.set(q.topic, (map.get(q.topic) || 0) + 1);
    });

  return [...map.entries()].map(([topic, count]) => ({ topic, count }));
}

function renderBuilder() {
  builder.innerHTML = "";

  PARTS.forEach(part => {
    const card = document.createElement("section");
    card.className = "card";

    const topics = getTopicsByType(part.type);

    card.innerHTML = `
      <h2 class="part-title">${part.title} <span class="muted">(${part.total} câu)</span></h2>
      ${topics.map(item => `
        <div class="topic-row">
          <div class="topic-name">${item.topic}</div>
          <div class="topic-count">Có ${item.count} câu</div>
          <label>
            Số câu lấy
            <input 
              type="number" 
              min="0" 
              max="${item.count}" 
              value="0"
              data-type="${part.type}"
              data-topic="${item.topic}"
            />
          </label>
        </div>
      `).join("")}
    `;

    builder.appendChild(card);
  });
}

function shuffleArray(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function pickQuestions(type, topic, amount, shuffle) {
  let list = QUESTIONS.filter(q => q.type === type && q.topic === topic);

  if (shuffle) {
    list = shuffleArray(list);
  }

  return list.slice(0, amount);
}

function createExam() {
  const title = document.getElementById("examTitle").value.trim();
  const code = document.getElementById("examCode").value.trim();
  const shuffle = document.getElementById("shuffleQuestions").checked;
  const showSolution = document.getElementById("showSolution").checked;
  const inputs = [...document.querySelectorAll("input[type='number']")];

  const selected = {};
  const totals = {};

  PARTS.forEach(part => {
    selected[part.type] = [];
    totals[part.type] = 0;
  });

  inputs.forEach(input => {
    const amount = Number(input.value);
    const type = input.dataset.type;
    const topic = input.dataset.topic;

    if (amount > 0) {
      const picked = pickQuestions(type, topic, amount, shuffle);
      selected[type].push(...picked);
      totals[type] += amount;
    }
  });

  for (const part of PARTS) {
    if (totals[part.type] !== part.total) {
      alert(`${part.title} cần đúng ${part.total} câu. Hiện đang chọn ${totals[part.type]} câu.`);
      return;
    }
  }

  if (shuffle) {
    PARTS.forEach(part => {
      selected[part.type] = shuffleArray(selected[part.type]);
    });
  }

  localStorage.setItem("createdExam", JSON.stringify({
    title,
    code,
    showSolution,
    selected
  }));

  window.location.href = "exam.html";
}

resetBtn.onclick = () => {
  document.querySelectorAll("input[type='number']").forEach(input => {
    input.value = 0;
  });
};

createBtn.onclick = createExam;

renderBuilder();

if (window.MathJax) {
  MathJax.typesetPromise();
}
