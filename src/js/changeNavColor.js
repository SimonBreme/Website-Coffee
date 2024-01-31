// script.js oder eine andere JavaScript-Datei

// Funktion, um die Farbe der Navigationselemente zu ändern
function changeNavColor() {
    var boxTopNav = document.querySelector('.Box_top-nav');
    var LinkTopNav = document.querySelectorAll('.Link_top-nav');
    var LinkTopNavMobile = document.querySelectorAll('.Link_top-nav-mobile');
    var svgElement = document.querySelector('.Logo_top-nav');
  
    // Höhe des Headers plus Padding
    var headerHeight = document.querySelector('header').offsetHeight -50;
  
    // Überprüfe, ob der Scrollwert größer als die Höhe des Headers ist
    if (window.scrollY > headerHeight) {
      // Ändere die Farbe auf Schwarz
      LinkTopNav.forEach(function(item) {
        item.style.color = 'black';
      });
  
      LinkTopNavMobile.forEach(function(item) {
        item.style.color = 'black';
      });
    // Ändere die SVG-Datei auf Schwarz
    svgElement.innerHTML = '<use xlink:href="../images/Logo Black.svg"></use>';
    
    } else {
      // Ändere die Farbe auf Weiß
      LinkTopNav.forEach(function(item) {
        item.style.color = 'white';
      });
  
      LinkTopNavMobile.forEach(function(item) {
        item.style.color = 'white';
      });

      // Ändere die SVG-Datei auf Weiß
      svgElement.innerHTML = '<use xlink:href="../images/Logo.svg"></use>';
    }
  }
  
  // Event-Listener für das Scroll-Event hinzufügen
  document.addEventListener('scroll', changeNavColor);
  
  // Initialen Aufruf der Funktion, um die Farbe beim Laden der Seite zu setzen
  changeNavColor();
  