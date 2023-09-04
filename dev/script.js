const burger = document.querySelector(".burger")
const navbar = document.querySelector(".nav")

burger.addEventListener("click", () => {
  navbar.classList.toggle("open")
})
