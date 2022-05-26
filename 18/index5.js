const numeros = [];
const pares = [];

function dispArr(){
    let eleMent = document.getElementById("element").value;
    numeros.push(eleMent)
    document.getElementById("saida").innerHTML = numeros;
}

function dispArr1(){
    let x = (numeros.length)-1;
    for(let i = 0; i <= x; i++){
        if((numeros[i] % 2) == 0){
            pares.push(numeros[i]);
        }
    }

    document.getElementById("saida1").innerHTML = pares;
}