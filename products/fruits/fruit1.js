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
// ingredients
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');

            const isOpen = content.style.display === 'block';

            content.style.display = isOpen ? 'none' : 'block';
            icon.textContent = isOpen ? '+' : '-';
        });
    });
});
