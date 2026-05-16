const topicTree = document.getElementById("topicTree");
const topicCards = document.getElementById("topicCards");
const problemList = document.getElementById("problemList");
const problemCount = document.getElementById("problemCount");

const searchInput = document.getElementById("searchInput");
const topicFilter = document.getElementById("topicFilter");
const subtopicFilter = document.getElementById("subtopicFilter");
const levelFilter = document.getElementById("levelFilter");
const clearBtn = document.getElementById("clearBtn");
const themeBtn = document.getElementById("themeBtn");

let state = {
  search: "",
  topic: "",
  subtopic: "",
  level: ""
};

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

function renderTopicFilter() {
  TOPICS.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = topic.title;
    topicFilter.appendChild(option);
  });
}

function renderSubtopicFilter() {
  subtopicFilter.innerHTML = `<option value="">Tất cả dạng bài</option>`;

  let subtopics = [];

  if (state.topic) {
    const topic = getTopic(state.topic);
    subtopics = topic ? topic.subtopics : [];
  } else {
    subtopics = TOPICS.flatMap(topic => topic.subtopics);
  }

  subtopics.forEach(subtopic => {
    const option = document.createElement("option");
    option.value = subtopic.id;
    option.textContent = subtopic.title;
    subtopicFilter.appendChild(option);
  });

  subtopicFilter.value = state.subtopic;
}

function renderTopicTree() {
  topicTree.innerHTML = "";

  TOPICS.forEach(topic => {
    const box = document.createElement("div");
    box.className = "tree-topic";

    const titleBtn = document.createElement("button");
    titleBtn.className = "tree-title";
    titleBtn.textContent = topic.title;

    if (state.topic === topic.id && !state.subtopic) {
      titleBtn.classList.add("active");
    }

    titleBtn.addEventListener("click", () => {
      state.topic = topic.id;
      state.subtopic = "";
      syncFilters();
      renderAll();
    });

    const subBox = document.createElement("div");
    subBox.className = "tree-sub";

    topic.subtopics.forEach(subtopic => {
      const subBtn = document.createElement("button");
      subBtn.textContent = subtopic.title;

      if (state.subtopic === subtopic.id) {
        subBtn.classList.add("active");
      }

      subBtn.addEventListener("click", () => {
        state.topic = topic.id;
        state.subtopic = subtopic.id;
        syncFilters();
        renderAll();
      });

      subBox.appendChild(subBtn);
    });

    box.appendChild(titleBtn);
    box.appendChild(subBox);
    topicTree.appendChild(box);
  });
}

function renderTopicCards() {
  topicCards.innerHTML = "";

  TOPICS.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";

    card.innerHTML = `
      <h3>${topic.title}</h3>
      <ul>
        ${topic.subtopics.map(subtopic => `<li>${subtopic.title}</li>`).join("")}
      </ul>
    `;

    card.addEventListener("click", () => {
      state.topic = topic.id;
      state.subtopic = "";
      syncFilters();
      renderAll();
      document.getElementById("problems").scrollIntoView();
    });

    topicCards.appendChild(card);
  });
}

function getFilteredProblems() {
  const keyword = state.search.trim().toLowerCase();

  return PROBLEMS.filter(problem => {
    const topic = getTopic(problem.topic);
    const subtopic = getSubtopic(problem.topic, problem.subtopic);

    const text = [
      problem.title,
      problem.summary,
      problem.level,
      topic ? topic.title : "",
      subtopic ? subtopic.title : "",
      problem.tags.join(" ")
    ].join(" ").toLowerCase();

    const matchSearch = !keyword || text.includes(keyword);
    const matchTopic = !state.topic || problem.topic === state.topic;
    const matchSubtopic = !state.subtopic || problem.subtopic === state.subtopic;
    const matchLevel = !state.level || problem.level === state.level;

    return matchSearch && matchTopic && matchSubtopic && matchLevel;
  });
}

function renderProblems() {
  const problems = getFilteredProblems();

  problemCount.textContent = `Tìm thấy ${problems.length} bài tập.`;
  problemList.innerHTML = "";

  if (problems.length === 0) {
    problemList.innerHTML = `
      <div class="empty">
        Không tìm thấy bài tập phù hợp.
      </div>
    `;
    return;
  }

  problems.forEach(problem => {
    const topic = getTopic(problem.topic);
    const subtopic = getSubtopic(problem.topic, problem.subtopic);

    const card = document.createElement("article");
    card.className = "problem-card";
    card.dataset.id = problem.id;

    card.innerHTML = `
      <div class="problem-top">
        <h3>${problem.title}</h3>
        <span class="badge level ${getLevelClass(problem.level)}">${problem.level}</span>
      </div>

      <p>${problem.summary}</p>

      <div class="badges">
        <span class="badge">${topic ? topic.title : "Không rõ"}</span>
        <span class="badge">${subtopic ? subtopic.title : "Không rõ"}</span>
        ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `view.html?id=${card.dataset.id}`;
    });

    problemList.appendChild(card);
  });
}

function syncFilters() {
  searchInput.value = state.search;
  topicFilter.value = state.topic;
  levelFilter.value = state.level;
  renderSubtopicFilter();
  subtopicFilter.value = state.subtopic;
}

function bindEvents() {
  searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    renderAll();
  });

  topicFilter.addEventListener("change", event => {
    state.topic = event.target.value;
    state.subtopic = "";
    renderSubtopicFilter();
    renderAll();
  });

  subtopicFilter.addEventListener("change", event => {
    state.subtopic = event.target.value;
    renderAll();
  });

  levelFilter.addEventListener("change", event => {
    state.level = event.target.value;
    renderAll();
  });

  clearBtn.addEventListener("click", () => {
    state = {
      search: "",
      topic: "",
      subtopic: "",
      level: ""
    };

    syncFilters();
    renderAll();
  });
}

function renderAll() {
  renderTopicTree();
  renderTopicCards();
  renderProblems();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderTopicFilter();
  renderSubtopicFilter();
  bindEvents();
  renderAll();
});
