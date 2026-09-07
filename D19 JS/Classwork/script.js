// 1
const hero = {
  name: "Horumcek Adam",
  health: 50
};

hero.health = 100;
hero.power = "Tor atmaq";

console.log(hero);

// 2
const car = {
  brand: "Ford",
  year: 2022,
  damage: "Qapisi ciziqdir"
};

delete car.damage;

console.log(car);

// 3
const student = {
  name: "Əli",
  age: 12,
  subject: "Proqramlasdirma"
};

const studentKeys = Object.keys(student);
console.log(studentKeys);

const studentValues = Object.values(student);
console.log(studentValues);