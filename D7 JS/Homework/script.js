// 1
function topla(a, b) {
    return a + b;
}
console.log(topla(5, 10));

// 2
function kvadrat(eded) {
    return eded * eded;
}
console.log(kvadrat(5));

// 3
function girisYoxla(yas) {
    if (yas >= 18) {
        return "Giriş icazəlidir";
    } else {
        return "Giriş qadağandır";
    }
}
console.log(girisYoxla(20));
console.log(girisYoxla(15));

// 4
function cutveyatek(eded) {
    if (eded % 2 === 0) {
        return "Ədəd cütdür";
    } else {
        return "Ədəd təkdir";
    }
}
console.log(cutveyatek(7));
console.log(cutveyatek(10));

// 5
function ortalama(a, b, c) {
    return (a + b + c) / 3;
}
console.log(ortalama(4, 8, 12));

// 6
function isare(eded) {
    if (eded > 0) {
        return "Ədəd müsbətdir";
    } else if (eded < 0) {
        return "Ədəd mənfidir";
    } else {
        return "Ədəd sıfırdır";
    }
}
console.log(isare(-5));
console.log(isare(0));
console.log(isare(9));      