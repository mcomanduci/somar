const flipCards = document.querySelectorAll(".more");

flipCards.forEach((button) => {
  button.addEventListener("click", () => {
    const innerElement = button.closest(".inner");
    innerElement &&
      innerElement.classList.toggle("[transform:rotateY(180deg)]");
  });
});
