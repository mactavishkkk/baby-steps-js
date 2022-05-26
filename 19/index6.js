const numeros = [];
const triplo = [];

function dispArr(){
    let eleMent = document.getElementById("element").value;
    numeros.push(eleMent);
    document.getElementById("saida").innerHTML = numeros;
}

function dispArr1(){
    let x = (numeros.length)-1;
    for(let i = 0; i <= x; i++){
        triplo.push(numeros[i] * 3);
    }
    document.getElementById("saida1").innerHTML = triplo;
}
