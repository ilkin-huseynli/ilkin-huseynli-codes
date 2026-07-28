// 1
let tutum = 100;
let su = 0;
let gun = 0;
while (su < tutum) {
    gun++;
    if (gun % 3 === 0) {
        su += 0;
    } else {
        su += 20;
    }
}
console.log("Bak " + gun + " gündə dolur");

// 2
let hedef = 100;
let zaryatka = 0;
let saat = 0;
while (zaryatka < hedef) {
    saat++;
    if (saat % 2 === 0) {
        zaryatka += 0;
    } else {
        zaryatka += 25;
    }
}
console.log("Telefon " + saat + " saatda dolur");

// 3
let meqsed = 80;
let bananlar = 0;
let gunler = 0;
while (bananlar < meqsed) {
    gunler++;
    if (gunler % 5 === 0) {
        bananlar -= 5;
    } else {
        bananlar += 10;
    }
}
console.log("Meymun " + gunler + " günə hədəfə çatır");

// 4
let tam = 30;
let hundurluk = 0;
let gunlerr = 0;
while (hundurluk < tam) {
    gunlerr++;
    hundurluk += 5;
    if (hundurluk >= tam) {
        break;        
    }
    hundurluk -= 2;
}
console.log("İlbiz " + gunlerr + "-cu gündə təpəyə çatır");

// 5
let i = 1;
while (i <= 5) {
    let setir = "";
    let j = 0;
    while (j < i) {
        setir += "*";
        j++;
    }
    console.log(setir);
    i++;
}