const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const backToTopButton = document.getElementById("back-to-top");

  // Afficher/Masquer la flèche en fonction du défilement
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Montre la flèche après 300px de défilement
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Retourner en haut de la page
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Défilement fluide
    });
  });