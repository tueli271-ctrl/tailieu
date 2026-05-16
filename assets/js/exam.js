// assets/js/exam.js
const PARTS = [
  { type: "trac-nghiem", title: "PHẦN I. Trắc nghiệm" },
  { type: "dung-sai", title: "PHẦN II. Đúng / Sai" },
  { type: "tra-loi-ngan", title: "PHẦN III. Trả lời ngắn" },
  { type: "tu-luan", title: "PHẦN IV. Tự luận" }
];

const examView = document.getElementById("examView");
const printBtn = document.getElementById("printBtn");
const backBtn = document.getElementById("backBtn");

printBtn.onclick = () => window.print();
backBtn.onclick = () => window.location.href = "index.html";

function getChoiceLabel(index) {
  return ["A", "B", "C", "D"][index] || "";
}

function renderTracNghiem(question, index, showSolution) {
  return `
    <div class="question">
      <div class="question-title">Câu ${index}. ${question.question}</div>
      <div class="choices">
        ${question.choices.map((choice, i) => `
          <div>${getChoiceLabel(i)}. ${choice}</div>
        `).join("")}
      </div>
      ${renderSolution(question, showSolution)}
    </div>
  `;
}

function renderDungSai(question, index, showSolution) {
  return `
    <div class="question">
      <div class="question-title">Câu ${index}. ${question.question}</div>
      <div>
        ${question.statements.map((st, i) => `
          <p class="statement">${String.fromCharCode(97 + i)}) ${st.text}</p>
        `).join("")}
      </div>
      ${renderSolution(question, showSolution)}
    </div>
  `;
}

function renderNormal(question, index, showSolution) {
  return `
    <div class="question">
      <div class="question-title">Câu ${index}. ${question.question}</div>
      ${renderSolution(question, showSolution)}
    </div>
  `;
}

function renderSolution(question, showSolution) {
  if (!showSolution) return "";

  return `
    <div class="solution-box">
      ${question.answer ? `<p><strong>Đáp án:</strong> ${question.answer}</p>` : ""}
      ${question.solution ? `<p><strong>Lời giải:</strong> ${question.solution}</p>` : ""}
    </div>
  `;
}

function renderQuestion(question, index, showSolution) {
  if (question.type === "trac-nghiem") {
    return renderTracNghiem(question, index, showSolution);
  }

  if (question.type === "dung-sai") {
    return renderDungSai(question, index, showSolution);
  }

  return renderNormal(question, index, showSolution);
}

function renderExam() {
  const data = JSON.parse(localStorage.getItem("createdExam") || "null");

  if (!data) {
    examView.innerHTML = `
      <div class="exam-head">
        <h2>Chưa có đề thi</h2>
        <p>Vui lòng quay lại trang chọn đề.</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="exam-head">
      <h2>${data.title}</h2>
      <p><strong>Mã đề:</strong> ${data.code}</p>
      <p>Thời gian làm bài: .......... phút</p>
    </div>
  `;

  PARTS.forEach(part => {
    const list = data.selected[part.type] || [];

    html += `
      <section class="exam-part">
        <h3>${part.title}</h3>
        ${list.map((question, index) => renderQuestion(question, index + 1, data.showSolution)).join("")}
      </section>
    `;
  });

  examView.innerHTML = html;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

renderExam();
