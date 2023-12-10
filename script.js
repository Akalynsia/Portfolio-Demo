function toggleMenu() {
  const burgerIcon = document.querySelector(".burger-icon");
  const navMenu = document.querySelector(".burger-menu-container nav");

  burgerIcon.classList.toggle("active");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}
