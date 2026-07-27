// 1
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// 2
let faiz = 0;
while (faiz < 100) {
    faiz += 10;
    console.log("Batareya:" + faiz + "%")
}

// 3
let qiymetler = [100, 200, 50, 80];
for (let i = 0; i < qiymetler.length; i++) {
    let yeniQiymet = qiymetler[i] * 0.9;
    console.log(yeniQiymet);
}

// 4
let veloQiymet = 350;
let yigilanPul = 0;
let gun = 0;
while (yigilanPul < veloQiymet) {
    yigilanPul += 20;
    gun++;
}

// 5
let ballar = [45, 80, 32, 90, 65, 50];
for (let i = 0; i < ballar.length; i++) {
    if (ballar[i] >= 50) {
        console.log("Keçdi:" +ballar[i])
    } else {
        console.log("Kəsildi:" +ballar[i])
    }
}
