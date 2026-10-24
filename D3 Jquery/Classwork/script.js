const hero = document.querySelector(".hero");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", event => {
    event.preventDefault();
    const img = card.querySelector("img");
    const bg = card.dataset.bg || img.src;
    hero.style.backgroundImage = `url("${bg}")`;
  });
});