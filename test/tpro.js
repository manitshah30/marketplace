
    document.addEventListener('DOMContentLoaded', function () {
        const addToCartButton = document.querySelector('.add-to-cart');
        const productContainer = document.querySelector('.product-container');

        addToCartButton.addEventListener('click', () => {
            const productName = productContainer.getAttribute('data-name');
            const productPrice = productContainer.getAttribute('data-price');
            const productQuantity = document.getElementById('quantity-input').value;

           
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push({ name: productName, price: productPrice, quantity: productQuantity });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert(`${productQuantity} ${productName}(s) have been added to your cart!`);
        });
    });




 



