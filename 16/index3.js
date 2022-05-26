function inverse(){
    let valor = document.getElementById("valor").value;
    let text = "";

    switch(valor){
        case "True":
            text = "False"
        break;
        case "False":
            text = "True"
        break;
        case valor:
            text = (Number(valor) - Number(valor) - Number(valor))
        break;

    }

    document.getElementById("saida").innerHTML = `The inverse of value entered é ${text}`;
    document.getElementById("saida1").innerHTML = "The typeof is: " + typeof(text);
}