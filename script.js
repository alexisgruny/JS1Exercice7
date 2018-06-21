function bizarre(){
  var shoeSize = document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var resultat;
  // test regex
  if (/^[0-9]+$/.test(shoeSize && yearOfBirth) == true);{
  // suite de calcul
  resultat = shoeSize * 2;
  resultat = resultat + 5;
  resultat = resultat * 50;
  resultat = resultat - yearOfBirth;
  resultat = resultat + 1766;
  // affichage du resultat
  alert(resultat);
  }
}
