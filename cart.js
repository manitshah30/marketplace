document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    const subtotalElement = document.querySelector('.cart-summary p:nth-child(1)');
    const totalElement = document.querySelector('.cart-summary p:nth-child(3)');

    function updateCartSummary() {
        let subtotal = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity input').value);
            const price = parseFloat(item.getAttribute('data-price'));
            const totalPriceElement = item.querySelector('.total-price');
            const totalPrice = quantity * price;
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
            subtotal += totalPrice;
        });

        const shipping = 5.00; // Fixed shipping cost
        const total = subtotal + shipping;

        subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    items.forEach(item => {
        // Quantity buttons
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const quantityInput = item.querySelector('.quantity input');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateCartSummary();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateCartSummary();
        });

        quantityInput.addEventListener('change', () => {
            if (quantityInput.value < 1) quantityInput.value = 1;
            updateCartSummary();
        });

        // Delete button
        const deleteBtn = item.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateCartSummary();
        });

        // Like button
        const likeBtn = item.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            const heartIcon = likeBtn.querySelector('.heart-icon');
            if (heartIcon.getAttribute('fill') === '#d3d3d3') {
                heartIcon.setAttribute('fill', '#ff6347'); // Liked (change to red color)
            } else {
                heartIcon.setAttribute('fill', '#d3d3d3'); // Unliked (change to grey color)
            }
        });
    });

    updateCartSummary();
});
