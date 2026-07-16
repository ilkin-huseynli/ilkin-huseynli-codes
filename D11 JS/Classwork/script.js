let numbers = [12, 5, 8, -3, 19, -8, 2];
let ilkMenfiEded = numbers.find(el => el<0);
console.log(ilkMenfiEded)

let books = ["Xəmsə", "Kitabi-Dədə Qorqud", "Azərbaycan nağılları", "Ölüb gedənlər", "Cırtdan"];
books.sort((a, b) => a.localeCompare(b, 'az'));
console.log(books);

let prices = [45, 120, 8, 99, 350, 15, 75];
prices.sort((a, b) => b - a);
console.log(prices);