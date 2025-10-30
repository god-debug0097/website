// Optional: scroll effects or header background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 60) {
      header.style.backgroundColor = "#111";
    } else {
      header.style.backgroundColor = "#1e1e2f";
    }
  });

  
  const navLinks = document.querySelectorAll(".nav a");
const path = window.location.pathname;

navLinks.forEach(link => {
  if (link.href.includes(path.split("/").pop())) {
    link.classList.add("active");
  }
});
