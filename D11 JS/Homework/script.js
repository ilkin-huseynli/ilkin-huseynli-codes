// 1
let numbers = [7, 11, 15, 8, 19, 22, 3];
let ilkCut = numbers.find(num => num % 2 === 0);
console.log("İlk cüt ədəd:", ilkCut);

// 2
let cities = ["Şəki", "Bakı", "Gəncə", "Sumqayıt", "Lənkəran", "Özbəkistan"];
let sortedCities = [...cities].sort((a, b) => a.localeCompare(b, "az"));
console.log("Əlifba sırası ilə şəhərlər:", sortedCities);

// 3
let ages = [12, 15, 17, 21, 14, 30, 10];
let ilkYetkin = ages.find(age => age >= 18);
console.log("İlk yetkinlik yaşına çatmış şəxsin yaşı:", ilkYetkin);

// 4
let prices = [250, 15, 80, 1200, 45, 90, 5];
let sortedPrices = [...prices].sort((a, b) => a - b);
console.log("Ucuzdan bahaya sıralanmış qiymətlər:", sortedPrices);

// 5
let words = ["kitab", "kompüter", "ev", "proqramlaşdırma", "dəftər"];
let sortedWords = [...words].sort((a, b) => a.length - b.length);
console.log("Uzunluğuna görə sıralanmış sözlər:", sortedWords);

// 6
let activePromos = ["SUMMER20", "NEWYEAR", "XEZRI10", "BAKU2026"];

document.getElementById("checkBtn").addEventListener("click", function () {
  let enteredCode = document.getElementById("promoInput").value.trim();
  let result = document.getElementById("result");

  let found = activePromos.find(code => code === enteredCode);

  if (found) {
    result.textContent = "Promokod qəbul olundu!";
  } else {
    result.textContent = "Belə bir promokod yoxdur!";
  }
});

// 7
let students = [["Aysel", 75], ["Kənan", 92], ["Nigar", 45], ["Emin", 88], ["Fərid", 60]];

let sortedStudents = [...students].sort((a, b) => b[1] - a[1]);
console.log("Balına görə azalan sırayla tələbələr:", sortedStudents);

document.getElementById("searchBtn").addEventListener("click", function () {
  let enteredName = document.getElementById("nameInput").value.trim();
  let result = document.getElementById("result2");

  let found = students.find(student => student[0].toLowerCase() === enteredName.toLowerCase());

  if (found) {
    result.textContent = "Tələbə tapıldı! Balı " + found[1];
  } else {
    result.textContent = "Təəssüf, belə bir tələbə tapılmadı.";
  }
});

// 8
let users = [["Ayan", [10, 20, 30]], ["Murad", [50, 40]], ["Nəzrin", [5, 10, 15, 20]]];
let sortedUsers = [...users].sort((a, b) => {
  let A = a[1].reduce((total, score) => total + score, 0);
  let B = b[1].reduce((total, score) => total + score, 0);
  return B - A;
});
console.log("Ümumi xala görə azalan sırayla istifadəçilər:", sortedUsers);

// 9
 let activePins = ["1111", "5555", "9876", "1234"];
 
    document.getElementById("checkBtn2").addEventListener("click", function () {
      let enteredPin = document.getElementById("pinInput").value.trim();
      let result = document.getElementById("result3");
 
      let found = activePins.find(pin => pin === enteredPin);
 
      if (found) {
        result.textContent = "Giriş uğurludur!";
      } else {
        result.textContent = "Yalnış pin-kod!";
      }
    });

// 10
let products = [["Telefon", 1200], ["Noutbuk", 2500], ["Qulaqlıq", 150], ["Klaviatura", 80], ["Siçan", 45]];
 
    let sortedProducts = [...products].sort((a, b) => a[1] - b[1]);
    console.log("Qiymətinə görə sıralanmış məhsullar:", sortedProducts);
 
    let list = document.getElementById("productList");
    sortedProducts.forEach(product => {
      let li = document.createElement("li");
      li.textContent = product[0] + " - " + product[1] + " AZN";    
      list.appendChild(li);
    });
 
    document.getElementById("searchBtn3").addEventListener("click", function () {
      let enteredName = document.getElementById("productInput").value.trim();
      let resultEl = document.getElementById("result4");
 
      let found = products.find(product => product[0].toLowerCase() === enteredName.toLowerCase());
 
      if (found) {
        resultEl.textContent = "Məhsul tapıldı! Qiyməti:" + found[1] + "AZN";
      } else {
        resultEl.textContent = "Təəssüf, belə bir məhsul tapılmadı.";
      }
    });