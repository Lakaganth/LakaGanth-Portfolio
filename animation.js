const nav = document.querySelector(".nav");

document.querySelector(".ham").addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    TweenMax.fromTo(
      nav,
      0.01,
      { visibility: "hidden" },
      { visibility: "visible" }
    );
    nav.classList.add("active");
  }
});

document.querySelector(".close").addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    TweenMax.fromTo(
      nav,
      0.051,
      { visibility: "visible" },
      { visibility: "hidden" }
    );
    nav.classList.remove("active");
  }
});
