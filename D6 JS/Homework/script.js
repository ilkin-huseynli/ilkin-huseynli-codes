// 1
let hero = prompt("Enter your favorite superhero's name (spiderman, batman, superman):");
switch (hero) {
  case "spiderman":
    console.log("Can shoot webs and climb walls!");
    break;
  case "batman":
    console.log("A wealthy vigilante who protects Gotham City at night!");
    break;
  case "superman":
    console.log("Can fly, is super strong, and has laser eyes!");
    break;
  default:
    console.log("This superhero is not in our list, but we think they're powerful too!");
}

// 2
let weather = prompt("How is the weather outside? (sunny, rainy, snowy):");
switch (weather) {
  case "sunny":
    console.log("Wear light clothes and put on sunglasses!");
    break;
  case "rainy":
    console.log("Don't forget a raincoat and an umbrella!");
    break;
  case "snowy":
    console.log("Wear a warm coat, scarf, and gloves!");
    break;
  default:
    console.log("Warning: This weather condition is unknown to us!");
}

//3
let planet = prompt("Which planet do you want to fly to? (mars, jupiter, earth):");
switch (planet) {
  case "mars":
    console.log("Get ready for dust storms on the Red Planet!");
    break;
  case "jupiter":
    console.log("Welcome to the largest planet in our solar system!");
    break;
  case "earth":
    console.log("Home sweet home! There's life here!");
    break;
  default:
    console.log("Unfortunately, we've run out of fuel, we can't fly to this planet!");
}

//4
let profession = prompt("What do you want to be when you grow up? (doctor, police officer, programmer, chef):");
switch (profession) {
  case "doctor":
    console.log("Great choice! You will save people's lives!");
    break;
  case "police officer":
    console.log("You're brave! You will protect society!");
    break;
  case "programmer":
    console.log("Awesome! You will create the technologies of the future!");
    break;
  case "chef":
    console.log("Delicious! You will delight the world with your cooking!");
    break;
  default:
    console.log("Whatever profession you choose, we wish you success!");
}

//5
let fruit = prompt("Enter your favorite fruit (apple, banana, strawberry, lemon):");
switch (fruit) {
  case "apple":
    console.log("Color: red or green. Taste: sweet and crunchy!");
    break;
  case "banana":
    console.log("Color: yellow. Taste: sweet and soft!");
    break;
  case "strawberry":
    console.log("Color: red. Taste: sweet and tangy!");
    break;
  case "lemon":
    console.log("Color: yellow. Taste: sour!");
    break;
  default:
    console.log("This fruit is not in our basket.");
}

//6
let animal = prompt("Which animal do you want to feed? (cat, rabbit, panda):");
switch (animal) {
  case "cat":
    console.log("Cats love to eat fish and drink milk!");
    break;
  case "rabbit":
    console.log("Rabbits eat carrots and fresh vegetables!");
    break;
  case "panda":
    console.log("Pandas feed on bamboo!");
    break;
  default:
    console.log("Sorry, we don't have information about this animal.");
}

//7
let cartoon = prompt("Which cartoon character do you want to meet? (shrek, spongebob, mickey mouse):");
switch (cartoon) {
  case "shrek":
    console.log("\"This is my swamp!\" - Shrek");
    break;
  case "spongebob":
    console.log("\"Who lives in a pineapple under the sea?\" - SpongeBob!");
    break;
  case "mickey mouse":
    console.log("\"Oh boy!\" - Mickey Mouse says his famous catchphrase!");
    break;
  default:
    console.log("This character is currently on vacation, come back another time!");
}

//8
let transport = prompt("What do you want to travel by? (ship, plane, train, boat):");
switch (transport) {
  case "ship":
  case "boat":
    console.log("Travels on: the sea");
    break;
  case "plane":
    console.log("Travels on: the sky");
    break;
  case "train":
    console.log("Travels on: the railway");
    break;
  default:
    console.log("This type of transport is not available, looks like you'll be walking!");
}