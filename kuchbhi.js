const products = [
    {
        id: 1,
        image: 'assets/images/fruitMain1.jpg',
        title: 'Organic Apple',
        price: 120,
    },
    {
        id: 2,
        image: 'assets/images/fruitMain2.jpg',
        title: 'Organic Banana',
        price: 60,
    },
    {
        id: 3,
        image: 'assets/images/fruitMain3.jpg',
        title: 'Organic Carrot',
        price: 80,
    },
    // Add more organic products here
];

// Initially display all products
displayItem(products);

// Event listener for search functionality
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();

    // Filter the products based on search input
    const filteredData = products.filter((item) => 
        item.title.toLowerCase().includes(searchData)
    );

    // Display filtered products
    displayItem(filteredData);
});

// Function to display items
function displayItem(items) {
    const rootElement = document.getElementById('root');

    if (items.length === 0) {
        rootElement.innerHTML = '<p>No products found</p>';
        return;
    }

    rootElement.innerHTML = items.map((item) => {
        const { image, title, price } = item;
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} alt='${title}' />
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$${price}.00</h2>
                    <button>Add to cart</button>
                </div>
            </div>`;
    }).join('');
}
