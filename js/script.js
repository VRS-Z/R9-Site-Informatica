const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav_main");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
