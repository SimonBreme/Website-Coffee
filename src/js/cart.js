
const cartNavItem = document.getElementById('Cart'); // Achten Sie darauf, dass die ID "Cart" großgeschrieben ist
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close-button');

cartNavItem.addEventListener('click', function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links
  overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});
