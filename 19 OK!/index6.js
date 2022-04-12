const eleMentos = [];
const eleMentos1 = [];

function dispArr(){
    let eleMent = document.getElementById("element").value;

    eleMentos.push(eleMent)

    document.getElementById("saida").innerHTML = eleMentos;

}

function dispArr1(){
    let x = (eleMentos.length)-1;
    for(let i = 0; i <= x; i++){
        if((eleMentos[i] % 2) == 0){
            eleMentos1.push(eleMentos[i] * 3);
        }else if((eleMentos[i] % 2) == 1){
            eleMentos1.push(eleMentos[i] * 3);
    }
}

    document.getElementById("saida").innerHTML = eleMentos;
    document.getElementById("saida1").innerHTML = eleMentos1;
}