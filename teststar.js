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
