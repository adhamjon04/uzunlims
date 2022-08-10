const card = document.querySelector(".elewen");
const cardone = document.querySelector(".onefirst");
const cardtwo = document.querySelector(".two");
const cardthree = document.querySelector(".three");
const cardfour = document.querySelector(".four");
const cardfifte = document.querySelector(".fifte");
const cardsex = document.querySelector(".sex");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});
cardone.addEventListener("click", function (e) {
    cardone.classList.toggle('is-flipped');
  });
  cardtwo.addEventListener("click", function (e) {
    cardtwo.classList.toggle('is-flipped');
  });
  cardthree.addEventListener("click", function (e) {
    cardthree.classList.toggle('is-flipped');
  });
  cardfour.addEventListener("click", function (e) {
    cardfour.classList.toggle('is-flipped');
  });
  cardfifte.addEventListener("click", function (e) {
    cardfifte.classList.toggle('is-flipped');
  });
  cardsex.addEventListener("click", function (e) {
    cardsex.classList.toggle('is-flipped');
  });