function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function topicName(topicId) {
  const topic = TOPICS.find(item => item.id === topicId);
  return topic ? topic.name : "Không rõ chuyên đề";
}

function subtopicName(topicId, subtopicId) {
  const topic = TOPICS.find(item => item.id === topicId);
  if (!topic) return "Không rõ dạng bài";

  const subtopic = topic.subtopics.find(item => item.id === subtopicId);
  return subtopic ? subtopic.name : "Không rõ dạng bài";
}

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function renderProblem() {
  const root = document.getElementById("viewRoot");
  const id = getParam("id");

  const problem = PROBLEMS.find(item => item.id === id);

  if (!problem) {
    root.innerHTML = `
      <div class="error-box">
        <h1>Không tìm thấy bài tập</h1>
        <p>Đường dẫn bài tập bị sai hoặc bài này chưa có trong file dữ liệu.</p>
      </div>
    `;
    return;
  }

  document.title = problem.title;

  root.innerHTML = `
    <section class="problem-head">
      <div class="badges">
        <span class="badge">${topicName(problem.topic)}</span>
        <span class="badge">${subtopicName(problem.topic, problem.subtopic)}</span>
        <span class="badge">${problem.level}</span>
        ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
      </div>

      <h1>${problem.title}</h1>
      <p>${problem.summary}</p>

      <div class="tools">
        <button class="tool-btn" onclick="window.print()">In bài này</button>
        <button class="tool-btn" onclick="copyCurrentLink()">Sao chép link</button>
      </div>
    </section>

    <section class="chat-block">
      <div class="avatar user">?</div>
      <div class="message problem">
        <h2>Đề bài</h2>
        <div>${problem.statement}</div>
      </div>
    </section>

    <section class="chat-block">
      <div class="avatar">G</div>
      <div class="message solution">
        <h2>Gợi ý</h2>
        <div>${problem.hint}</div>
      </div>
    </section>

    <section class="chat-block">
      <div class="avatar">✓</div>
      <div class="message solution">
        <h2>Lời giải</h2>
        <div>${problem.solution}</div>
      </div>
    </section>
  `;

  typesetMath();
}

function copyCurrentLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("Đã sao chép link bài tập!");
}

document.addEventListener("DOMContentLoaded", renderProblem);
