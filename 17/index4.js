function dispArr(){
    let eleMent = document.getElementById("element").value;
    document.getElementById("saida").innerHTML = eleMent;
}

function dispArr1(){
    let eleMent = document.getElementById("element").value;
    var numbers = eleMent.replace(/\D/g, '');
    document.getElementById("saida1").innerHTML = numbers;

}
