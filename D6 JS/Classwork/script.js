let ay = +prompt("Ayın rəqəmini daxil edin:");
switch (ay) {
  case 1:
    console.log("Yanvar");
    break;
  case 2:
    console.log("Fevral");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Aprel");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("İyun");
    break;
  case 7:
    console.log("İyul");
    break;
  case 8:
    console.log("Avqust");
    break;
  case 9:
    console.log("Sentyabr");
    break;
  case 10:
    console.log("Oktyabr");
    break;
  case 11:
    console.log("Noyabr");
    break;
  case 12:
    console.log("Dekabr");
    break;
  default:
    if (ay > 12) {
      console.log(ay + " ədədi ilə ay yoxdur");
    }
}

let reng = +prompt("Svetofor rənginin nömrəsini daxil edin:");
switch (reng) {
  case 1:
    console.log("Qırmızı");
    break;
  case 2:
    console.log("Sarı");
    break;
  case 3:
    console.log("Yaşıl");
    break;
  default:
    if (reng > 3) {
      console.log(reng + " ədədi ilə svetofor rəngi yoxdur");
    }
}

let planet = +prompt("Planetin sıra nömrəsini daxil edin:");
switch (planet) {
  case 1:
    console.log("Merkuri");
    break;
  case 2:
    console.log("Venera");
    break;
  case 3:
    console.log("Yer");
    break;
  case 4:
    console.log("Mars");
    break;
  case 5:
    console.log("Yupiter");
    break;
  case 6:
    console.log("Saturn");
    break;
  case 7:
    console.log("Uran");
    break;
  case 8:
    console.log("Neptun");
    break;
  default:
    if (planet > 8) {
      console.log(planet + " ədədi ilə planet yoxdur");
    }
}