let n = prompt("nhập vào số n: ");
n = Number(n);
let cout = 0;
let i = 2;
while (cout < n) {
    if (CheckPrimeNumber()) {
        document.write(i + " ");
        cout++
    }
    i++;
}

function CheckPrimeNumber() {
let m;
    let squareRoot = Math.sqrt(m);
    if (m < 2) {
        return false;
    }
    for (let i = 2; i <= squareRoot; i++) {
        if (m % i == 0) {
            return false;
        }
    }
    return true;
}



