document.getElementById("navbar").innerHTML = `
  <div class="Navbar">
    <div class="logo">
      <a href="porto.html"><img src="logo.png" alt="Logo" height="90"></a>
    </div>
    <button class="burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
    <ul class="Menu" id="navMenu">
      <li><a href="Experience.html">Experience</a></li>
      <li><a href="Project.html">Project</a></li>
      <li><a href="Certificate.html">Certificate</a></li>
    </ul>
  </div>
`;

// Toggle behavior for mobile burger
const burger = document.getElementById("navBurger");
const navMenu = document.getElementById("navMenu");
if (burger && navMenu) {
  burger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  });
}
