// 1
let hero = {
  name: "Super Məmməd",
  power: "Uçmaq",
  level: 5,
  getHeroInfo: function() {
    return "Qəhrəman: " + hero.name + ", Gücü: " + hero.power + ", Səviyyə: " + hero.level;
  }
};
console.log(hero.getHeroInfo());


// 2
let pet = {
  petName: "Məstan",
  type: "Pişik",
  age: 3,
  getPetDetails: function() {
    return "Ev heyvanı: " + pet.type + " " + pet.petName + ", Yaşı: " + pet.age;
  }
};
console.log(pet.getPetDetails());


// 3
let gameScore = {
  level1Score: 40,
  level2Score: 60,
  calcTotalScore: function() {
    return gameScore.level1Score + gameScore.level2Score;
  }
};
console.log(gameScore.calcTotalScore());


// 4
let pizza = {
  slicePrice: 3,
  sliceCount: 6,
  calcPizzaPrice: function() {
    return pizza.slicePrice * pizza.sliceCount;
  }
};
console.log(pizza.calcPizzaPrice());


// 5
let cinemaTicket = {
  movieName: "Avatar 2",
  ticketPrice: 10,
  isWeekend: true,
  calcTicketPrice: function() {
    let finalPrice = cinemaTicket.ticketPrice;
    if (cinemaTicket.isWeekend === true) {
      finalPrice = finalPrice + 2;
    }
    return cinemaTicket.movieName + " filmi üçün bilet qiyməti: " + finalPrice + " AZN";
  }
};
console.log(cinemaTicket.calcTicketPrice());


// 6
let robot = {
  robotName: "Robo-X",
  battery: 15,
  checkBattery: function() {
    if (robot.battery < 20) {
      return robot.robotName + ": Xəbərdarlıq! Zaryadka azdır, zaryadkaya qoşun!";
    } else {
      return robot.robotName + ": Zaryadka kifayətdir, işə davam etmək olar!";
    }
  }
};
console.log(robot.checkBattery());