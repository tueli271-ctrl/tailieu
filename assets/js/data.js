// assets/js/data.js
const QUESTIONS = [
  {
    id: "tn-xs-01",
    type: "trac-nghiem",
    topic: "Xác suất",
    question: "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt chẵn là bao nhiêu?",
    choices: ["\\(\\frac12\\)", "\\(\\frac13\\)", "\\(\\frac23\\)", "\\(\\frac16\\)"],
    answer: "A",
    solution: "Các mặt chẵn là \\(2,4,6\\), nên xác suất là \\(\\frac{3}{6}=\\frac12\\)."
  },
  {
    id: "tn-xs-02",
    type: "trac-nghiem",
    topic: "Xác suất",
    question: "Một hộp có 3 bi đỏ và 2 bi xanh. Lấy ngẫu nhiên 1 bi. Xác suất lấy được bi đỏ là bao nhiêu?",
    choices: ["\\(\\frac35\\)", "\\(\\frac25\\)", "\\(\\frac12\\)", "\\(\\frac23\\)"],
    answer: "A",
    solution: "Tổng số bi là \\(5\\), số bi đỏ là \\(3\\), nên xác suất là \\(\\frac35\\)."
  },
  {
    id: "tn-xs-03",
    type: "trac-nghiem",
    topic: "Xác suất",
    question: "Tung một đồng xu cân đối hai lần. Xác suất để cả hai lần đều xuất hiện mặt sấp là bao nhiêu?",
    choices: ["\\(\\frac14\\)", "\\(\\frac12\\)", "\\(\\frac34\\)", "\\(1\\)"],
    answer: "A",
    solution: "Không gian mẫu có \\(4\\) kết quả đồng khả năng, chỉ có \\(SS\\) thỏa mãn."
  },
  {
    id: "tn-xs-04",
    type: "trac-nghiem",
    topic: "Xác suất",
    question: "Chọn ngẫu nhiên một số trong các số \\(1,2,3,4,5\\). Xác suất chọn được số nguyên tố là bao nhiêu?",
    choices: ["\\(\\frac35\\)", "\\(\\frac25\\)", "\\(\\frac15\\)", "\\(\\frac45\\)"],
    answer: "A",
    solution: "Các số nguyên tố là \\(2,3,5\\), nên xác suất là \\(\\frac35\\)."
  },

  {
    id: "tn-hh-01",
    type: "trac-nghiem",
    topic: "Hình học không gian",
    question: "Nếu đường thẳng \\(a\\) vuông góc với mặt phẳng \\((P)\\), thì \\(a\\) vuông góc với đường thẳng nào sau đây?",
    choices: ["Mọi đường thẳng nằm trong \\((P)\\)", "Một đường thẳng bất kỳ", "Mọi đường thẳng song song với \\((P)\\)", "Mọi đường thẳng cắt \\((P)\\)"],
    answer: "A",
    solution: "Theo định nghĩa, nếu \\(a\\perp(P)\\) thì \\(a\\) vuông góc với mọi đường thẳng nằm trong \\((P)\\)."
  },
  {
    id: "tn-hh-02",
    type: "trac-nghiem",
    topic: "Hình học không gian",
    question: "Cho hình chóp \\(S.ABC\\), nếu \\(SA\\perp (ABC)\\) thì góc giữa \\(SA\\) và \\(BC\\) bằng bao nhiêu?",
    choices: ["\\(90^\\circ\\)", "\\(60^\\circ\\)", "\\(45^\\circ\\)", "\\(0^\\circ\\)"],
    answer: "A",
    solution: "Vì \\(BC\\subset (ABC)\\) và \\(SA\\perp(ABC)\\), nên \\(SA\\perp BC\\)."
  },
  {
    id: "tn-hh-03",
    type: "trac-nghiem",
    topic: "Hình học không gian",
    question: "Khoảng cách từ điểm \\(A\\) đến mặt phẳng \\((P)\\) là độ dài đoạn nào?",
    choices: ["Đoạn vuông góc từ \\(A\\) đến \\((P)\\)", "Đoạn bất kỳ từ \\(A\\) đến \\((P)\\)", "Đường xiên dài nhất", "Một cạnh của mặt phẳng"],
    answer: "A",
    solution: "Khoảng cách từ điểm đến mặt phẳng là độ dài đoạn vuông góc kẻ từ điểm đó đến mặt phẳng."
  },
  {
    id: "tn-hh-04",
    type: "trac-nghiem",
    topic: "Hình học không gian",
    question: "Nếu hai mặt phẳng vuông góc với nhau thì góc giữa chúng bằng bao nhiêu?",
    choices: ["\\(90^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)", "\\(180^\\circ\\)"],
    answer: "A",
    solution: "Hai mặt phẳng vuông góc có góc giữa hai mặt phẳng bằng \\(90^\\circ\\)."
  },

  {
    id: "tn-dh-01",
    type: "trac-nghiem",
    topic: "Đạo hàm",
    question: "Đạo hàm của hàm số \\(y=x^3\\) là gì?",
    choices: ["\\(3x^2\\)", "\\(x^2\\)", "\\(3x\\)", "\\(x^4\\)"],
    answer: "A",
    solution: "Ta có \\((x^3)'=3x^2\\)."
  },
  {
    id: "tn-dh-02",
    type: "trac-nghiem",
    topic: "Đạo hàm",
    question: "Đạo hàm của hàm số \\(y=\\sin x\\) là gì?",
    choices: ["\\(\\cos x\\)", "\\(-\\cos x\\)", "\\(\\tan x\\)", "\\(-\\sin x\\)"],
    answer: "A",
    solution: "Ta có \\((\\sin x)'=\\cos x\\)."
  },
  {
    id: "tn-dh-03",
    type: "trac-nghiem",
    topic: "Đạo hàm",
    question: "Đạo hàm của hàm số \\(y=5x-2\\) là gì?",
    choices: ["\\(5\\)", "\\(x\\)", "\\(-2\\)", "\\(5x\\)"],
    answer: "A",
    solution: "Ta có \\((5x-2)'=5\\)."
  },
  {
    id: "tn-dh-04",
    type: "trac-nghiem",
    topic: "Đạo hàm",
    question: "Nếu \\(y=x^2+1\\), khi đó \\(y'\\) bằng bao nhiêu?",
    choices: ["\\(2x\\)", "\\(x\\)", "\\(2x+1\\)", "\\(x^2\\)"],
    answer: "A",
    solution: "Ta có \\((x^2+1)'=2x\\)."
  },

  {
    id: "ds-dh-01",
    type: "dung-sai",
    topic: "Đạo hàm",
    question: "Xét các mệnh đề sau về đạo hàm.",
    statements: [
      { text: "\\((x^2)'=2x\\)", value: true },
      { text: "\\((\\sin x)'=\\cos x\\)", value: true },
      { text: "\\((\\cos x)'=\\sin x\\)", value: false },
      { text: "\\((5)'=5\\)", value: false }
    ],
    answer: "a Đ, b Đ, c S, d S",
    solution: "Ta có \\((\\cos x)'=-\\sin x\\) và đạo hàm của hằng số bằng \\(0\\)."
  },
  {
    id: "ds-xs-01",
    type: "dung-sai",
    topic: "Xác suất",
    question: "Tung một đồng xu cân đối một lần. Xét các mệnh đề sau.",
    statements: [
      { text: "Không gian mẫu có \\(2\\) phần tử", value: true },
      { text: "Xác suất xuất hiện mặt ngửa là \\(\\frac12\\)", value: true },
      { text: "Xác suất xuất hiện mặt sấp là \\(1\\)", value: false },
      { text: "Hai kết quả ngửa và sấp là đồng khả năng", value: true }
    ],
    answer: "a Đ, b Đ, c S, d Đ",
    solution: "Đồng xu cân đối nên hai kết quả ngửa và sấp đồng khả năng, mỗi kết quả có xác suất \\(\\frac12\\)."
  },

  {
    id: "tln-dh-01",
    type: "tra-loi-ngan",
    topic: "Đạo hàm",
    question: "Tính đạo hàm của hàm số \\(y=x^4-2x+3\\).",
    answer: "\\(4x^3-2\\)",
    solution: "Ta có \\(y'=4x^3-2\\)."
  },
  {
    id: "tln-ml-01",
    type: "tra-loi-ngan",
    topic: "Mũ và Logarit",
    question: "Tính giá trị \\(\\log_2 8\\).",
    answer: "\\(3\\)",
    solution: "Vì \\(2^3=8\\), nên \\(\\log_2 8=3\\)."
  },
  {
    id: "tln-xs-01",
    type: "tra-loi-ngan",
    topic: "Xác suất",
    question: "Một hộp có 4 bi đỏ và 6 bi xanh. Lấy ngẫu nhiên 1 bi. Xác suất lấy được bi đỏ bằng bao nhiêu?",
    answer: "\\(\\frac25\\)",
    solution: "Tổng số bi là \\(10\\), số bi đỏ là \\(4\\), nên xác suất là \\(\\frac{4}{10}=\\frac25\\)."
  },
  {
    id: "tln-hh-01",
    type: "tra-loi-ngan",
    topic: "Hình học không gian",
    question: "Nếu \\(SA\\perp(ABC)\\) và \\(BC\\subset(ABC)\\), hãy cho biết góc giữa \\(SA\\) và \\(BC\\).",
    answer: "\\(90^\\circ\\)",
    solution: "Vì \\(SA\\perp(ABC)\\) nên \\(SA\\perp BC\\)."
  },

  {
    id: "tl-dh-01",
    type: "tu-luan",
    topic: "Đạo hàm",
    question: "Cho hàm số \\(y=x^3-3x^2+2\\). Tìm khoảng đồng biến, nghịch biến của hàm số.",
    answer: "",
    solution: "Ta có \\(y'=3x^2-6x=3x(x-2)\\). Suy ra \\(y'>0\\) khi \\(x<0\\) hoặc \\(x>2\\), và \\(y'<0\\) khi \\(0<x<2\\). Vậy hàm số đồng biến trên \\((-\\infty,0)\\), \\((2,+\\infty)\\), nghịch biến trên \\((0,2)\\)."
  },
  {
    id: "tl-ml-01",
    type: "tu-luan",
    topic: "Mũ và Logarit",
    question: "Giải phương trình \\(2^{x+1}=8\\).",
    answer: "\\(x=2\\)",
    solution: "Ta có \\(8=2^3\\), nên \\(2^{x+1}=2^3\\). Suy ra \\(x+1=3\\), do đó \\(x=2\\)."
  },
  {
    id: "tl-hh-01",
    type: "tu-luan",
    topic: "Hình học không gian",
    question: "Cho hình chóp \\(S.ABC\\) có \\(SA\\perp(ABC)\\). Chứng minh \\(SA\\perp BC\\).",
    answer: "",
    solution: "Vì \\(BC\\subset(ABC)\\) và \\(SA\\perp(ABC)\\), nên theo định nghĩa đường thẳng vuông góc với mặt phẳng, ta có \\(SA\\perp BC\\)."
  }
];
