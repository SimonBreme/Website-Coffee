// JavaScript-Code, um das Scrollen im Overlay zu aktivieren
const cartNavItem = document.getElementById('Cart'); // Achten Sie darauf, dass die ID "Cart" großgeschrieben ist
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close-button');

// Funktion zum Aktivieren des Scrollens im Overlay
function enableScrolling() {
  overlay.classList.add('scrollable');
}

// Funktion zum Deaktivieren des Scrollens im Overlay
function disableScrolling() {
  overlay.classList.remove('scrollable');
}

// Event-Listener für das Öffnen des Overlays und Aktivieren des Scrollens
cartNavItem.addEventListener('click', function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links
  overlay.style.display = 'block';
  enableScrolling();
});

// Event-Listener für das Schließen des Overlays und Deaktivieren des Scrollens
closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
  disableScrolling();
});
