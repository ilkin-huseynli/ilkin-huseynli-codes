let temp = +prompt("Hava temperaturunu daxil edin:");
if (temp < 0) {
  console.log("Hava şaxtalıdır");
} else {
  console.log("Hava mülayimdir");
}

let color = prompt("Rəng adını daxil edin:");
if (color !== "") {
  console.log("Seçdiyiniz rəng: " + color);
} else {
  console.log("Heç bir rəng yazmadınız!");
}

let score = +prompt("Balınızı daxil edin:");
if (score >= 50) {
  console.log("İmtahandan keçdiniz");
} else {
  console.log("Kəsildiniz");
}

let password = prompt("Parolu daxil edin:");
if (password === "qwerty") {
  console.log("Giriş uğurludur");
} else {
  console.log("Şifrə səhvdir");
}

let num = +prompt("Rəqəm daxil edin:");
if (num === 5) {
  console.log("Tam olaraq 5 daxil etdiniz");
} else if (num == 5) {
  console.log("Dəyər 5-dir, amma tipi fərqlidir");
} else {
  console.log("Tamamilə fərqli bir şeydir");
}

let city = prompt("Şəhəri daxil edin:");
let age = +prompt("Yaşınızı daxil edin:");
if (city === "Bakı" && age > 16) {
  console.log("Tədbirə dəvətlisiniz!");
} else {
  console.log("Şərtlər ödənmir");
}

let fruit = prompt("Meyvə adını daxil edin:");
if (fruit === "Alma" || fruit === "Armud") {
  console.log("Bu meyvə bağımızda var");
} else {
  console.log("Bu meyvə bizdə yoxdur");
}

let coupon = prompt("Kupon kodunu daxil edin:");
let price = +prompt("Məhsulun qiymətini daxil edin:");
if (coupon === "ENDİRİM" && price > 100) {
  console.log("20% endirim tətbiq olundu");
} else {
  console.log("Endirim mümkün olmadı");
}

let day = +prompt("Həftənin gününü daxil edin:");
console.log(day === "Şənbə" || day === "Bazar" ? "İstirahət günü ☕" : day === "" ? "Gün daxil edilməyib 🗓️" : "İş günüdür 💻");

let balance = +prompt("Balansınızı daxil edin:");
console.log(balance >= 50 ? "Balans kifayətdir ✅" : (balance === "0" || balance === "") ? "Balansınız tamamilə boşdur ⛔" : "Balans azdır, artırın ⚠️");