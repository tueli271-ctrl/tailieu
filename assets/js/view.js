const viewRoot = document.getElementById("viewRoot");
const themeBtn = document.getElementById("themeBtn");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
  });
}

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function getTopic(topicId) {
  return TOPICS.find(topic => topic.id === topicId);
}

function getSubtopic(topicId, subtopicId) {
  const topic = getTopic(topicId);
  if (!topic) return null;

  return topic.subtopics.find(subtopic => subtopic.id === subtopicId);
}

function getLevelClass(level) {
  if (level === "Dễ") return "easy";
  if (level === "Trung bình") return "medium";
  if (level === "Khó") return "hard";
  return "";
}

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function mathBlock(text) {
  return `
    <div class="math-content">${escapeHTML(text.trim())}</div>
  `;
}

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  } else {
    setTimeout(typesetMath, 300);
  }
}

function renderNotFound() {
  viewRoot.innerHTML = `
    <div class="empty">
      <h2>Không tìm thấy bài tập</h2>
      <p>Có thể đường link sai hoặc id bài tập chưa có trong file data.js.</p>
      <div class="action-row">
        <a href="index.html">← Quay về trang chính</a>
      </div>
    </div>
  `;
}

function renderProblem(problem) {
  const topic = getTopic(problem.topic);
  const subtopic = getSubtopic(problem.topic, problem.subtopic);

  document.title = problem.title;

  viewRoot.innerHTML = `
    <section class="chat-title">
      <h1>${problem.title}</h1>
      <p>${problem.summary}</p>

      <div class="chat-meta">
        <span class="badge">${topic ? topic.title : "Không rõ chuyên đề"}</span>
        <span class="badge">${subtopic ? subtopic.title : "Không rõ dạng bài"}</span>
        <span class="badge level ${getLevelClass(problem.level)}">${problem.level}</span>
        ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
      </div>
    </section>

    <div class="chat">
      <div class="message user-msg">
        <div class="avatar user">T</div>
        <div class="bubble">
          <h2>Đề bài</h2>
          ${mathBlock(problem.statement)}
        </div>
      </div>

      <div class="message bot-msg">
        <div class="avatar bot">AI</div>
        <div class="bubble">
          <h2>Gợi ý</h2>
          ${mathBlock(problem.hint)}
        </div>
      </div>

      <div class="message bot-msg">
        <div class="avatar bot">AI</div>
        <div class="bubble">
          <h2>Lời giải</h2>
          ${mathBlock(problem.solution)}
        </div>
      </div>
    </div>

    <div class="action-row">
      <a href="index.html">← Về danh sách bài tập</a>
    </div>
  `;

  typesetMath();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const id = getParam("id");
  const problem = PROBLEMS.find(item => item.id === id);

  if (!problem) {
    renderNotFound();
    return;
  }

  renderProblem(problem);
});
