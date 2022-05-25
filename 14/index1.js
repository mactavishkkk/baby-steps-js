function tab() {
    
    let numx = document.getElementById("n1").value;
    let numo = document.getElementById("ope").value;
    let text = "";    

    document.getElementById("saida").innerHTML = `Tablet of ${numx}`;
    
    for(let numi = 1; numi <= 10; numi++){
        switch(numo){
            case "+":
                text += numx + " + " + numi + " = " + (Number(numx) + Number(numi)) + '<br>';
            break;
            case "-":
                text += (Number(numx) + Number(numi)) + " - " + numx + " = " + (Number(numx) + Number(numi) - numx) + '<br>'; 
            break;
            case "*":
                text += numx + " x " + numi + " = " + (Number(numx) * Number(numi)) + '<br>'; 
            break;
            case "/":
                text += (Number(numx) * Number(numi)) + " / " + numx + " = " + (Number(numx) * Number(numi) / numx) + '<br>'; 
            break;            
        }
    }

    document.getElementById("saida1").innerHTML = text;

}