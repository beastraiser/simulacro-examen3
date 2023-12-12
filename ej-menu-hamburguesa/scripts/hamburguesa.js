const hamb = document.querySelector(".hamburger");
const navL = document.querySelector(".nav-links");

hamb.addEventListener("click", () => {
  navL.classList.toggle("active");
});
