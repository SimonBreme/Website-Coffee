// Array für den Warenkorb
let cart = [];

// Produkte mit Bildern hinzufügen
function addToCart(name, price, imageSrc) {
  let product = { name: name, price: price, imageSrc: imageSrc };
  cart.push(product);
  updateCart();
}

// Produkte mit Bildern im Warenkorb anzeigen und Gesamtpreis berechnen
function updateCart() {
  let cartElement = document.getElementById("cart");
  let totalItemsElement = document.getElementById("total-items");
  let subtotalElement = document.getElementById("subtotal");
  let totalElement = document.getElementById("total");
  
  // Zähle die Anzahl der Produkte im Warenkorb
  let totalItems = cart.length;

  // Setze die Anzahl der Produkte im Warenkorb in das entsprechende HTML-Element ein
  totalItemsElement.textContent = totalItems;

  // Summiere die Preise aller Produkte im Warenkorb
  let subtotalPrice = 0;
  cart.forEach(product => {
    subtotalPrice += parseFloat(product.price.replace("€", "").replace(",", ".")); // Konvertiere den Preis in einen Float-Wert
  });

  // Addiere die Versandkosten zum Zwischensumme-Preis
  let totalShippingPrice = 3.9;
  let totalPrice = subtotalPrice + totalShippingPrice;

  // Setze den Zwischensummen-Preis und den Gesamtpreis in die entsprechenden HTML-Elemente ein
  subtotalElement.textContent = subtotalPrice.toFixed(2) + " €"; // Formatieren Sie den Zwischensummen-Preis auf zwei Dezimalstellen
  totalElement.textContent = totalPrice.toFixed(2) + " €"; // Formatieren Sie den Gesamtpreis auf zwei Dezimalstellen

  cartElement.innerHTML = "";

  cart.forEach((product, index) => {
    let productElement = document.createElement("div");
    productElement.classList.add("product-item");

    let productImage = document.createElement("img");
    productImage.src = product.imageSrc;
    productImage.alt = product.name;
    productElement.appendChild(productImage);

    let productInfo = document.createElement("div");
    productInfo.textContent = `${product.name} - ${product.price}`;
    productElement.appendChild(productInfo);

    let removeButton = document.createElement("img");
    removeButton.src = "../images/Burger Menu close Black.svg"; // Pfad zum SVG-Bild
    removeButton.alt = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => removeFromCart(index));
    productElement.appendChild(removeButton);

    cartElement.appendChild(productElement);
  });
}

// Produkt aus dem Warenkorb entfernen
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
