// 1. Ad və Mətnlərlə İşləmə
let soyad = prompt("Soyadinizi daxil edin:");
console.log(soyad);

let yer = prompt("Yasadiginiz seheri daxil edin:");
console.log("Siz " +yer+ " seherinde yasayirsiniz");

let reng = prompt("En sevdiyiniz rengi daxil edin");
console.log(reng+ " rengi heqiqeten cox gozeldir");

// 2. İki Ədədlə Riyazi Əməliyyatlar
let birincieded = +prompt("Birinci ededi daxil edin");
let ikincieded = +prompt("Ikinci ededi daxil edin");
console.log(birincieded - ikincieded);

let en = +prompt("Duzbucaqlinin enini daxil edin");
let uzunluq = +prompt("Duzbucaqlinin uzunlugunu daxil edin");
console.log(en * uzunluq);

let bolunen = +prompt("Boluneni daxil edin");
let bolen = +prompt("Boleni daxil edin");
console.log(bolunen % bolen);

// 3. Tarix və Zaman Hesablamaları
let yas = +prompt("Hazirki yasinizi daxil edin");
let teqaudyasi = 65;
console.log(teqaudyasi - yas);

let dogumili = +prompt("Dogum ilinizi daxil edin");
let mektebibitirmeili = 17;
console.log(dogumili + mektebibitirmeili);

let il = +prompt("Herhansisa il daxil edin");
let esr = Math.floor (il / 100) + 1;
console.log(il+ " "+esr+" ci esre aiddir");

// 4. Tiplərin Çevrilməsi
let sistemaciqdir = true;
let sistemaciqdirString = String(sistemaciqdir);
console.log(sistemaciqdirString, typeof sistemaciqdirString);

let mehsulqiymeti = "150";
let yeniqiymet = Number(mehsulqiymeti) + 20;
console.log(yeniqiymet);

let gun = "25";
let gunreqem = Number(gun);
console.log(gunreqem, typeof gunreqem);

// 5. Çoxlu Ədədlərlə Hesablamalar
let terefA = +prompt("Ucbucagin 1-ci terefini daxil edin:");
let terefB = +prompt("Ucbucagin 2-ci terefini daxil edin:");
let terefC = +prompt("Ucbucagin 3-cu terefini daxil edin:");
console.log("Perimetr:", terefA + terefB + terefC);

let birincimehsul = +prompt("Birinci mehsulun qiymetini daxil edin");
let ikincimehsul = +prompt("Ikinci mehsulun qiymetini daxil edin");
let ucuncumehsul = +prompt("Ucuncu mehsulun qiymetini daxil edin");
console.log("Qiymet:", birincimehsul + ikincimehsul + ucuncumehsul);

let birincibal = +prompt("Birinci bali daxil edin");
let ikincibal = +prompt("Ikinci bali daxil edin");
let ucuncubal = +prompt("Ucuncu bali daxil edin");
console.log("Ortalama bal:", (birincibal + ikincibal + ucuncubal) / 3);