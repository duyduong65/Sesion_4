function printFinonaci() {
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