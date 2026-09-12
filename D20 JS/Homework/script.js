// 1
function phone (model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
}

const phone1 = new phone ("Iphone 17", "Black", 2500);
const phone2 = new phone ("Samsung S26", "Blue", 2000);

phone1.price = 2700;
delete phone2.color;

console.log(phone1);
console.log(phone2);

// 2
function animal (type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

const animal1 = new animal ("Lion", "King", "5");
const animal2 = new animal ("Bear", "Baloo", "9");

animal1.age += 1;
delete animal2.type;
animal2.breed = "Polar bear"

console.log(animal1);
console.log(animal2);

// 3
function gamer (nickname, level) {
  this.nickname = nickname;
  this.level = level;

  this.levelUp = function () {
    return this.level + 1;
  };
}

const gamer1 = new gamer ("ShadowKing", 5);

console.log("Köhnə səviyyə:", gamer1.level);
console.log("Yeni səviyyə:", gamer1.levelUp());

// 4
function product (title, price) {
  this.title = title;
  this.price = price;

  this.getDiscountedPrice = function () {
    return this.price - 5;
  };
}

const product1 = new product ("Qələm", 10);
const product2 = new product ("Dəftər", 15);

console.log(`${product1.title} - endirimli qiymət: ${product1.getDiscountedPrice()} AZN`);
console.log(`${product2.title} - endirimli qiymət: ${product2.getDiscountedPrice()} AZN`);

// 5
function computer (brand, year, ram) {
  this.brand = brand;
  this.year = year;
  this.ram = ram;

  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };

  this.checkPerformance = function () {
    return this.ram >= 8 ? "Güclü kompüterdir" : "Zəif kompüterdir";
  };
}

const computer1 = new computer ("Asus", 2018, 16);
const computer2 = new computer ("HP", 2015, 4);

console.log(`${computer1.brand} - Yaşı: ${computer1.getAge()}, ${computer1.checkPerformance()}`);
console.log(`${computer2.brand} - Yaşı: ${computer2.getAge()}, ${computer2.checkPerformance()}`);

// 6
function student (name, point, birthYear) {
  this.name = name;
  this.point = point;
  this.birthYear = birthYear;

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };

  this.hasPassed = function () {
    return this.point >= 50 ? "Keçdi" : "Kəsildi";
  };
}

const student1 = new student ("Aysel", 65, 2003);
const student2 = new student ("Kamran", 40, 2001);

console.log(`${student1.name} - Yaş: ${student1.getAge()}, Nəticə: ${student1.hasPassed()}`);
console.log(`${student2.name} - Yaş: ${student2.getAge()}, Nəticə: ${student2.hasPassed()}`);