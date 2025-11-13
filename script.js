// Menu toggle untuk tampilan mobile
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  mainNav.querySelector("ul").classList.toggle("show");
});
