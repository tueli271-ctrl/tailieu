<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Toán 11 - Học kỳ 2</title>

  <link rel="stylesheet" href="assets/css/style.css" />

  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)'], ['$', '$']],
        displayMath: [['\\[', '\\]']]
      },
      chtml: {
        scale: 1
      }
    };
  </script>
  <script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

<body>
  <header class="topbar">
    <a class="brand" href="index.html">
      <span class="brand-logo">11</span>
      <span>Toán 11 - Học kỳ 2</span>
    </a>

    <nav class="nav">
      <a href="#topics">Chuyên đề</a>
      <a href="#problems">Bài tập</a>
      <a href="#guide">Hướng dẫn</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-text">
        <p class="eyebrow">Kho bài tập lớp 11</p>
        <h1>Website tổng hợp bài tập Toán 11 học kỳ 2</h1>
        <p>
          Gồm Mũ và Logarit, Đạo hàm, Hình học không gian vuông góc và Xác suất.
          Có tìm kiếm, lọc chuyên đề, lọc dạng bài và xem lời giải.
        </p>

        <div class="hero-actions">
          <a class="btn primary" href="#problems">Vào kho bài tập</a>
          <a class="btn ghost" href="#topics">Xem chuyên đề</a>
        </div>
      </div>

      <div class="hero-panel">
        <h3>Thống kê nhanh</h3>
        <div class="mini-stats">
          <div>
            <strong id="statTopic">0</strong>
            <span>Chuyên đề lớn</span>
          </div>
          <div>
            <strong id="statSubtopic">0</strong>
            <span>Dạng bài</span>
          </div>
          <div>
            <strong id="statProblem">0</strong>
            <span>Bài tập mẫu</span>
          </div>
        </div>
      </div>
    </section>

    <section id="topics" class="section">
      <div class="section-title">
        <p class="eyebrow">Sơ đồ học kỳ 2</p>
        <h2>Chuyên đề chính</h2>
      </div>

      <div id="topicCards" class="topic-grid"></div>
    </section>

    <section id="problems" class="section problem-section">
      <div class="section-title">
        <p class="eyebrow">Kho bài tập</p>
        <h2>Danh sách bài tập</h2>
      </div>

      <div class="workspace">
        <aside class="sidebar">
          <h3>Cây chuyên đề</h3>
          <div id="topicTree" class="topic-tree"></div>
        </aside>

        <section class="content">
          <div class="filters">
            <input id="searchInput" type="text" placeholder="Tìm bài tập, ví dụ: đạo hàm, logarit, xác suất..." />

            <select id="topicFilter">
              <option value="all">Tất cả chuyên đề</option>
            </select>

            <select id="subtopicFilter">
              <option value="all">Tất cả dạng bài</option>
            </select>

            <select id="levelFilter">
              <option value="all">Tất cả mức độ</option>
              <option value="Dễ">Dễ</option>
              <option value="Trung bình">Trung bình</option>
              <option value="Khó">Khó</option>
              <option value="HSG">HSG</option>
            </select>
          </div>

          <div class="result-line">
            <span id="resultCount">Đang tải...</span>
            <button id="resetBtn" class="small-btn">Xóa bộ lọc</button>
          </div>

          <div id="problemList" class="problem-grid"></div>
        </section>
      </div>
    </section>

    <section id="guide" class="section guide">
      <div class="section-title">
        <p class="eyebrow">Cách thêm bài mới</p>
        <h2>Chỉnh dữ liệu ở file <code>assets/js/data.js</code></h2>
      </div>

      <p>
        Muốn thêm bài tập mới, bạn chỉ cần thêm một object vào mảng <code>PROBLEMS</code>.
        Không cần sửa HTML hay CSS.
      </p>
    </section>
  </main>

  <div id="detailOverlay" class="overlay">
    <div class="detail-box">
      <button id="closeDetail" class="close-btn">×</button>
      <div id="problemDetail"></div>
    </div>
  </div>

  <footer class="footer">
    © 2026 - Toán 11 Học kỳ 2
  </footer>

  <script src="assets/js/data.js"></script>
  <script src="assets/js/app.js"></script>
</body>
</html>
