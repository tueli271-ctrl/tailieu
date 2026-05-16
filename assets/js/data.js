window.TOPICS = [
  {
    id: "mu-logarit",
    title: "Mũ và Logarit",
    subtopics: [
      { id: "tinh-toan-co-ban", title: "Tính toán cơ bản" },
      { id: "rut-gon-bieu-thuc", title: "Rút gọn biểu thức" },
      { id: "phuong-trinh-mu", title: "Phương trình mũ" },
      { id: "phuong-trinh-logarit", title: "Phương trình logarit" },
      { id: "bai-toan-thuc-te", title: "Bài toán thực tế" }
    ]
  },
  {
    id: "dao-ham",
    title: "Đạo hàm",
    subtopics: [
      { id: "tinh-dao-ham", title: "Tính đạo hàm" },
      { id: "dao-ham-ham-hop", title: "Đạo hàm hàm hợp" },
      { id: "dao-ham-luong-giac", title: "Đạo hàm lượng giác" },
      { id: "tiep-tuyen", title: "Tiếp tuyến" },
      { id: "ung-dung-thuc-te", title: "Ứng dụng thực tế" }
    ]
  },
  {
    id: "hinh-khong-gian-vuong-goc",
    title: "Hình học không gian vuông góc",
    subtopics: [
      { id: "chung-minh-vuong-goc", title: "Chứng minh vuông góc" },
      { id: "goc-trong-khong-gian", title: "Góc trong không gian" },
      { id: "khoang-cach", title: "Khoảng cách" },
      { id: "the-tich", title: "Thể tích" }
    ]
  },
  {
    id: "xac-suat",
    title: "Xác suất",
    subtopics: [
      { id: "dem-khong-gian-mau", title: "Đếm không gian mẫu" },
      { id: "xac-suat-co-ban", title: "Xác suất cơ bản" },
      { id: "bien-co-doi", title: "Biến cố đối" },
      { id: "xac-suat-co-dieu-kien", title: "Xác suất có điều kiện" }
    ]
  }
];

