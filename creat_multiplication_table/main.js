let limit = 10;
let sout = "<table border='1' width='1000' cellspacing='1' cellpadding='3'>";
for (let numbers_1 = 1; numbers_1 <= limit; numbers_1++) {
    sout = sout + "<tr>";
    for (let numbers_2 = 1; numbers_2 <= limit; numbers_2++) {
        let product = numbers_1 * numbers_2;
        sout = sout +"<td>"+ numbers_1 + " x " + numbers_2 + " = " + product + "<br>" +"</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>"
document.write(sout)


