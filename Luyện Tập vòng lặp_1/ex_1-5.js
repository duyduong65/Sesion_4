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
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    for (let i = 1; i <= 20; i++) {
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        document.write(result + "  ");
    }
}

function totalFibonacci() {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    let total = 0;

    for (let i = 1; i <= 20; i++) {
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        total += Number(result);
    }
    document.write(total);
}

function findNumber() {
    let numbers_1 = 1;
    let numbers_2 = 0;
    let result = 1;
    for (let i = 1; i <= 20; i++) {
        result = numbers_1 + numbers_2;
        numbers_1 = numbers_2;
        numbers_2 = result;
        if ((result % 5) === 0) {
            document.write(result);
            break;
        }
    }
}

function findTotal() {
    let countNumbers = 0;
    let dem = 1;
    let total = 0;

    while (countNumbers < 10) {
        dem++;
        if (dem % 7 == 0) {
            total += dem;
            countNumbers++;
        }
    }
    document.write(total);
}