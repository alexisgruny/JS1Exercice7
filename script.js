function bizarre(){
  var x = document.getElementById("shoeSize").value;
  var y = document.getElementById("yearOfBirth").value;
  var a;
  a = x * 2;
  a = a + 5;
  a = a * 50;
  a = a - y;
  a = a + 1766;
  alert(a);
}
