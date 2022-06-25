// Start Navbar ###############################

let navbarLinks = document.querySelectorAll(
  ".navbar-container .navbar-links a"
);
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.forEach((l) => {
      l.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let logo = document.querySelector("nav .logo .nav-logo");
logo.addEventListener("click", () => {
  navbarLinks.forEach((l) => {
    l.classList.remove("active");
  });
  navbarLinks[0].classList.add("active");
});

let navbar = document.querySelector("nav");
window.onscroll = function () {
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "white";
    navbar.style.position = "fixed";
  } else if (window.scrollY <= 10) {
    navbar.style.position = "sticky";
    navbar.style.backgroundColor = "transparent";
  }
};

let menuButton = document.getElementById("menu-button");
let collapseMenu = document.querySelector(".links-cover ul");
menuButton.addEventListener("click", () => {
  if (collapseMenu.classList.contains("collapse-menu")) {
    collapseMenu.classList.remove("collapse-menu");
    collapseMenu.classList.add("show");
  } else {
    collapseMenu.classList.add("collapse-menu");
    collapseMenu.classList.remove("show");
  }
});

let collapseLinks = document.querySelectorAll(".links-cover .collapse-links");
collapseLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (collapseMenu.classList.contains("collapse-menu")) {
      collapseMenu.classList.remove("collapse-menu");
      collapseMenu.classList.add("show");
    } else {
      collapseMenu.classList.add("collapse-menu");
      collapseMenu.classList.remove("show");
    }
  });
});

// End Navbar ###############################

// Start Happy Clients ######################

let allSlides = document.querySelectorAll(
  ".clients-container .slide-container"
);
let index = 0;
function next() {
  allSlides[index].classList.remove("active");
  index = (index + 1) % allSlides.length;
  allSlides[index].classList.add("active");
}
window.onload = setInterval(next, 4000);
// End Happy Clients ######################
