// Ngân hàng câu hỏi Toán 11 HK2.
// Muốn thêm câu mới: copy một object có sẵn, đổi id, type, topic, question, answer, solution.
const TOPICS = [
{ id: "xac-suat", name: "Xác suất" },
{ id: "hinh-hoc-khong-gian", name: "Hình học không gian" },
{ id: "dao-ham", name: "Đạo hàm" },
{ id: "mu-logarit", name: "Mũ và logarit" }
];
const TYPE_NAMES = {
"trac-nghiem": "Trắc nghiệm",
"dung-sai": "Đúng / Sai",
"tra-loi-ngan": "Trả lời ngắn"
};
const QUESTIONS = [
// =========================
// PHẦN I. TRẮC NGHIỆM
// =========================
{
id: "tn-xs-01",
type: "trac-nghiem",
topic: "xac-suat",
question: String.raw`Gieo một con xúc xắc cân đối một lần. Xác suất đểxuất hiện mặt có sốchấm chẵn bằng`,
choices: [String.raw`\(\frac{1}{6}\)`, String.raw`\(\frac{1}{3}\)`, String.raw`\(\frac{1}{2}\)`,
,→ String.raw`\(\frac{2}{3}\)`],
answer: "C",
solution: String.raw`Các mặt chẵn là \(2,4,6\), có \(3\) kết quả thuận lợi trên \(6\) kết quả có thể. Vậy xác
,→ suất bằng \(\frac{3}{6}=\frac{1}{2}\).`
},
{
id: "tn-xs-02",
type: "trac-nghiem",
topic: "xac-suat",
question: String.raw`Một hộp có \(5\) viên bi đỏ và \(3\) viên bi xanh. Lấy ngẫu nhiên một viên bi. Xác suất lấy
,→ được bi xanh là`,
choices: [String.raw`\(\frac{3}{8}\)`, String.raw`\(\frac{5}{8}\)`, String.raw`\(\frac{1}{3}\)`,
,→ String.raw`\(\frac{1}{8}\)`],
answer: "A",
solution: String.raw`Có \(3\) viên xanh trong tổng số\(8\) viên nên xác suất là \(\frac{3}{8}\).`
},
{
id: "tn-xs-03",
type: "trac-nghiem",
topic: "xac-suat",
question: String.raw`Từ các chữ số\(1,2,3,4\), lập ngẫu nhiên một sốcó hai chữ sốkhác nhau. Xác suất đểsố
,→ lập được là sốchẵn bằng`,
choices: [String.raw`\(\frac{1}{4}\)`, String.raw`\(\frac{1}{3}\)`, String.raw`\(\frac{1}{2}\)`,
,→ String.raw`\(\frac{2}{3}\)`],
answer: "C",
solution: String.raw`Có \(4\cdot 3=12\) số. Sốchẵn có chữ sốhàng đơn vị là \(2\) hoặc \(4\), mỗi trường hợp có
,→ \(3\) cách chọn hàng chục. Vậy có \(6\) sốthuận lợi, xác suất là \(\frac{6}{12}=\frac{1}{2}\).`
},
{
id: "tn-xs-04",
type: "trac-nghiem",
topic: "xac-suat",
question: String.raw`Một lớp có \(20\) học sinh nam và \(15\) học sinh nữ. Chọn ngẫu nhiên một học sinh. Xác
,→ suất chọn được học sinh nữ bằng`,
choices: [String.raw`\(\frac{3}{7}\)`, String.raw`\(\frac{4}{7}\)`, String.raw`\(\frac{1}{2}\)`,
,→ String.raw`\(\frac{15}{20}\)`],
answer: "A",
solution: String.raw`Tổng sốhọc sinh là \(35\). Có \(15\) học sinh nữ nên xác suất là
,→ \(\frac{15}{35}=\frac{3}{7}\).`
},
{
id: "tn-hh-01",
type: "trac-nghiem",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho đường thẳng \(a\) vuông góc với mặt phẳng \((P)\). Nếu \(b\) là đường thẳng nằm trong
,→ \((P)\), khi đó`,
choices: [String.raw`\(a\parallel b\)`, String.raw`\(a\perp b\)`, String.raw`\(a\) cắt \(b\)`, String.raw`\(a\)
,→ trùng \(b\)`],
answer: "B",
solution: String.raw`Đường thẳng vuông góc với một mặt phẳng thì vuông góc với mọi đường thẳng nằm trong mặt
,→ phẳng đó.`
},
{
id: "tn-hh-02",
type: "trac-nghiem",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho hình chóp \(S.ABC\) có \(SA\perp (ABC)\). Khi đó góc giữa \(SB\) và \((ABC)\) là`,
choices: [String.raw`\(\widehat{SBA}\)`, String.raw`\(\widehat{SAB}\)`, String.raw`\(\widehat{SCA}\)`,
,→ String.raw`\(\widehat{ABC}\)`],
answer: "A",
solution: String.raw`Hình chiếu của \(S\) trên \((ABC)\) là \(A\), nên hình chiếu của \(SB\) trên \((ABC)\) là
,→ \(AB\). Do đó góc cần tìm là \(\widehat{SBA}\).`
},
{
id: "tn-hh-03",
type: "trac-nghiem",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho \(AB\perp (P)\) tại \(A\). Khoảng cách từ \(B\) đến mặt phẳng \((P)\) bằng`,
choices: [String.raw`\(AB\)`, String.raw`\(AA\)`, String.raw`Khoảng cách từ \(A\) đến \(B\) nhân \(2\)`,
,→ String.raw`Không xác định`],
answer: "A",
solution: String.raw`Vì \(AB\perp (P)\) và \(A\in (P)\), đoạn vuông góc từ \(B\) đến \((P)\) là \(BA\).`
},
{
id: "tn-hh-04",
type: "trac-nghiem",
topic: "hinh-hoc-khong-gian",
question: String.raw`Trong hình lập phương \(ABCD.A'B'C'D'\), đường thẳng \(AA'\) vuông góc với mặt phẳng nào
,→ sau đây?`,
choices: [String.raw`\((ABCD)\)`, String.raw`\((ABB'A')\)`, String.raw`\((ADD'A')\)`,
,→ String.raw`\((A'B'C'D')\)`],
answer: "A",
solution: String.raw`Cạnh bên \(AA'\) của hình lập phương vuông góc với mặt đáy \((ABCD)\).`
},
{
id: "tn-dh-01",
type: "trac-nghiem",
topic: "dao-ham",
question: String.raw`Đạo hàm của hàm số\(y=x^3-2x+1\) là`,
choices: [String.raw`\(y'=3x^2-2\)`, String.raw`\(y'=x^2-2\)`, String.raw`\(y'=3x^2+1\)`,
,→ String.raw`\(y'=3x-2\)`],
answer: "A",
solution: String.raw`Ta có \((x^3)'=3x^2\), \((-2x)'=-2\), \(1'=0\). Vậy \(y'=3x^2-2\).`
},
{
id: "tn-dh-02",
type: "trac-nghiem",
topic: "dao-ham",
question: String.raw`Đạo hàm của hàm số\(y=\sin x\) là`,
choices: [String.raw`\(\cos x\)`, String.raw`\(-\cos x\)`, String.raw`\(\tan x\)`, String.raw`\(-\sin x\)`],
answer: "A",
solution: String.raw`Theo công thức đạo hàm cơ bản, \((\sin x)'=\cos x\).`
},
{
id: "tn-dh-03",
type: "trac-nghiem",
topic: "dao-ham",
question: String.raw`Cho \(y=(2x+1)^5\). Khi đó \(y'\) bằng`,
choices: [String.raw`\(5(2x+1)^4\)`, String.raw`\(10(2x+1)^4\)`, String.raw`\(2(2x+1)^4\)`,
,→ String.raw`\(10(2x+1)^5\)`],
answer: "B",
solution: String.raw`Dùng đạo hàm hàm hợp: \(y'=5(2x+1)^4\cdot 2=10(2x+1)^4\).`
},
{
id: "tn-dh-04",
type: "trac-nghiem",
topic: "dao-ham",
question: String.raw`Hệ sốgóc tiếp tuyến của đồthị \(y=x^2\) tại điểm có hoành độ \(x_0=2\) là`,
choices: [String.raw`\(2\)`, String.raw`\(3\)`, String.raw`\(4\)`, String.raw`\(5\)`],
answer: "C",
solution: String.raw`Ta có \(y'=2x\). Tại \(x_0=2\), hệ sốgóc là \(y'(2)=4\).`
},
{
id: "tn-ml-01",
type: "trac-nghiem",
topic: "mu-logarit",
question: String.raw`Với \(a>0, a\ne 1\), biểu thức \(\log_a a^3\) bằng`,
choices: [String.raw`\(a^3\)`, String.raw`\(3\)`, String.raw`\(\frac{1}{3}\)`, String.raw`\(0\)`],
answer: "B",
solution: String.raw`Theo tính chất logarit, \(\log_a a^3=3\).`
},
{
id: "tn-ml-02",
type: "trac-nghiem",
topic: "mu-logarit",
question: String.raw`Nghiệm của phương trình \(2^x=8\) là`,
choices: [String.raw`\(x=2\)`, String.raw`\(x=3\)`, String.raw`\(x=4\)`, String.raw`\(x=8\)`],
answer: "B",
solution: String.raw`Vì \(8=2^3\), nên \(2^x=2^3\Rightarrow x=3\).`
},
{
id: "tn-ml-03",
type: "trac-nghiem",
topic: "mu-logarit",
question: String.raw`Điều kiện xác định của biểu thức \(\log_2(x-1)\) là`,
choices: [String.raw`\(x>1\)`, String.raw`\(x\ge 1\)`, String.raw`\(x<1\)`, String.raw`\(x\ne 1\)`],
answer: "A",
solution: String.raw`Điều kiện của logarit là \(x-1>0\Rightarrow x>1\).`
},
{
id: "tn-ml-04",
type: "trac-nghiem",
topic: "mu-logarit",
question: String.raw`Giá trị của \(\log_{10}1000\) là`,
choices: [String.raw`\(1\)`, String.raw`\(2\)`, String.raw`\(3\)`, String.raw`\(10\)`],
answer: "C",
solution: String.raw`Vì \(1000=10^3\), nên \(\log_{10}1000=3\).`
},
// =========================
// PHẦN II. ĐÚNG / SAI
// =========================
{
id: "ds-xs-01",
type: "dung-sai",
topic: "xac-suat",
question: String.raw`Gieo một con xúc xắc cân đối một lần. Xét các mệnh đềsau.`,
statements: [
String.raw`Không gian mẫu có \(6\) phần tử.`,
String.raw`Biến cốxuất hiện sốchấm lẻ có \(2\) kết quả thuận lợi.`,
String.raw`Xác suất xuất hiện sốchấm lớn hơn \(4\) là \(\frac{1}{3}\).`,
String.raw`Xác suất xuất hiện sốchấm bằng \(7\) là \(\frac{1}{6}\).`
],
answer: ["Đ", "S", "Đ", "S"],
solution: String.raw`Không gian mẫu là \(\{1,2,3,4,5,6\}\). Sốlẻ gồm \(1,3,5\), có \(3\) kết quả. Sốlớn hơn
,→ \(4\) gồm \(5,6\), xác suất \(\frac{2}{6}=\frac{1}{3}\). Không thểxuất hiện mặt \(7\).`
},
{
id: "ds-xs-02",
type: "dung-sai",
topic: "xac-suat",
question: String.raw`Một hộp có \(4\) bi đỏ và \(6\) bi xanh. Lấy ngẫu nhiên một viên. Xét các mệnh đềsau.`,
statements: [
String.raw`Tổng sốkết quả có thểlà \(10\).`,
String.raw`Xác suất lấy được bi đỏ là \(\frac{2}{5}\).`,
String.raw`Xác suất lấy được bi xanh là \(\frac{3}{5}\).`,
String.raw`Xác suất lấy được bi vàng là \(1\).`
],
answer: ["Đ", "Đ", "Đ", "S"],
solution: String.raw`Tổng sốbi là \(10\). Xác suất lấy bi đỏ là \(\frac{4}{10}=\frac{2}{5}\). Xác suất lấy bi
,→ xanh là \(\frac{6}{10}=\frac{3}{5}\). Trong hộp không có bi vàng.`
},
{
id: "ds-hh-01",
type: "dung-sai",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho \(SA\perp (ABC)\). Xét các mệnh đềsau.`,
statements: [
String.raw`\(SA\perp AB\).`,
String.raw`\(SA\perp AC\).`,
String.raw`\(SA\parallel BC\).`,
String.raw`Hình chiếu của \(S\) trên \((ABC)\) là \(A\).`
],
answer: ["Đ", "Đ", "S", "Đ"],
solution: String.raw`Vì \(SA\perp (ABC)\), nên \(SA\) vuông góc với mọi đường thẳng nằm trong \((ABC)\) đi qua
,→ \(A\), đặc biệt là \(AB, AC\). Hình chiếu của \(S\) là \(A\).`
},
{
id: "ds-hh-02",
type: "dung-sai",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho hình lập phương \(ABCD.A'B'C'D'\). Xét các mệnh đềsau.`,
statements: [
String.raw`\(AA'\perp (ABCD)\).`,
String.raw`\(AB\perp AD\).`,
String.raw`\(AB\parallel C'D'\).`,
String.raw`\(AC\perp (ABCD)\).`
],
answer: ["Đ", "Đ", "Đ", "S"],
solution: String.raw`Trong hình lập phương, cạnh bên vuông góc với đáy, các cạnh kềtrong đáy vuông góc nhau, và
\(AB\parallel CD\parallel C'D'\). Đường chéo \(AC\) nằm trong \((ABCD)\), không vuông góc với mặt phẳng
này.`
,→
,→
},
{
id: "ds-dh-01",
type: "dung-sai",
topic: "dao-ham",
question: String.raw`Cho hàm số\(f(x)=x^3-3x+2\). Xét các mệnh đềsau.`,
statements: [
String.raw`\(f'(x)=3x^2-3\).`,
String.raw`\(f'(1)=0\).`,
String.raw`\(f'(0)=0\).`,
String.raw`Hệ sốgóc tiếp tuyến tại \(x=2\) bằng \(9\).`
],
answer: ["Đ", "Đ", "S", "Đ"],
solution: String.raw`Ta có \(f'(x)=3x^2-3\). Suy ra \(f'(1)=0\), \(f'(0)=-3\), \(f'(2)=9\).`
},
{
id: "ds-dh-02",
type: "dung-sai",
topic: "dao-ham",
question: String.raw`Cho \(y=\cos x\). Xét các mệnh đềsau.`,
statements: [
String.raw`\(y'=-\sin x\).`,
String.raw`Tại \(x=0\), \(y'=0\).`,
String.raw`Tại \(x=\frac{\pi}{2}\), \(y'=-1\).`,
String.raw`Đạo hàm của \(\cos x\) là \(\sin x\).`
],
answer: ["Đ", "Đ", "Đ", "S"],
solution: String.raw`Ta có \((\cos x)'=-\sin x\). Do đó tại \(x=0\), \(y'=0\); tại \(x=\frac{\pi}{2}\),
,→ \(y'=-1\).`
},
{
id: "ds-ml-01",
type: "dung-sai",
topic: "mu-logarit",
question: String.raw`Với \(a>0, a\ne 1\), xét các mệnh đềsau.`,
statements: [
String.raw`\(\log_a 1=0\).`,
String.raw`\(\log_a a=1\).`,
String.raw`\(\log_a a^5=5\).`,
String.raw`\(\log_a 0=0\).`
],
answer: ["Đ", "Đ", "Đ", "S"],
solution: String.raw`Các tính chất đúng là \(\log_a1=0\), \(\log_a a=1\), \(\log_a a^5=5\). Biểu thức
,→ \(\log_a0\) không xác định.`
},
{
id: "ds-ml-02",
type: "dung-sai",
topic: "mu-logarit",
question: String.raw`Xét phương trình \(3^x=27\) và biểu thức \(\log_2(x-2)\).`,
statements: [
String.raw`Phương trình \(3^x=27\) có nghiệm \(x=3\).`,
String.raw`Điều kiện xác định của \(\log_2(x-2)\) là \(x>2\).`,
String.raw`\(\log_2 8=4\).`,
String.raw`Nếu \(2^x=16\) thì \(x=4\).`
],
answer: ["Đ", "Đ", "S", "Đ"],
solution: String.raw`Vì \(27=3^3\), nên \(x=3\). Điều kiện \(x-2>0\Rightarrow x>2\). Ta có \(\log_2 8=3\), còn
,→ \(16=2^4\).`
},
// =========================
// PHẦN III. TRẢ LỜI NGẮN
// =========================
{
id: "tln-xs-01",
type: "tra-loi-ngan",
topic: "xac-suat",
question: String.raw`Gieo hai đồng xu cân đối. Tính xác suất đểcả hai đồng xu đều xuất hiện mặt sấp.`,
answer: String.raw`\(\frac{1}{4}\)`,
solution: String.raw`Không gian mẫu có \(4\) kết quả đồng khả năng. Chı̉ có \(1\) kết quả cả hai đều sấp, nên xác
,→ suất bằng \(\frac{1}{4}\).`
},
{
id: "tln-xs-02",
type: "tra-loi-ngan",
topic: "xac-suat",
question: String.raw`Một hộp có \(7\) viên bi đỏ và \(5\) viên bi xanh. Lấy ngẫu nhiên một viên. Tính xác suất
,→ lấy được bi đỏ.`,
answer: String.raw`\(\frac{7}{12}\)`,
solution: String.raw`Tổng sốviên bi là \(12\). Có \(7\) viên đỏ nên xác suất là \(\frac{7}{12}\).`
},
{
id: "tln-hh-01",
type: "tra-loi-ngan",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho hình chóp \(S.ABC\) có \(SA\perp (ABC)\), \(SA=3\), \(AB=4\). Tính độ dài \(SB\).`,
answer: String.raw`\(5\)`,
solution: String.raw`Vì \(SA\perp (ABC)\) nên \(SA\perp AB\). Tam giác \(SAB\) vuông tại \(A\), do đó
,→ \(SB=\sqrt{SA^2+AB^2}=\sqrt{3^2+4^2}=5\).`
},
{
id: "tln-hh-02",
type: "tra-loi-ngan",
topic: "hinh-hoc-khong-gian",
question: String.raw`Cho \(AB\perp (P)\) tại \(A\) và \(AB=6\). Tính khoảng cách từ \(B\) đến \((P)\).`,
answer: String.raw`\(6\)`,
solution: String.raw`Vì \(AB\) là đoạn vuông góc từ \(B\) đến \((P)\), khoảng cách cần tìm bằng \(AB=6\).`
},
{
id: "tln-dh-01",
type: "tra-loi-ngan",
topic: "dao-ham",
question: String.raw`Tính đạo hàm của hàm số\(y=x^4-2x^2+3\) tại \(x=1\).`,
answer: String.raw`\(0\)`,
solution: String.raw`Ta có \(y'=4x^3-4x\). Suy ra \(y'(1)=4-4=0\).`
},
{
id: "tln-dh-02",
type: "tra-loi-ngan",
topic: "dao-ham",
question: String.raw`Cho \(y=3x^2+2x-1\). Tính hệ sốgóc tiếp tuyến của đồthị tại \(x=2\).`,
answer: String.raw`\(14\)`,
solution: String.raw`Ta có \(y'=6x+2\). Tại \(x=2\), hệ sốgóc là \(y'(2)=14\).`
},
{
id: "tln-ml-01",
type: "tra-loi-ngan",
topic: "mu-logarit",
question: String.raw`Giải phương trình \(5^x=125\).`,
answer: String.raw`\(x=3\)`,
solution: String.raw`Vì \(125=5^3\), nên \(5^x=5^3\Rightarrow x=3\).`
},
{
id: "tln-ml-02",
type: "tra-loi-ngan",
topic: "mu-logarit",
question: String.raw`Tính giá trị của \(\log_3 81\).`,
answer: String.raw`\(4\)`,
solution: String.raw`Vì \(81=3^4\), nên \(\log_3 81=4\).`
}
];
