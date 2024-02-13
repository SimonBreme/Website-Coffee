let cart = [];

function addToCart(name, price) {
    let product = { name: name, price: price };
    cart.push(product);
    updateCart();
}

function updateCart() {
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach(product => {
        let productElement = document.createElement('div');
        productElement.textContent = `${product.name} - ${product.price}`;
        cartElement.appendChild(productElement);
    });
}