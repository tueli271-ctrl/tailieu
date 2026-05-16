const $ = (selector) => document.querySelector(selector);

const state = {
  topic: "all",
  subtopic: "all",
  level: "all",
  keyword: ""
};

function topicName(topicId) {
  const topic = TOPICS.find(item => item.id === topicId);
  return topic ? topic.name : "Không rõ";
}

function subtopicName(topicId, subtopicId) {
  const topic = TOPICS.find(item => item.id === topicId);
  if (!topic) return "Không rõ";

  const subtopic = topic.subtopics.find(item => item.id === subtopicId);
  return subtopic ? subtopic.name : "Không rõ";
}

function levelClass(level) {
  if (level === "Dễ") return "easy";
  if (level === "Trung bình") return "medium";
  if (level === "Khó") return "hard";
  if (level === "HSG") return "hsg";
  return "";
}

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function renderStats() {
  const totalSubtopics = TOPICS.reduce((sum, topic) => sum + topic.subtopics.length, 0);

  $("#statTopic").textContent = TOPICS.length;
  $("#statSubtopic").textContent = totalSubtopics;
  $("#statProblem").textContent = PROBLEMS.length;
}

function renderTopicCards() {
  const box = $("#topicCards");

  box.innerHTML = TOPICS.map(topic => `
    <article class="topic-card ${topic.id}" data-topic="${topic.id}">
      <h3>${topic.name}</h3>
      <p>${topic.desc}</p>
      <ul>
        ${topic.subtopics.map(sub => `<li>${sub.name}</li>`).join("")}
      </ul>
    </article>
  `).join("");

  box.querySelectorAll(".topic-card").forEach(card => {
    card.addEventListener("click", () => {
      state.topic = card.dataset.topic;
      state.subtopic = "all";
      state.level = "all";
      state.keyword = "";

      syncControls();
      renderProblems();

      location.hash = "problems";
    });
  });
}

function renderTopicTree() {
  const box = $("#topicTree");

  box.innerHTML = TOPICS.map(topic => `
    <div class="tree-topic">
      <button data-topic="${topic.id}">${topic.name}</button>
      <ul>
        ${topic.subtopics.map(sub => `
          <li data-topic="${topic.id}" data-subtopic="${sub.id}">
            ${sub.name}
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");

  box.querySelectorAll("button[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      state.topic = button.dataset.topic;
      state.subtopic = "all";
      syncControls();
      renderProblems();
    });
  });

  box.querySelectorAll("li[data-subtopic]").forEach(item => {
    item.addEventListener("click", () => {
      state.topic = item.dataset.topic;
      state.subtopic = `${item.dataset.topic}::${item.dataset.subtopic}`;
      syncControls();
      renderProblems();
    });
  });
}

function renderTopicFilter() {
  const select = $("#topicFilter");

  select.innerHTML = `
    <option value="all">Tất cả chuyên đề</option>
    ${TOPICS.map(topic => `<option value="${topic.id}">${topic.name}</option>`).join("")}
  `;
}

function renderSubtopicFilter() {
  const select = $("#subtopicFilter");

  let topicsToShow = TOPICS;

  if (state.topic !== "all") {
    topicsToShow = TOPICS.filter(topic => topic.id === state.topic);
  }

  const options = topicsToShow.flatMap(topic => {
    return topic.subtopics.map(sub => {
      const value = `${topic.id}::${sub.id}`;
      const label = state.topic === "all" ? `${topic.name} - ${sub.name}` : sub.name;
      return `<option value="${value}">${label}</option>`;
    });
  });

  select.innerHTML = `
    <option value="all">Tất cả dạng bài</option>
    ${options.join("")}
  `;
}

