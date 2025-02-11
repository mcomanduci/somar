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

document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu mobile
  const menuButton = document.querySelector('button[aria-label="Menu"]');
  const mobileMenu = document.querySelector("#mobile-menu");

  menuButton?.addEventListener("click", () => {
    const expanded =
      menuButton.getAttribute("aria-expanded") === "true" || false;
    menuButton.setAttribute("aria-expanded", !expanded);
    mobileMenu.classList.toggle("hidden");
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 0) {
        header.classList.add("shadow-md", "bg-white/50", "backdrop-blur-sm");
      } else {
        header.classList.remove("shadow-md", "bg-white/50", "backdrop-blur-sm");
      }
    },
    { passive: true }
  );
});
