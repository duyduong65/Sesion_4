let numbers = prompt("nhập vào số n:");
let cout = 0;
let i = 2;
while (cout < numbers) {
    if (CheckPrimeNumber()) {
        document.write(i + " ");
        cout++;
    }
}

function CheckPrimeNumber() {
    let squareRoot = Math.sqrt(numbers);
    if (numbers < 2) {
        return false;
    } else {
        for (i = 2; i <= squareRoot; i++) {
            if ((i % j) === 0) {
                return false;
            }
        }
        return true;
    }
}