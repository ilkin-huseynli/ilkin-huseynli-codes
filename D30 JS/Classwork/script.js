let username = prompt("Type your username");
localStorage.setItem("username", username);
let saved = localStorage.getItem("username");
console.log(saved);