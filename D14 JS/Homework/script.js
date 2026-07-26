// 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 2
let array = [];
for (let i = 1; i <= 15; i++) {
  array.push(i);
}
console.log(array);

// 3
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 3);
}

// 4
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// 5
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 6
let n = +prompt("Ədəd daxil edin:");
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

// 7
let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
}

// 8
let qiymet = 1200;
let qenaet = 15;
let saxlanilan = 0;
let gun = 0;
while (saxlanilan < qiymet) {
  saxlanilan += qenaet;
  gun++;
}
console.log(gun);

// 9
let array = [14, 7, 22, 3, 10, 15];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log("Cüt ədəd: " + array[i]);
  } else {
    console.log("Tək ədəd: " + array[i]);
  }
}

// 10
let hedef = 150;
let yol = 0;
let gunler = 0;
while (yol < hedef) {
  day++;
  if (day % 4 === 0) {
    yol += 0;
  } else {
    yol += 10;
  }
}
console.log(gunler);