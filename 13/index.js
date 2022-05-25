function calc(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let op = document.getElementById("op").value;

    switch(op){
        case "+":
            result = (Number(num1) + Number(num2))
        break;
        case "-":
            result = num1 - num2
        break;
        case "*":
            result = num1 * num2
        break;
        case "/":
            result = num1 / num2
        break;
    };
    
    document.getElementById("saida").innerHTML = `The result is ${result}`;
}