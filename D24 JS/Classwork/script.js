const title = document.querySelector(".title");
const dugme = document.querySelector(".changeButton");

let maviDir = false;

dugme.addEventListener("click", function() {
  if (!maviDir) {
    title.innerText = "Rəng mavi oldu!";
    title.style.color = "blue";
  } else {
    title.innerText = "Salam, Dünya!";
    title.style.color = "black";
  }
  maviDir = !maviDir;
});