import KeenSlider from "./keen-slider.js";

export default function keenSliderInit() {
  const keenSliderActive = document.getElementById("keen-slider-active");
  const keenSliderCount = document.getElementById("keen-slider-count");

  const keenSlider = new KeenSlider(
    "#keen-slider",
    {
      loop: true,
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "center",
            perView: 1.5,
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "center",
            perView: 1.75,
            spacing: 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "center",
            perView: 3,
            spacing: 16,
          },
        },
      },
      created(slider) {
        // First, add opacity to all slides
        slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
        // Then remove it from the active slide
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");

        keenSliderActive.innerText = slider.track.details.rel + 1;
        keenSliderCount.innerText = slider.slides.length;
      },
      slideChanged(slider) {
        // Add opacity to all slides
        slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
        // Remove opacity from the active slide
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");

        keenSliderActive.innerText = slider.track.details.rel + 1;
      },
    },
    []
  );

  const keenSliderPrevious = document.getElementById("keen-slider-previous");
  const keenSliderNext = document.getElementById("keen-slider-next");

  keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
  keenSliderNext.addEventListener("click", () => keenSlider.next());
}
