// 1
document.querySelector("button").addEventListener("click", function() {
  alert("Səhifə yenilənir...");
  location.reload();
});

// 2
const baslik = document.getElementById("baslik");
let ilkMetin = baslik.textContent;
let deyisdirildi = false;

baslik.addEventListener("click", function() {
  if (!deyisdirildi) {
    baslik.textContent = "Yeni Başlıq";
  } else {
    baslik.textContent = ilkMetin;
  }
  deyisdirildi = !deyisdirildi;
});

// 3
document.getElementById("btn").addEventListener("click", function() {
  const cavab = prompt("Gizli sual: Azərbaycanın paytaxtı hansıdır?");
  if (cavab === "Bakı") {
    window.location.href = "secret.html";
  } else {
    alert("Yanlış cavab!");
  }
});

// 4
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  const btn = box.querySelector("button");
  btn.addEventListener("click", function() {
    boxes.forEach(b => {
      b.style.backgroundColor = "rgb(240, 240, 240)";
      b.style.borderColor = "rgb(51, 51, 51)";
      b.querySelector("button").textContent = "Seç";
    });

    box.style.backgroundColor = "lightgreen";
    box.style.borderColor = "green";
    btn.textContent = "Seçildi";
  });
});