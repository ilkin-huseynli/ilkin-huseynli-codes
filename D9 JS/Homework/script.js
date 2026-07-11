// 1
let elementler = ["A", "B"];
elementler.unshift("Y");
elementler.unshift("X");
elementler.push("Z");
elementler.push("W");
console.log(elementler);

// 2
let ballar = [45, 80, 55, 90, 72, 30];
ballar.forEach(function (bal) {
  console.log("Bal: " + bal);
});

// 3
let mehsullar = ["Köynək", "Şalvar", "Papaq"];
let kohneQiymetler = [10, 20, 30];
let yeniQiymetler = kohneQiymetler.map(function (qiymet) {
  return qiymet * 3;
});
console.log(yeniQiymetler);

// 4
let array4 = [2, 3, 4];
array4.unshift(1);
console.log(array4);

// 5
let array5 = [10, 20, 30, 40];
let silinenElement = array5.shift();
console.log("Silinən element: " + silinenElement);
console.log(array5);

// 6
let meyveler = ["Alma", "Armud", "Banan"];
meyveler.push("Nar");
console.log(meyveler);
meyveler.pop();
console.log(meyveler);

// 7
let reqemler = [5, 10, 15];
reqemler.unshift(1);
console.log(reqemler);
reqemler.shift();
console.log(reqemler);

// 8
let meyveler2 = ["alma", "armud", "banan", "nar"];
meyveler2.forEach(function (meyve) {
  console.log(meyve.toUpperCase());
});

// 9
let array9 = [1, 2, 3];
array9.push(4);
array9.pop();
array9.shift();
array9.unshift(0);
console.log(array9);

// 10
let renkler = ["Qırmızı", "Yaşıl", "Mavi"];
renkler.push("Sarı");
renkler.shift();
renkler.forEach(function (renk) {
  console.log(renk);
});