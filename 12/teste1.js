function displaySaida(){
  let nome = document.getElementById("fname").value;
  let sobreNome = document.getElementById("lname").value;

  document.getElementById("saida").innerHTML = `Hello ${nome} ${sobreNome} !`;
}