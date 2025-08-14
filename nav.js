  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navID");
    const aboutSection = document.getElementById("about");

    const triggerPoint = aboutSection.offsetTop;

    if (window.scrollY >= triggerPoint - navbar.offsetHeight) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });




  