// ### 1. "Ən sevdiyim oyun"
let FavoriteGame = "Minecraft";
console.log("My Favorite Game Is " +FavoriteGame);

// ### 2. Dəyişməyən Gizli Kod
// Muellim tapsiriqda erroru muelliminize gosterin deyirdi men commente alaraq yazdim ora
const SecretCode = "1234";
// SecretCode = "5555"; script.js:5 Uncaught TypeError: Assignment to constant variable at script.js:5:12

// ### 3. Avtomobil Sərgisi
var Car = "BMW";
document.write("Sərgidə olan birinci maşın " +Car+ "<br>" );

var Car = "Mercedes";
document.write("Sərgidə olan birinci maşın " +Car);

// ### 4. Kosmonavtın Salamı
let Planet = "mars";
let SpaceShip = "Yildirim";
alert(SpaceShip+ " gemisi " +Planet+ " planetine enis etdi");

// ### 5. Dəyişənlərin Yarışı
// let point = "10"
// let point = "20" Uncaught SyntaxError: Identifier 'point' has already been declared (at script.js:23:5)

var point = "10";
var point = "20";
console.log(point);
// let eyni deyisen adindan 1 den cox istifadeye icaze vermir ve neticede kod error verir 
// var sehve yol verir cunku eyni deyisen adindan 1 den cox istifade etmek olmaz