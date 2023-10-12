/*Toggle du menu hamburger*/
const links = document.querySelectorAll('nav_not_connected li');

menu_hamburger.addEventListener("click", () => {
  nav_not_connected.classList.toggle("active");
});

/*Quand clique sur un bouton, retour avant toggle*/
links.forEach((link) => {
  link.addEventListener('click', () => {
    nav_not_connected.classList.remove("active");
  });
});
/*Fin du Toggle du menu hamburger*/
