const nav = document.getElementsByTagName("nav")[0];
const overlay = document.getElementsByClassName("overlay")[0];

function openMenu() {
  nav.style.display = "fixed";
  overlay.style.display = "fixed";
}

function closeMenu() {
  nav.style.display = "none";
  overlay.style.display = "none";
}
