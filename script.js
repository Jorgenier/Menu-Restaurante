let cart = []; // Aquí se almacenan los pedidos

function addToCart(item, price) {
    cart.push({ item, price }); // Añade un producto al carrito
    alert(item + " ha sido añadido al pedido.");
}

function showCart() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    let cartDetails = "Tu pedido actual:\n";
    let total = 0;
    cart.forEach(product => {
        cartDetails += product.item + " - " + product.price + "€\n";
        total += product.price;
    });
    cartDetails += "\nTotal: " + total + "€";
    alert(cartDetails);
}