// 1
function fruit (name,color,price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const alma = new fruit ("Alma", "Qirmizi", 2);
const banan = new fruit ("Banan", "Sari", 3);

alma.price = 3;

delete banan.color;

console.log(alma);
console.log(banan);

// 2
function player (name,score) {
    this.name = name;
    this.score = score;

    this.addScore = function () {
        return this.score + 10;
    }
}

const player1 = new player("Mark", 50);
const newScore = player1.addScore();
console.log(player1.name+ "'s new score: " +newScore)

// 3
function Car(brand, year) {
  this.brand = brand;
  this.year = year;

  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };

  this.isNew = function () {
    return this.getAge() < 3 ? "Təzə masindir" : "Köhnə masindir";
  };
}

const car1 = new Car("Toyota", 2024);
const car2 = new Car("Lada", 2015);
console.log(car1.brand + " - Yaş: " + car1.getAge() + " - " + car1.isNew());
console.log(car2.brand + " - Yaş: " + car2.getAge() + " - " + car2.isNew());