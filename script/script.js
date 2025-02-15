import keenSliderInit from "./modules/keen-slider-init.js";

document.addEventListener("DOMContentLoaded", function () {
  keenSliderInit();

  const flipCards = document.querySelectorAll(".more");

  flipCards.forEach((button) => {
    button.addEventListener("click", () => {
      const innerElement = button.closest(".service-card-inner");
      innerElement &&
        innerElement.classList.toggle("[transform:rotateY(180deg)]");
    });
  });
});
