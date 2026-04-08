let cart = {};

function addToCart(product) {
    if (cart[product]) {
        cart[product]++;
    } else {
        cart[product] = 1;
    }

    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById('cart');
    cartTable.innerHTML = '';

    for (let product in cart) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product;

        const countCell = document.createElement('td');
        countCell.textContent = cart[product];

        row.appendChild(nameCell);
        row.appendChild(countCell);

        cartTable.appendChild(row);
    }
}