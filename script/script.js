// const flipCard = document.querySelector(".more");
// const flipCard2 = document.querySelector(".morez");
// const innerCard = document.querySelector("article.bg-white");
// const teste = document.querySelector(".teste")

// function flip() {
//   innerCard.classList.toggle("change");
//   teste.classList.toggle("absolute")
// }
// flipCard.addEventListener("click", flip);
// flipCard2.addEventListener("click", flip);

document.querySelectorAll('.more').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.inner').classList.toggle('[transform:rotateY(180deg)]');
  });
});