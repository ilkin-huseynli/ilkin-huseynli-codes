let cavab1 = prompt("Azərbaycanin paytaxti hansi şəhərdir?");
let cavab2 = prompt("Dünyada ən böyük okean hansidir?");
let cavab3 = prompt("Suyun kimyəvi formulu hansidir?");

let duzgun = 0;

if(cavab1.toLowerCase() == "baki"){
  duzgun = duzgun + 1;
}

if(cavab2.toLowerCase() == "sakit okean"){
  duzgun = duzgun + 1;
}

if(cavab3.toLowerCase() == "h2o"){
  duzgun = duzgun + 1;
}

document.querySelector("#netice").innerText = "Düzgün cavabların sayı: " + duzgun + " / 3";

if(duzgun == 3){
  document.querySelector("body").style.backgroundColor = "green";
} else {
  document.querySelector("body").style.backgroundColor = "red";
}