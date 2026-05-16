function escapeHtml(str = "") {
return String(str)
.replaceAll("&", "&amp;")
.replaceAll("<", "&lt;")
.replaceAll(">", "&gt;");
}
function sectionTemplate(title, body) {
if (!body.trim()) return "";
return `
<section class="exam-section">
<h2>${title}</h2>
${body}
</section>
`;
}
function renderMultipleChoice(questions) {
const body = questions.map((q, index) => {
const choices = q.choices.map((choice, i) => {
const label = String.fromCharCode(65 + i);
return `<div><b>${label}.</b> ${choice}</div>`;
}).join("");
return `
<article class="question">
<div><span class="question-title">Câu ${index + 1}.</span> ${q.question}</div>
<div class="choices">${choices}</div>
</article>
`;
}).join("");
document.getElementById("multipleChoiceSection").innerHTML =
sectionTemplate("PHẦN I. TRẮC NGHIỆM", body);
}
function renderTrueFalse(questions) {
const letters = ["a", "b", "c", "d"];
const body = questions.map((q, index) => {
const statements = q.statements.map((statement, i) => {
return `<div><b>${letters[i]})</b> ${statement}</div>`;
}).join("");
return `
<article class="question">
<div><span class="question-title">Câu ${index + 1}.</span> ${q.question}</div>
<div class="statements">${statements}</div>
</article>
`;
}).join("");
document.getElementById("trueFalseSection").innerHTML =
sectionTemplate("PHẦN II. ĐÚNG / SAI", body);
}
function renderShortAnswer(questions) {
const body = questions.map((q, index) => {
return `
<article class="question">
<div><span class="question-title">Câu ${index + 1}.</span> ${q.question}</div>
<div>Đáp án: .............................................................................................. ⌋
,→ ..........</div>
</article>
`;
}).join("");
document.getElementById("shortAnswerSection").innerHTML =
sectionTemplate("PHẦN III. TRẢ LỜI NGẮN", body);
}
function renderAnswerTable(title, questions, getAnswer) {
if (questions.length === 0) return "";
const rows = questions.map((q, index) => `
<tr>
<td>${index + 1}</td>
<td>${getAnswer(q)}</td>
</tr>
`).join("");
return `
<h3>${title}</h3>
<table class="answer-table">
<thead>
<tr>
<th>Câu</th>
<th>Đáp án</th>
</tr>
</thead>
<tbody>${rows}</tbody>
</table>
`;
}
function renderSolutions(title, questions) {
if (questions.length === 0) return "";
const body = questions.map((q, index) => `
<article class="question">
<div><b>Câu ${index + 1}.</b> ${q.solution || "Chưa có lời giải."}</div>
</article>
`).join("");
return `
<h3>${title}</h3>
<div class="solution">${body}</div>
`;
}
function renderAnswers(exam) {
if (!exam.showAnswer) {
document.getElementById("answerSection").innerHTML = "";
return;
}
const answerHtml = `
<section class="answer-box">
<h2>ĐÁP ÁN VÀ LỜI GIẢI</h2>
${renderAnswerTable("I. Trắc nghiệm", exam.tracNghiem, q => q.answer)}
${renderAnswerTable("II. Đúng / Sai", exam.dungSai, q => q.answer.join(" - "))}
${renderAnswerTable("III. Trả lời ngắn", exam.traLoiNgan, q => q.answer)}
${renderSolutions("Lời giải phần trắc nghiệm", exam.tracNghiem)}
${renderSolutions("Lời giải phần đúng / sai", exam.dungSai)}
${renderSolutions("Lời giải phần trả lời ngắn", exam.traLoiNgan)}
</section>
`;
document.getElementById("answerSection").innerHTML = answerHtml;
}
function renderExam() {
const raw = localStorage.getItem("selectedExam");
if (!raw) {
document.getElementById("examPaper").innerHTML = `
<p class="empty">Chưa có đềnào được tạo. Hãy quay lại trang chọn đề.</p>
`;
return;
}
const exam = JSON.parse(raw);
document.getElementById("paperTitle").textContent = exam.title || "ĐỀKIỂM TRA TOÁN 11 - HỌC KỲ 2";
document.getElementById("paperCode").textContent = exam.code || "101";
renderMultipleChoice(exam.tracNghiem || []);
renderTrueFalse(exam.dungSai || []);
renderShortAnswer(exam.traLoiNgan || []);
renderAnswers(exam);
if (window.MathJax) {
MathJax.typesetPromise();
}
}
document.addEventListener("DOMContentLoaded", () => {
renderExam();
document.getElementById("printBtn").addEventListener("click", () => {
window.print();
});
});
