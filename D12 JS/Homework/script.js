let reqemler = [2, 4, 6, 8, 10];
let hasil = 1;
for (let i = 0; i < reqemler.length; i++) {
    hasil = hasil * reqemler[i];
}
console.log(hasil);


let reqemler = [-10, -5, -2, -8];
let hamisiMenfidir = true;
for (let i = 0; i < reqemler.length; i++) {
    if (reqemler[i] >= 0) {
        hamisiMenfidir = false;
    }
}
console.log(hamisiMenfidir);


let qutu = [1, 2, 3, 4, 5];
let qutuKopya = [];
for (let i = 0; i < qutu.length; i++) {
    qutuKopya[i] = qutu[i];
}
let tersKopya = [];
for (let i = qutuKopya.length - 1; i >= 0; i--) {
    tersKopya.push(qutuKopya[i]);
}
console.log("Kopyalanmış (tərs):", tersKopya);
console.log("Orijinal massiv:", qutu);


let soz = "Kompüter";
let netice = "";
for (let i = 0; i < soz.length; i++) {
    netice += soz[i];
    if (i !== soz.length - 1) {
        netice += " ";
    }
}
console.log(netice);


let sifre = "98765";
let tersSifre = "";
for (let i = sifre.length - 1; i >= 0; i--) {
    tersSifre += sifre[i];
}
console.log("Tərsinə çevrilmiş:", tersSifre);
let sifreMassivi = [];
for (let i = 0; i < tersSifre.length; i++) {
    sifreMassivi.push(Number(tersSifre[i]));
}
console.log("Massiv halında:", sifreMassivi);
let enKicik = sifreMassivi[0];
for (let i = 1; i < sifreMassivi.length; i++) {
    if (sifreMassivi[i] < enKicik) {
        enKicik = sifreMassivi[i];
    }
}
console.log("Ən kiçik rəqəm:", enKicik);