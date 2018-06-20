/*Déclaration fonction identité*/
function identity() {
/*Déclaration des variable*/
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
/*Boite de dialogue avec appel des variables*/
  var reg = /^[a-zA-Zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ-]+$/ ;
  trou = reg.test(lastname);
    trou1 = reg.test(firstname);
      trou2 = reg.test(city);

  if( trou && trou1 && trou2 ==true ){
    alert('Nom: ' + lastname + '\nPrenom: ' + firstname + '\nVille: ' + city);
  }
  else{
    alert('Recommencez sans les chiffres');
  }
}
