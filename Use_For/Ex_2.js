
function totalNumbers() {
    let total;
    let inputNumbers = Number(document.getElementById("inputNumbers").value);
    for (let i = 1; i<= inputNumbers; i+=1){
        total =  inputNumbers + i;
    }
    alert(total);
}