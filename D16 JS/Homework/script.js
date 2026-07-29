// 1
let numbers = [-3, 2, 7, 8, -10, 15, 4, 0];
let result = [];
for (const num of numbers) {
  if (num > 0 && num % 2 === 0) {
    result.push(num);
  }
}
console.log(result);

// 2
let i = 1;
let sum = 0;
while (i <= 100) {
  if (i > 50) break;
  sum += i;
  i++;
}
console.log(sum);

// 3
let names = ["Əli", "Vəli", "Ayşən", "Nərmin"];
let sentence = "";
for (const name of names) {
  sentence += name + " ";
}
sentence = sentence.trim();
console.log(sentence);

// 4
let animals = ["pişik", "it", "at", "quş"];
for (const animal of animals) {
  console.log(animal.toUpperCase());
}

// 5
let names = ["Kamran", "Nigar", "Əli", "Vüqar", "Sabina"];
for (const name of names) {
  if (name === "Əli") {
    console.log(name);
    break;
  }
  console.log(name);
}

// 6
for (let i = 0; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// 7
for (let i = 0; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}