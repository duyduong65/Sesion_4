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

function PrintFizzBuzz() {
    let NumbersRandom;
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            NumbersRandom = "FizzBuzz";
        } else if (i % 3 == 0) {
            NumbersRandom = "Fizz";
        } else if (i % 5 == 0) {
            NumbersRandom = "Buzz";
        } else {
            NumbersRandom = i;
        }
        document.write(NumbersRandom + "  ");
    }
}

function GameEZ() {
    let inputValue_1 = +prompt("Nhập vào giá trị muốn đoán khoảng từ");
    let inputValue_2 = +prompt("Nhập vào giá trị muốn đoán khoảng đến");
    let inputValue_3;
    let n = Math.floor(Math.random() * (inputValue_2 - inputValue_1) + inputValue_1);
    for (let i = 0; i < 3; i++) {
        inputValue_3 = +prompt("Nhập vào giá trị muốn đoán");

        if (inputValue_3 == n) {
            alert("Done");
        } else if (inputValue_3 > n){
            alert("Số này lớn hơn giá trị");
        } else {
            alert("số này nhỏ hơn giá trị");
        }
    }
}