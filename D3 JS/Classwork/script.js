let a = 15;
let b = 30;
if(a>10 && b>10){
    console.log("Hər iki ədəd böyükdür!");
}

let hava = prompt("Hava necedir");
let temp = +prompt("Temperatur nece derecedir");
if(hava=="guneslidir" && temp>20){
    console.log("Gəzintiyə cixmaq olar!");
}else{
    console.log("Gəzintiyə cixmaq olmaz!");
}

let number = 40;
if(number>0 && number%2==0){
    console.log("Bu müsbət cüt ədəddir!")
}else{
    console.log("Bu ya menfidir yada tek ədəddir!")
}

let yas = +prompt("Yasinizi daxil edin");
let bilet = prompt("Biletiniz var?")
if(yas>=18 && bilet =="var"){
    console.log("Kino zalina keçid icazəlidir")
}else{
    console.log("Kino zalina keçid icazəli deyil")
}

let parol = "n7c87q3ztn"
let tekrar = "n7c87q3ztn"
if(parol==tekrar && parol.length>5){
    console.log("Parol uğurla yaradildi")
}