function month(){
    let code = document.getElementById("code").value;
    let text = "";

    document.getElementById("saida").innerHTML = `The month corresponding the digit ${code} is:`;
    
    switch(code){
        case "Select":
        text = "Please, fill in correctly";
        break;
        
        case "1":
        text = "You are in January";
        break;

        case "2":
        text = "You are in February";
        break;

        case "3":
        text = "You are in March";
        break;

        case "4":
        text = "You are in April";
        break;

        case "5":
        text = "You are in May";
        break;

        case "6":
        text = "You are in June";
        break;

        case "7":
        text = "You are in July";
        break;

        case "8":
        text = "You are in August";
        break;

        case "9":
        text = "You are in September";
        break;

        case "10":
        text = "You are in October";
        break;

        case "11":
        text = "You are in November";
        break;

        case "12":
        text = "You are in December";
        break;

    }

    document.getElementById("saida1").innerHTML = text;

}