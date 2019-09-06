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
    let n = 0;
    for (let i = 0; i < 10; ) {
        n += i;
        document.write(n + "  ");
    }
}