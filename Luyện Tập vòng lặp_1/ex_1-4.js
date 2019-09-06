function showNumbers() {
    for (let i = 1; i < 100; i++) {
    }
    alert("Done");
}

function convertTemplate() {
    let inputTemplate = prompt("nhập vào nhiệt độ");
    while (inputTemplate > 100) {
        alert("Hãy giảm nhiệt độ");
        break;
    }
    while (inputTemplate < 0) {
        alert("Hãy tăng nhiệt độ");
        break;
    }
}

function showFibonacci() {
    let a = 1;
    let b = a;

    for (let i = 1; i <= 20; i++) {
        b += a;
        document.write(b + " | ");
        a = a + b;
        document.write(a + " | ");

    }
}