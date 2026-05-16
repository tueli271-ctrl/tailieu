const TYPE_KEYS = {
tracNghiem: "trac-nghiem",
dungSai: "dung-sai",
traLoiNgan: "tra-loi-ngan"
};
const BOX_IDS = {
tracNghiem: "tracNghiemBox",
dungSai: "dungSaiBox",
traLoiNgan: "traLoiNganBox"
};
const TOTAL_IDS = {
tracNghiem: "tnTotal",
dungSai: "dsTotal",
traLoiNgan: "tlnTotal"
};
const DEFAULT_COUNTS = {
tracNghiem: {
"xac-suat": 4,
"hinh-hoc-khong-gian": 4,
"dao-ham": 4,
"mu-logarit": 0
},
dungSai: {
"xac-suat": 1,
"hinh-hoc-khong-gian": 1,
"dao-ham": 1,
"mu-logarit": 1
},
traLoiNgan: {
"xac-suat": 1,
"hinh-hoc-khong-gian": 1,
"dao-ham": 1,
"mu-logarit": 1
}
};
function countAvailable(type, topic) {
return QUESTIONS.filter(q => q.type === type && q.topic === topic).length;
}
function inputId(sectionKey, topicId) {
return `${sectionKey}-${topicId}`;
}
function renderTopicInputs() {
Object.entries(TYPE_KEYS).forEach(([sectionKey, type]) => {
const box = document.getElementById(BOX_IDS[sectionKey]);
box.innerHTML = "";
TOPICS.forEach(topic => {
const available = countAvailable(type, topic.id);
const value = DEFAULT_COUNTS[sectionKey]?.[topic.id] ?? 0;
const card = document.createElement("article");
card.className = "topic-card";
card.innerHTML = `
<h3>${topic.name}</h3>
<p>Có sẵn ${available} câu trong ngân hàng.</p>
<div class="row">
<input
id="${inputId(sectionKey, topic.id)}"
type="number"
min="0"
max="${available}"
value="${Math.min(value, available)}"
data-section="${sectionKey}"
data-topic="${topic.id}"
/>
<span>câu</span>
</div>
`;
box.appendChild(card);
});
});
document.querySelectorAll("input[type='number']").forEach(input => {
input.addEventListener("input", updateTotals);
});
updateTotals();
}
function updateTotals() {
Object.keys(TYPE_KEYS).forEach(sectionKey => {
let total = 0;
TOPICS.forEach(topic => {
const input = document.getElementById(inputId(sectionKey, topic.id));
total += Number(input.value || 0);
});
document.getElementById(TOTAL_IDS[sectionKey]).textContent = `${total} câu`;
});
}
function shuffleArray(array) {
const a = [...array];
for (let i = a.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [a[j], a[i]];
}
return a;
}
function pickQuestions(type, topic, amount, shouldShuffle) {
const pool = QUESTIONS.filter(q => q.type === type && q.topic === topic);
const list = shouldShuffle ? shuffleArray(pool) : pool;
return list.slice(0, amount);
}
function readCounts() {
const counts = {};
Object.keys(TYPE_KEYS).forEach(sectionKey => {
counts[sectionKey] = {};
TOPICS.forEach(topic => {
const input = document.getElementById(inputId(sectionKey, topic.id));
const value = Math.max(0, Number(input.value || 0));
counts[sectionKey][topic.id] = value;
});
});
return counts;
}
function validateCounts(counts) {
const errors = [];
Object.entries(TYPE_KEYS).forEach(([sectionKey, type]) => {
TOPICS.forEach(topic => {
const requested = counts[sectionKey][topic.id];
const available = countAvailable(type, topic.id);
if (requested > available) {
errors.push(`${TYPE_NAMES[type]} - ${topic.name}: cần ${requested} câu, nhưng chı̉ có ${available} câu.`);
}
});
});
return errors;
}
function createExam() {
const counts = readCounts();
const errors = validateCounts(counts);
if (errors.length > 0) {
alert("Không đủ câu hỏi:\n\n" + errors.join("\n"));
return;
}
const shouldShuffle = document.getElementById("shuffleQuestions").checked;
const selectedExam = {
title: document.getElementById("examTitle").value.trim() || "ĐỀKIỂM TRA TOÁN 11 - HỌC KỲ 2",
code: document.getElementById("examCode").value.trim() || "101",
showAnswer: document.getElementById("showAnswer").checked,
createdAt: new Date().toISOString(),
tracNghiem: [],
dungSai: [],
traLoiNgan: []
};
Object.entries(TYPE_KEYS).forEach(([sectionKey, type]) => {
TOPICS.forEach(topic => {
const amount = counts[sectionKey][topic.id];
if (amount > 0) {
selectedExam[sectionKey].push(...pickQuestions(type, topic.id, amount, shouldShuffle));
}
});
if (shouldShuffle) {
selectedExam[sectionKey] = shuffleArray(selectedExam[sectionKey]);
}
});
const total =
selectedExam.tracNghiem.length +
selectedExam.dungSai.length +
selectedExam.traLoiNgan.length;
if (total === 0) {
alert("Bạn chưa chọn câu nào.");
return;
}
localStorage.setItem("selectedExam", JSON.stringify(selectedExam));
window.location.href = "exam.html";
}
function resetForm() {
Object.keys(TYPE_KEYS).forEach(sectionKey => {
TOPICS.forEach(topic => {
const input = document.getElementById(inputId(sectionKey, topic.id));
const available = countAvailable(TYPE_KEYS[sectionKey], topic.id);
const value = DEFAULT_COUNTS[sectionKey]?.[topic.id] ?? 0;
input.value = Math.min(value, available);
});
});
document.getElementById("examTitle").value = "ĐỀKIỂM TRA TOÁN 11 - HỌC KỲ 2";
document.getElementById("examCode").value = "101";
document.getElementById("shuffleQuestions").checked = true;
document.getElementById("showAnswer").checked = false;
updateTotals();
}
document.addEventListener("DOMContentLoaded", () => {
renderTopicInputs();
document.getElementById("createBtn").addEventListener("click", createExam);
document.getElementById("resetBtn").addEventListener("click", resetForm);
});
