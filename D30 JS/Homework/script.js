// 1
let season = prompt("Enter the current season of the year:");
sessionStorage.setItem("season", season);
console.log("Current season:", sessionStorage.getItem("season"));

// 2
let books = ["Les Misérables", "The Little Prince", "1984"];
localStorage.setItem("books", JSON.stringify(books));
let savedBooks = JSON.parse(localStorage.getItem("books"));
for (let i = 0; i < savedBooks.length; i++) {
  console.log((i + 1) + ". " + savedBooks[i]);
}

// 3
let user = localStorage.getItem("user");
if (user === null) {
  let name = prompt("Enter your name:");
  if (name) {
    localStorage.setItem("user", name);
  }
} else {
  console.log("Welcome back, " + user + "!");
}