window.PROBLEMS = [
  {
    id: "ml-01",
    topic: "mu-logarit",
    subtopic: "phuong-trinh-mu",
    level: "Dễ",
    title: "Giải phương trình mũ cơ bản",
    summary: "Đưa hai vế về cùng cơ số.",
    tags: ["Phương trình mũ", "Cùng cơ số"],
    statement: String.raw`
Giải phương trình:
\[
2^{x+1}=16.
\]
`,
    hint: String.raw`
Ta đưa \(16\) về lũy thừa cơ số \(2\):
\[
16=2^4.
\]
`,
    solution: String.raw`
Ta có:
\[
2^{x+1}=16=2^4.
\]
Vì hai vế có cùng cơ số \(2>0, 2\ne 1\), nên:
\[
x+1=4.
\]
Do đó:
\[
x=3.
\]
Vậy nghiệm của phương trình là:
\[
\boxed{x=3}.
\]
`
  },
  {
    id: "ml-02",
    topic: "mu-logarit",
    subtopic: "phuong-trinh-logarit",
    level: "Trung bình",
    title: "Giải phương trình logarit",
    summary: "Dùng điều kiện xác định và định nghĩa logarit.",
    tags: ["Logarit", "Điều kiện xác định"],
    statement: String.raw`
Giải phương trình:
\[
\log_2(x-1)=3.
\]
`,
    hint: String.raw`
Điều kiện: \(x-1>0\). Sau đó dùng định nghĩa:
\[
\log_a b=c \Leftrightarrow b=a^c.
\]
`,
    solution: String.raw`
Điều kiện xác định:
\[
x-1>0 \Leftrightarrow x>1.
\]
Ta có:
\[
\log_2(x-1)=3 \Leftrightarrow x-1=2^3.
\]
Suy ra:
\[
x-1=8 \Leftrightarrow x=9.
\]
Giá trị \(x=9\) thỏa mãn điều kiện \(x>1\).

Vậy nghiệm là:
\[
\boxed{x=9}.
\]
`
  },
  {
    id: "dh-01",
    topic: "dao-ham",
    subtopic: "tinh-dao-ham",
    level: "Dễ",
    title: "Tính đạo hàm đa thức",
    summary: "Áp dụng công thức đạo hàm của lũy thừa.",
    tags: ["Đạo hàm", "Đa thức"],
    statement: String.raw`
Tính đạo hàm của hàm số:
\[
y=3x^4-2x^2+5x-7.
\]
`,
    hint: String.raw`
Dùng công thức:
\[
(x^n)'=nx^{n-1}.
\]
`,
    solution: String.raw`
Ta có:
\[
(3x^4)'=12x^3,
\]
\[
(-2x^2)'=-4x,
\]
\[
(5x)'=5,
\]
và hằng số \(-7\) có đạo hàm bằng \(0\).

Vậy:
\[
y'=12x^3-4x+5.
\]
`
  },
  {
    id: "dh-02",
    topic: "dao-ham",
    subtopic: "dao-ham-ham-hop",
    level: "Trung bình",
    title: "Đạo hàm hàm hợp",
    summary: "Dùng công thức đạo hàm của hàm hợp.",
    tags: ["Hàm hợp", "Đạo hàm"],
    statement: String.raw`
Tính đạo hàm của hàm số:
\[
y=(2x^2-3x+1)^5.
\]
`,
    hint: String.raw`
Đặt phần bên trong là \(u=2x^2-3x+1\), rồi dùng:
\[
(u^5)'=5u^4u'.
\]
`,
    solution: String.raw`
Ta có:
\[
y=(2x^2-3x+1)^5.
\]
Theo công thức đạo hàm hàm hợp:
\[
y'=5(2x^2-3x+1)^4(2x^2-3x+1)'.
\]
Mà:
\[
(2x^2-3x+1)'=4x-3.
\]
Do đó:
\[
\boxed{y'=5(2x^2-3x+1)^4(4x-3)}.
\]
`
  },
  {
    id: "dh-03",
    topic: "dao-ham",
    subtopic: "tiep-tuyen",
    level: "Trung bình",
    title: "Viết phương trình tiếp tuyến",
    summary: "Tìm hệ số góc bằng đạo hàm tại điểm tiếp xúc.",
    tags: ["Tiếp tuyến", "Đạo hàm"],
    statement: String.raw`
Cho hàm số:
\[
y=x^2-2x+3.
\]
Viết phương trình tiếp tuyến của đồ thị hàm số tại điểm có hoành độ \(x_0=2\).
`,
    hint: String.raw`
Tiếp tuyến tại \(x_0\) có dạng:
\[
y=f'(x_0)(x-x_0)+f(x_0).
\]
`,
    solution: String.raw`
Ta có:
\[
f(x)=x^2-2x+3.
\]
Suy ra:
\[
f'(x)=2x-2.
\]
Tại \(x_0=2\):
\[
f'(2)=2\cdot 2-2=2.
\]
Lại có:
\[
f(2)=2^2-2\cdot 2+3=3.
\]
Vậy phương trình tiếp tuyến là:
\[
y=2(x-2)+3.
\]
Rút gọn:
\[
\boxed{y=2x-1}.
\]
`
  },
  {
    id: "hh-01",
    topic: "hinh-khong-gian-vuong-goc",
    subtopic: "chung-minh-vuong-goc",
    level: "Trung bình",
    title: "Chứng minh đường thẳng vuông góc mặt phẳng",
    summary: "Dùng tiêu chuẩn vuông góc với hai đường cắt nhau trong mặt phẳng.",
    tags: ["Không gian", "Vuông góc"],
    statement: String.raw`
Cho hình chóp \(S.ABC\). Biết \(SA\perp AB\), \(SA\perp AC\), và \(AB\), \(AC\) cắt nhau tại \(A\). Chứng minh:
\[
SA\perp (ABC).
\]
`,
    hint: String.raw`
Một đường thẳng vuông góc với hai đường thẳng cắt nhau nằm trong một mặt phẳng thì vuông góc với mặt phẳng đó.
`,
    solution: String.raw`
Ta có \(AB\subset (ABC)\), \(AC\subset (ABC)\), và \(AB\), \(AC\) cắt nhau tại \(A\).

Theo giả thiết:
\[
SA\perp AB,\qquad SA\perp AC.
\]
Vì \(SA\) vuông góc với hai đường thẳng cắt nhau \(AB\), \(AC\) cùng nằm trong mặt phẳng \((ABC)\), nên:
\[
\boxed{SA\perp (ABC)}.
\]
`
  },
  {
    id: "hh-02",
    topic: "hinh-khong-gian-vuong-goc",
    subtopic: "the-tich",
    level: "Khó",
    title: "Tính thể tích hình chóp",
    summary: "Xác định chiều cao rồi áp dụng công thức thể tích.",
    tags: ["Hình chóp", "Thể tích"],
    statement: String.raw`
Cho hình chóp \(S.ABC\) có \(SA\perp (ABC)\), tam giác \(ABC\) vuông tại \(A\), \(AB=3\), \(AC=4\), \(SA=5\). Tính thể tích khối chóp \(S.ABC\).
`,
    hint: String.raw`
Dùng công thức:
\[
V=\frac13 S_{\text{đáy}}\cdot h.
\]
Ở đây \(h=SA\).
`,
    solution: String.raw`
Vì tam giác \(ABC\) vuông tại \(A\), nên diện tích đáy là:
\[
S_{ABC}=\frac12\cdot AB\cdot AC=\frac12\cdot 3\cdot 4=6.
\]
Do \(SA\perp (ABC)\), nên chiều cao của hình chóp là:
\[
h=SA=5.
\]
Vậy thể tích khối chóp \(S.ABC\) là:
\[
V=\frac13\cdot S_{ABC}\cdot h
=\frac13\cdot 6\cdot 5=10.
\]
Do đó:
\[
\boxed{V=10}.
\]
`
  },
  {
    id: "xs-01",
    topic: "xac-suat",
    subtopic: "xac-suat-co-ban",
    level: "Dễ",
    title: "Xác suất gieo xúc xắc",
    summary: "Tính số kết quả thuận lợi chia cho số kết quả có thể.",
    tags: ["Xác suất", "Xúc xắc"],
    statement: String.raw`
Gieo một con xúc xắc cân đối một lần. Tính xác suất để xuất hiện mặt có số chấm chẵn.
`,
    hint: String.raw`
Không gian mẫu có \(6\) kết quả. Các mặt chẵn là \(2,4,6\).
`,
    solution: String.raw`
Không gian mẫu là:
\[
\Omega=\{1,2,3,4,5,6\}.
\]
Số phần tử của không gian mẫu là:
\[
|\Omega|=6.
\]
Biến cố xuất hiện mặt có số chấm chẵn là:
\[
A=\{2,4,6\}.
\]
Suy ra:
\[
|A|=3.
\]
Vậy xác suất cần tìm là:
\[
P(A)=\frac{|A|}{|\Omega|}=\frac36=\frac12.
\]
Do đó:
\[
\boxed{P(A)=\frac12}.
\]
`
  },
  {
    id: "xs-02",
    topic: "xac-suat",
    subtopic: "bien-co-doi",
    level: "Trung bình",
    title: "Dùng biến cố đối",
    summary: "Tính xác suất ít nhất một lần xuất hiện mặt ngửa.",
    tags: ["Biến cố đối", "Đồng xu"],
    statement: String.raw`
Tung một đồng xu cân đối \(3\) lần. Tính xác suất để có ít nhất một lần xuất hiện mặt ngửa.
`,
    hint: String.raw`
Dùng biến cố đối: không có lần nào xuất hiện mặt ngửa.
`,
    solution: String.raw`
Mỗi lần tung có \(2\) khả năng, nên tổng số kết quả là:
\[
2^3=8.
\]
Gọi \(A\) là biến cố có ít nhất một lần xuất hiện mặt ngửa.

Biến cố đối \(\overline A\) là không có lần nào xuất hiện mặt ngửa, tức cả \(3\) lần đều là mặt sấp.

Khi đó:
\[
P(\overline A)=\frac18.
\]
Vậy:
\[
P(A)=1-P(\overline A)=1-\frac18=\frac78.
\]
Do đó:
\[
\boxed{P(A)=\frac78}.
\]
`
  }
];
