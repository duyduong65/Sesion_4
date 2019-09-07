let n = prompt("nhập vào số n: ");
n = Number(n);

function CheckPrimeNumbers(val) {

    if (val < 2) {
        return false;
    } else {
        let squareRoot = Math.sqrt(val);
        for (let j = 2; j <= squareRoot; j++) {
            if ((val % j) === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}

let cout = 0;
let outNumbers = 2
while (cout < n) {
    if (CheckPrimeNumbers(outNumbers)) {
        cout++;
        document.write(outNumbers + "  ")
    }
    outNumbers++;
}







