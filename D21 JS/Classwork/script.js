// 1
const tevellud = new Date("2012-07-23");
const bugun = new Date();
const yas = bugun.getFullYear() - tevellud.getFullYear();
document.getElementById("yasi").innerText = "Menim yasim: " + yas;

// 2
let saniyeSayan = 0;
const saniyeSpan = document.getElementById("saniye");
setInterval(function () {
  saniyeSayan++;
  saniyeSpan.innerText = saniyeSayan;
}, 1000);