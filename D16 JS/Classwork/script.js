// 1
let scores = [45, 60, 80, 30, 95];
for (const el of massiv) {
    console.log(el+=10)
}

// 2
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 3
let fruits = ["Alma", "Banan", "Qarpız", "Gilas", "Yemiş"];
for (let fruit of fruits) {
  if (fruit === "Qarpız" || fruit === "Yemiş") {
    continue;
  }
  console.log(fruit);
}

// 4
let prices = [15, 25, 40, 0, 50, 80];
for (let price of prices) {
  if (price === 0) {
    console.log("Xətalı qiymət tapıldı, proses dayandırıldı!");
    break;
  }
  console.log(price);
}