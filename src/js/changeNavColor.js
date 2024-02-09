// script.js oder eine andere JavaScript-Datei

// Funktion, um die Farbe der Navigationselemente zu ändern
function changeNavColor() {
  var boxTopNav = document.querySelector(".Box_top-nav");
  var LinkTopNav = document.querySelectorAll(".Link_top-nav");
  var imgElement = document.querySelector(".Logo_top-nav");
  var iconElement = document.querySelector(".top-nav__icon");

  var boxTopNavMobile = document.querySelector(".Menu_mobile-test");
  var imgElementMobile = document.querySelector(".Logo_top-nav_mobile");
  var iconElementMobile = document.querySelector(".Menu_toggle");

  // Höhe des Headers plus Padding
  var headerHeight = window.innerHeight * 0.90;

  // Überprüfe, ob der Scrollwert größer als die Höhe des Headers ist
  if (window.scrollY > headerHeight) {
    // Ändere die Farbe auf Schwarz
    LinkTopNav.forEach(function (item) {
      item.style.color = "black";
    });

    // Ändere die SVG-Datei auf Schwarz
    imgElement.src = "../images/Logo Black.svg";
    iconElement.src = "../images/Shop Icon Black.svg";
    imgElementMobile.src = "../images/Logo Black.svg";
    iconElementMobile.src = "../images/Burger Menu Black.svg";

  } else {
    // Ändere die Farbe auf Weiß
    LinkTopNav.forEach(function (item) {
      item.style.color = "white";
    });

    // Ändere die SVG-Datei auf Weiß
    imgElement.src = "../images/Logo.svg";
    iconElement.src = "../images/Shop Icon White.svg";
    imgElementMobile.src = "../images/Logo.svg";
    iconElementMobile.src = "../images/Burger Menu.svg";
  }
}

  // Rufe die Funktion changeNavColor auf, wenn das DOM vollständig geladen ist
  document.addEventListener("DOMContentLoaded", function () {
  // Event-Listener für das Scroll-Event hinzufügen
  document.addEventListener("scroll", changeNavColor);

  // Initialen Aufruf der Funktion, um die Farbe beim Laden der Seite zu setzen
  changeNavColor();
});
