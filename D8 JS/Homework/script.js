let soz = 'programist';
console.log(soz.toUpperCase());

let soz = 'CODING';
console.log(soz.toLowerCase());

let cumle = 'Mən proqramlaşdırmanı sevirəm';
console.log(cumle.indexOf('sev'));

let cumle = 'JavaScript çox maraqlıdır';
console.log(cumle.includes('maraqlıdır'));

let cumle = 'Salam, dostum!';
let yeniCumle = cumle.replace('dostum', 'dünya');
console.log(yeniCumle);

let cumle = '   Kod yazmaq əyləncəlidir   ';
let temiz = cumle.trim();
console.log(temiz);

let soz = 'frontend';
console.log(soz.slice(0, 5));

let cumle = 'HTML, CSS, JavaScript';
let massiv = cumle.split(', ');
console.log(massiv);

let soz = 'kitabxana';
let hisse = soz.slice(-3);
console.log(hisse);

let cumle = '  Bakı gözəl şəhərdir  ';
let netice = cumle.trim().toUpperCase().split(' ');
console.log(netice);