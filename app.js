function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const toggleBtn = document.querySelector(".toggle-btn");

  navMenu.classList.toggle("active");

  // Change icon based on menu state
  const icon = toggleBtn.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const navMenu = document.querySelector(".nav-menu");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (!event.target.closest(".nav-container")) {
    navMenu.classList.remove("active");
    const icon = toggleBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
