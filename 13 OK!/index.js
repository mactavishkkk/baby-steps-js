function calc(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let sum = Number(num1) + Number(num2);
    let sub = Number(num1) - Number(num2);
    let mult = Number(num1) * Number(num2);
    let div = Number(num1) / Number(num2);
    let exp = Number(num1) ** Number(num2);

    document.getElementById("saida").innerHTML = `The result of ${num1} + ${num2} é = ${sum}.`;
    document.getElementById("saida1").innerHTML = `The result of ${num1} - ${num2} é = ${sub}.`;
    document.getElementById("saida2").innerHTML = `The result of ${num1} * ${num2} é = ${mult}.`;
    document.getElementById("saida3").innerHTML = `The result of ${num1} / ${num2} é = ${div}.`;
    document.getElementById("saida4").innerHTML = `The result of ${num1}^${num2} é = ${exp}.`;
}