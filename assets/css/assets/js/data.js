window.PROBLEMS = [
  {
    id: "ds-001",
    title: "Dãy số xác định bởi công thức truy hồi",
    category: "algebra",
    level: "Trung bình",
    tags: ["Dãy số", "Truy hồi"],
    summary: "Tìm công thức tổng quát và chứng minh bằng quy nạp.",
    statement: `
      Cho dãy số \\((u_n)\\) xác định bởi \\(u_1=2\\) và
      \\[
        u_{n+1}=3u_n+2,\\quad n\\ge 1.
      \\]
      Tìm công thức tổng quát của \\(u_n\\).
    `,
    hint: `
      Thử cộng thêm một hằng số vào hai vế để đưa về cấp số nhân.
    `,
    solution: `
      Ta có
      \\[
        u_{n+1}+1=3u_n+3=3(u_n+1).
      \\]
      Do đó dãy \\((u_n+1)\\) là cấp số nhân với công bội \\(3\\).
      Vì \\(u_1+1=3\\), nên
      \\[
        u_n+1=3\\cdot 3^{n-1}=3^n.
      \\]
      Vậy
      \\[
        \\boxed{u_n=3^n-1.}
      \\]
    `
  },

  {
    id: "gt-001",
    title: "Tính giới hạn của dãy số",
    category: "algebra",
    level: "Dễ",
    tags: ["Giới hạn", "Dãy số"],
    summary: "Bài cơ bản về giới hạn hữu tỉ của dãy.",
    statement: `
      Tính giới hạn
      \\[
        \\lim_{n\\to\\infty} \\frac{3n^2+2n-1}{5n^2-n+4}.
      \\]
    `,
    hint: `
      Chia cả tử và mẫu cho \\(n^2\\).
    `,
    solution: `
      Ta có
      \\[
        \\frac{3n^2+2n-1}{5n^2-n+4}
        =
        \\frac{3+\\frac{2}{n}-\\frac{1}{n^2}}{5-\\frac{1}{n}+\\frac{4}{n^2}}.
      \\]
      Khi \\(n\\to\\infty\\), ta được
      \\[
        \\boxed{\\lim_{n\\to\\infty} \\frac{3n^2+2n-1}{5n^2-n+4}=\\frac35.}
      \\]
    `
  },

  {
    id: "dh-001",
    title: "Đạo hàm của hàm phân thức",
    category: "algebra",
    level: "Trung bình",
    tags: ["Đạo hàm", "Phân thức"],
    summary: "Áp dụng công thức đạo hàm thương.",
    statement: `
      Tính đạo hàm của hàm số
      \\[
        y=\\frac{2x+1}{x-2},\\quad x\\ne 2.
      \\]
    `,
    hint: `
      Dùng công thức
      \\[
        \\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}.
      \\]
    `,
    solution: `
      Với \\(u=2x+1\\), \\(v=x-2\\), ta có \\(u'=2\\), \\(v'=1\\). Do đó
      \\[
        y'=
        \\frac{2(x-2)-(2x+1)}{(x-2)^2}
        =
        \\frac{2x-4-2x-1}{(x-2)^2}
        =
        \\boxed{\\frac{-5}{(x-2)^2}}.
      \\]
    `
  },

  {
    id: "hh-001",
    title: "Chứng minh đường thẳng song song với mặt phẳng",
    category: "geometry",
    level: "Trung bình",
    tags: ["Hình không gian", "Song song"],
    summary: "Bài cơ bản về quan hệ song song trong không gian.",
    statement: `
      Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình bình hành.
      Gọi \\(M\\) là trung điểm của \\(SA\\), \\(N\\) là trung điểm của \\(SB\\).
      Chứng minh rằng \\(MN\\parallel (ABCD)\\).
    `,
    hint: `
      Dùng đường trung bình trong tam giác \\(SAB\\).
    `,
    solution: `
      Trong tam giác \\(SAB\\), vì \\(M\\) là trung điểm của \\(SA\\) và \\(N\\) là trung điểm của \\(SB\\), nên
      \\[
        MN\\parallel AB.
      \\]
      Mà \\(AB\\subset (ABCD)\\), đồng thời \\(MN\\not\\subset (ABCD)\\), nên
      \\[
        \\boxed{MN\\parallel (ABCD).}
      \\]
    `
  },

  {
    id: "hh-002",
    title: "Góc giữa đường thẳng và mặt phẳng",
    category: "geometry",
    level: "Khó",
    tags: ["Hình không gian", "Góc"],
    summary: "Tính góc giữa cạnh bên và mặt đáy trong hình chóp.",
    statement: `
      Cho hình chóp \\(S.ABC\\) có \\(SA\\perp (ABC)\\). Biết \\(AB=3\\), \\(AC=4\\),
      \\(BC=5\\), \\(SA=6\\). Tính góc giữa đường thẳng \\(SB\\) và mặt phẳng \\((ABC)\\).
    `,
    hint: `
      Hình chiếu của \\(SB\\) lên \\((ABC)\\) là \\(AB\\).
    `,
    solution: `
      Vì \\(SA\\perp (ABC)\\), nên hình chiếu của \\(S\\) lên \\((ABC)\\) là \\(A\\).
      Do đó hình chiếu của \\(SB\\) lên \\((ABC)\\) là \\(AB\\).
      Suy ra góc giữa \\(SB\\) và \\((ABC)\\) là \\(\\widehat{SBA}\\).

      Trong tam giác vuông \\(SAB\\), ta có
      \\[
        \\tan \\widehat{SBA}=\\frac{SA}{AB}=\\frac{6}{3}=2.
      \\]
      Vậy
      \\[
        \\boxed{\\widehat{(SB,(ABC))}=\\arctan 2.}
      \\]
    `
  },

  {
    id: "xs-001",
    title: "Bài toán tổ hợp chọn học sinh",
    category: "combinatorics",
    level: "Dễ",
    tags: ["Tổ hợp", "Quy tắc đếm"],
    summary: "Đếm số cách chọn học sinh từ một nhóm.",
    statement: `
      Một lớp có \\(20\\) học sinh nam và \\(15\\) học sinh nữ.
      Hỏi có bao nhiêu cách chọn \\(3\\) học sinh gồm \\(2\\) nam và \\(1\\) nữ?
    `,
    hint: `
      Chọn \\(2\\) nam trong \\(20\\) nam và chọn \\(1\\) nữ trong \\(15\\) nữ.
    `,
    solution: `
      Số cách chọn \\(2\\) nam là
      \\[
        C_{20}^2.
      \\]
      Số cách chọn \\(1\\) nữ là
      \\[
        C_{15}^1.
      \\]
      Vậy số cách chọn là
      \\[
        C_{20}^2C_{15}^1=190\\cdot 15=\\boxed{2850}.
      \\]
    `
  },

  {
    id: "xs-002",
    title: "Khai triển nhị thức Newton",
    category: "combinatorics",
    level: "Trung bình",
    tags: ["Nhị thức Newton", "Hệ số"],
    summary: "Tìm hệ số trong khai triển nhị thức.",
    statement: `
      Tìm hệ số của \\(x^3\\) trong khai triển
      \\[
        (2x+1)^7.
      \\]
    `,
    hint: `
      Số hạng tổng quát có dạng \\(C_7^k(2x)^k\\).
    `,
    solution: `
      Theo nhị thức Newton,
      \\[
        (2x+1)^7=\\sum_{k=0}^{7} C_7^k(2x)^k.
      \\]
      Hệ số của \\(x^3\\) ứng với \\(k=3\\), bằng
      \\[
        C_7^3\\cdot 2^3=35\\cdot 8=\\boxed{280}.
      \\]
    `
  },

  {
    id: "de-001",
    title: "Đề tổng hợp số 1",
    category: "exam",
    level: "HSG",
    tags: ["Đề tổng hợp", "Ôn tập"],
    summary: "Một bài tổng hợp gồm dãy số, đạo hàm và tổ hợp.",
    statement: `
      Giải các yêu cầu sau:
      \\[
        \\text{(1) Tính } \\lim_{n\\to\\infty}\\frac{2n+1}{n+3}.
      \\]
      \\[
        \\text{(2) Tính đạo hàm của } y=x^3-3x+1.
      \\]
      \\[
        \\text{(3) Tính } C_{10}^2.
      \\]
    `,
    hint: `
      Làm từng ý bằng công thức cơ bản của giới hạn, đạo hàm và tổ hợp.
    `,
    solution: `
      Ta có
      \\[
        \\lim_{n\\to\\infty}\\frac{2n+1}{n+3}=2.
      \\]
      Tiếp theo,
      \\[
        y'=3x^2-3.
      \\]
      Cuối cùng,
      \\[
        C_{10}^2=\\frac{10\\cdot 9}{2}=45.
      \\]
      Vậy đáp án là
      \\[
        \\boxed{2;\\quad 3x^2-3;\\quad 45.}
      \\]
    `
  }
];
