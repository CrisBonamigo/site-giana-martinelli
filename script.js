AOS.init({
  duration: 800,
  once: true,
  offset: 80
});

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll("#navbarMenu .nav-link");
const menu = document.getElementById("navbarMenu");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const collapse = bootstrap.Collapse.getInstance(menu);
    if (collapse) collapse.hide();
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

const setActiveLink = () => {
  const y = window.scrollY + 140;
  let current = "inicio";

  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();
