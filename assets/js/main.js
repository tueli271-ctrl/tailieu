const categoryNames = {
  algebra: "Đại số - Giải tích",
  geometry: "Hình học",
  combinatorics: "Tổ hợp - Xác suất",
  exam: "Đề tổng hợp"
};

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function levelClass(level) {
  if (level === "Dễ") return "easy";
  if (level === "Trung bình") return "medium";
  if (level === "Khó") return "hard";
  if (level === "HSG") return "hsg";
  return "";
}

function renderHome() {
  const total = document.getElementById("totalProblems");
  const latest = document.getElementById("latestProblems");

  if (total) {
    total.textContent = window.PROBLEMS.length;
  }

  if (latest) {
    const newest = window.PROBLEMS.slice(-4).reverse();

    latest.innerHTML = newest.map(problem => `
      <a class="latest-item" href="view.html?id=${problem.id}">
        <strong>${problem.title}</strong>
        <span>${categoryNames[problem.category]} · ${problem.level}</span>
      </a>
    `).join("");
  }
}

function renderProblemsPage() {
  const list = document.getElementById("problemList");
  const count = document.getElementById("problemCount");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const levelFilter = document.getElementById("levelFilter");

  if (!list || !count || !searchInput || !categoryFilter || !levelFilter) return;

  const categoryFromUrl = getQueryParam("category");
  if (categoryFromUrl && categoryNames[categoryFromUrl]) {
    categoryFilter.value = categoryFromUrl;
  }

  function render() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const level = levelFilter.value;

    const filtered = window.PROBLEMS.filter(problem => {
      const matchKeyword =
        problem.title.toLowerCase().includes(keyword) ||
        problem.summary.toLowerCase().includes(keyword) ||
        problem.tags.join(" ").toLowerCase().includes(keyword) ||
        categoryNames[problem.category].toLowerCase().includes(keyword);

      const matchCategory = category === "all" || problem.category === category;
      const matchLevel = level === "all" || problem.level === level;

      return matchKeyword && matchCategory && matchLevel;
    });

    count.textContent = `Tìm thấy ${filtered.length} bài tập.`;

    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty">Không tìm thấy bài tập phù hợp.</div>`;
      return;
    }

    list.innerHTML = filtered.map(problem => `
      <a class="problem-card" href="view.html?id=${problem.id}">
        <div class="badges">
          <span class="badge">${categoryNames[problem.category]}</span>
          <span class="badge ${levelClass(problem.level)}">${problem.level}</span>
        </div>

        <h3>${problem.title}</h3>
        <p>${problem.summary}</p>

        <div class="badges">
          ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
        </div>
      </a>
    `).join("");
  }

  searchInput.addEventListener("input", render);
  categoryFilter.addEventListener("change", render);
  levelFilter.addEventListener("change", render);

  render();
}

function renderProblemDetail() {
  const detail = document.getElementById("problemDetail");
  if (!detail) return;

  const id = getQueryParam("id");
  const problem = window.PROBLEMS.find(item => item.id === id);

  if (!problem) {
    detail.innerHTML = `
      <div class="detail-card">
        <a class="back-link" href="problems.html">← Quay lại kho bài tập</a>
        <h1>Không tìm thấy bài tập</h1>
        <p class="math-block">Bài tập này không tồn tại hoặc đường dẫn bị sai.</p>
      </div>
    `;
    return;
  }

  document.title = problem.title;

  detail.innerHTML = `
    <a class="back-link" href="problems.html">← Quay lại kho bài tập</a>

    <article class="detail-card">
      <div class="badges">
        <span class="badge">${categoryNames[problem.category]}</span>
        <span class="badge ${levelClass(problem.level)}">${problem.level}</span>
        ${problem.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}
      </div>

      <h1>${problem.title}</h1>

      <section class="detail-section">
        <h2>Đề bài</h2>
        <div class="math-block">${problem.statement}</div>
      </section>

      <section class="detail-section">
        <h2>Gợi ý</h2>
        <div class="math-block">${problem.hint}</div>
      </section>

      <section class="detail-section">
        <h2>Lời giải</h2>
        <div class="math-block">${problem.solution}</div>
      </section>
    </article>
  `;

  typesetMath();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderProblemsPage();
  renderProblemDetail();
  typesetMath();
});
