
        const products = [
            // fruits
            { name: 'Apple', price: 2.00, description: 'This is Fruit 1', page: '/products/fruits/fruit1.html' },
            { name: 'Mango', price: 2.00, description: 'This is Fruit 1', page: '/products/fruits/fruit2.html' },
            { name: 'Blueberry', price: 2.00, description: 'This is Fruit 1', page: '/products/fruits/fruit3.html' },
            { name: 'Avocado', price: 2.00, description: 'This is Fruit 1', page: '/products/fruits/fruit4.html' },
            // vegetable
            { name: 'Cabbage', price: 2.00, description: 'This is Fruit 1', page: '/products/vegetables/vegetable1.html' },
            { name: 'Potato', price: 2.00, description: 'This is Fruit 1', page: '/products/vegetables/vegetable2.html' },
            { name: 'Broccoli', price: 2.00, description: 'This is Fruit 1', page: '/products/vegetables/vegetable3.html' },
            { name: 'Carrot', price: 2.00, description: 'This is Fruit 1', page: '/products/vegetables/vegetable4.html' },
            // personal care
            { name: 'Coconut Body Oil', price: 2.00, description: 'This is Fruit 1', page: '/products/personal_care/personal_care1.html' },
            { name: 'Bamboo Fibers Shampoo', price: 2.00, description: 'This is Fruit 1', page: '/products/personal_care/personal_care2.html' },
            { name: 'Restorative Hair Mask', price: 2.00, description: 'This is Fruit 1', page: '/products/personal_care/personal_care3.html' },
            { name: 'Ultimate Haircare Trio: Oil, Shampoo & Conditioner Pack', price: 2.00, description: 'This is Fruit 1', page: '/products/personal_care/personal_care4.html' },
            // beverages
            { name: 'Cashew Vanilla Cinnamon Agave', price: 2.00, description: 'This is Fruit 1', page: '/products/beverages/beverage1.html' },
            { name: 'Pineapple apple mint', price: 2.00, description: 'This is Fruit 1', page: '/products/beverages/beverage2.html' },
            { name: 'Beet Apple Carrot Lemon Ginger', price: 2.00, description: 'This is Fruit 1', page: '/products/beverages/beverage3.html' },
            { name: 'Coffee Cashew Cinnamon Vanilla', price: 2.00, description: 'This is Fruit 1', page: '/products/beverages/beverage4.html' },
            // bakery
            { name: 'Dark Delight Cookies', price: 2.00, description: 'This is Fruit 1', page: '/products/bakery/bakery1.html' },
            { name: 'Croissant', price: 2.00, description: 'This is Fruit 1', page: '/products/bakery/bakery2.html' },
            { name: 'Sour Dough Bread', price: 2.00, description: 'This is Fruit 1', page: '/products/bakery/bakery3.html' },
            { name: 'Multigrain Bread', price: 2.00, description: 'This is Fruit 1', page: '/products/bakery/bakery4.html' },
        ];

        document.addEventListener('DOMContentLoaded', function () {
            const searchForm = document.getElementById('searchForm');
            const searchInput = document.getElementById('searchInput');

            searchForm.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent default form submission

                const searchTerm = searchInput.value.trim().toLowerCase();

                // Search for the product and redirect to the product page
                for (let i = 0; i < products.length; i++) {
                    if (products[i].name.toLowerCase().includes(searchTerm) || products[i].description.toLowerCase().includes(searchTerm)) {
                        window.location.href = products[i].page; // Redirect to the product page
                        return;
                    }
                }

                // If no product is found, display a message
                alert('No product found!');
            });
        });
