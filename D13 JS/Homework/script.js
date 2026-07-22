// 1
let reqemler1 = [2, 4, 6, 8, 10];
let hasil = reqemler1.reduce((vuruq, eded) => vuruq * eded, 1);
console.log(hasil);

// 2
let reqemler2 = [-10, -5, -2, -8];
let hamisiMenfidir = reqemler2.every(eded => eded < 0);
console.log(hamisiMenfidir);

// 3
let qutu = [1, 2, 3, 4, 5];
let kopyaQutu = [...qutu];
kopyaQutu.reverse();
console.log(kopyaQutu);
console.log(qutu);

// 4
let soz = "Kompüter";
let netice = soz.split("").join(" ");
console.log(netice);

// 5
let sifre = "98765";
let tersSifre = sifre.split("").reverse().join("");
let sifreMassivi = tersSifre.split("").map(Number);
let enKicik = Math.min(...sifreMassivi);
console.log(enKicik);