function syncControls() {
  $("#searchInput").value = state.keyword;
  $("#topicFilter").value = state.topic;
  $("#levelFilter").value = state.level;

  renderSubtopicFilter();

  $("#subtopicFilter").value = state.subtopic;
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getFilteredProblems() {
  const keyword = normalize(state.keyword.trim());

  return PROBLEMS.filter(problem => {
    const text = normalize([
      problem.title,
      problem.summary,
      topicName(problem.topic),
      subtopicName(problem.topic, problem.subtopic),
      problem.level,
      problem.tags.join(" ")
    ].join(" "));

    const matchKeyword = keyword === "" || text.includes(keyword);
    const matchTopic = state.topic === "all" || problem.topic === state.topic;
    const matchSubtopic = state.subtopic === "all" || state.subtopic === `${problem.topic}::${problem.subtopic}`;
    const matchLevel = state.level === "all" || problem.level === state.level;

    return matchKeyword && matchTopic && matchSubtopic && matchLevel;
  });
}

function renderProblems() {
  const list = $("#problemList");
  const resultCount = $("#resultCount");
  const problems = getFilteredProblems();

  resultCount.textContent = `Tìm thấy ${problems.length} bài tập.`;

  if (problems.length === 0) {
    list.innerHTML = `<div class="empty">Không tìm thấy bài tập phù hợp.</div>`;
    return;
  }

  list.innerHTML = problems.map(problem => `
    <article class="problem-card" data-id="${problem.id}">
      <div class="badges">
        <span class="badge">${topicName(problem.topic)}</span>
        <span class="badge ${levelClass(problem.level)}">${problem.level}</span>
      </div>

      <h3>${problem.title}</h3>
      <p>${problem.summary}</p>

      <div class="badges">
        <span class="badge">${subtopicName(problem.topic, problem.subtopic)}</span>
        ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");

  list.querySelectorAll(".problem-card").forEach(card => {
    card.addEventListener("click", () => {
      openProblem(card.dataset.id);
    });
  });
}

function openProblem(id) {
  const problem = PROBLEMS.find(item => item.id === id);

  if (!problem) return;

  $("#problemDetail").innerHTML = `
    <div class="badges">
      <span class="badge">${topicName(problem.topic)}</span>
      <span class="badge">${subtopicName(problem.topic, problem.subtopic)}</span>
      <span class="badge ${levelClass(problem.level)}">${problem.level}</span>
      ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
    </div>

    <h2 class="detail-title">${problem.title}</h2>
    <p class="detail-summary">${problem.summary}</p>

    <section class="detail-section">
      <h3>Đề bài</h3>
      <div class="math-content">${problem.statement}</div>
    </section>

    <section class="detail-section">
      <h3>Gợi ý</h3>
      <div class="math-content">${problem.hint}</div>
    </section>

    <section class="detail-section">
      <h3>Lời giải</h3>
      <div class="math-content">${problem.solution}</div>
    </section>
  `;

  $("#detailOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  typesetMath();
}

function closeProblem() {
  $("#detailOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function bindEvents() {
  $("#searchInput").addEventListener("input", event => {
    state.keyword = event.target.value;
    renderProblems();
  });

  $("#topicFilter").addEventListener("change", event => {
    state.topic = event.target.value;
    state.subtopic = "all";
    renderSubtopicFilter();
    renderProblems();
  });

  $("#subtopicFilter").addEventListener("change", event => {
    state.subtopic = event.target.value;
    renderProblems();
  });

  $("#levelFilter").addEventListener("change", event => {
    state.level = event.target.value;
    renderProblems();
  });

  $("#resetBtn").addEventListener("click", () => {
    state.topic = "all";
    state.subtopic = "all";
    state.level = "all";
    state.keyword = "";
    syncControls();
    renderProblems();
  });

  $("#closeDetail").addEventListener("click", closeProblem);

  $("#detailOverlay").addEventListener("click", event => {
    if (event.target.id === "detailOverlay") {
      closeProblem();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProblem();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderTopicCards();
  renderTopicTree();
  renderTopicFilter();
  renderSubtopicFilter();
  syncControls();
  renderProblems();
  bindEvents();
  typesetMath();
});
