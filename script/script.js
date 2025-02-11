import keenSliderInit from "./modules/keen-slider-init.js";

keenSliderInit();

const flipCards = document.querySelectorAll(".more");

flipCards.forEach((button) => {
  button.addEventListener("click", () => {
    const innerElement = button.closest(".service-card-inner");
    innerElement &&
      innerElement.classList.toggle("[transform:rotateY(180deg)]");
  });
});

flipCards.forEach((button) => {
  button.addEventListener("click", () => {
    const innerElement = button.closest(".inner");
    innerElement &&
      innerElement.classList.toggle("[transform:rotateY(180deg)]");
  });
});
