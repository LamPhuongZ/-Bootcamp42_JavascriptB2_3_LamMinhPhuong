// Khai báo các tên biến
// input
let numberA = 0;
let numberB = 0;

// output
let result = 0;
let sum = 0;
let CHU_VI = 0;
let DIEN_TICH = 0;
let average = 0; // Trung bình

// Bài tập 1: Tính tiền lương nhân viên
// Lắng nghe sự kiện user click vào button tính nào
document.getElementById("calculate").onclick = function () {
    // B1: Lấy giá trị của các inputs
    numberA = document.getElementById("salaryoneday").value;
    numberB = document.getElementById("typeNumber").value;

    // B2: Tính toán
    result = numberA * numberB;

    // B3: Hiển thị kết quả ra giao diện
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result-b1").innerHTML = Intl.NumberFormat('vn-VN').format(result) + " VND";
};
// Kết thúc bài tập 1

// Bài tập 2: Tính giá trị trung bình
document.getElementById("average").onclick = function () {
    // B1: Lấy giá trị của các inputs
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let number3 = document.getElementById("number3").value;
    let number4 = document.getElementById("number4").value;
    let number5 = document.getElementById("number5").value;

    let SO_THUC = number1 + number2 + number3 + number4 + number5;

    // B2: Tính toán
    average += SO_THUC % 10;
    SO_THUC = Math.floor(SO_THUC / 10);

    average += SO_THUC % 10;
    SO_THUC = Math.floor(SO_THUC / 10);

    average += SO_THUC % 10;
    SO_THUC = Math.floor(SO_THUC / 10);

    average += SO_THUC % 10;
    SO_THUC = Math.floor(SO_THUC / 10);

    average += SO_THUC;

    average = average / 5;

    // B3: Hiển thị kết quả ra giao diện
    document.getElementById("result-average").style.display = "block";
    document.getElementById("result-b2").innerHTML = average;
};
// Kết thúc bài tập 2

// Bài tập 3: Quy đổi tiền
document.getElementById("currency__exchange").onclick = function () {
    // B1: Lấy giá trị của các inputs
    numberA = document.getElementById("USDprice").value;

    // B2: Tính toán
    result = numberA * 23_500;

    // B3: Hiển thị kết quả ra giao diện
    document.getElementById("result-exchange").style.display = "block";
    document.getElementById("result-b3").innerHTML = numberA + " * 23.500" + " = " + Intl.NumberFormat('vn-VN').format(result) + " VND";
};
// Kết thúc bài tập 3

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("count").onclick = function () {
    // B1: Lấy giá trị của các inputs
    numberA = +document.getElementById("lenghtnumber").value;
    numberB = +document.getElementById("widthnumber").value;

    // B2: Tính toán
    // Diện tích
    DIEN_TICH = numberA * numberB;

    // Chu vi
    CHU_VI = (numberA + numberB) * 2;

    // B3: Hiển thị kết quả ra giao diện
    document.getElementById("result-count").style.display = "block";
    document.getElementById("result-b4").innerHTML = "Diện tích: " + DIEN_TICH + "; Chu vi: " + CHU_VI;
};
// Kết thúc bài tập 4

// Bài tập 5: Tính tổng 2 ký sô
document.getElementById("sum").onclick = function () {
    // B1: Lấy giá trị của các inputs
    numberA = document.getElementById("sum__number").value;

    // B2: Tính toán
    sum += numberA % 10;
    numberA = Math.floor(numberA / 10);
    sum += numberA;

    // B3: Hiển thị kết quả ra giao diện
    document.getElementById("result-sum").style.display = "block";
    document.getElementById("result-b5").innerHTML = sum;
};
// Kết thúc bài tập 5


