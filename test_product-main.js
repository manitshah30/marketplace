document.getElementById('increase-btn').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);
    quantity += 1;
    quantityInput.value = quantity;
});

document.getElementById('decrease-btn').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity -= 1;
        quantityInput.value = quantity;
    }
});
