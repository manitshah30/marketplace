Organic Products E-commerce Website

Project Overview

This project is a collaborative effort by three developers to create a fully functional e-commerce website for organic products. The website is designed to provide users with an intuitive shopping experience for organic goods across various categories. It includes essential features like user authentication, a product catalog, cart management, and a payment gateway.

Features

1. Navbar

The navbar includes buttons for Sign Up, Login, and Cart.

A dropdown for product categories allows easy navigation through the site.


2. Product Categories

The website showcases five main product categories:

Fruits

Vegetables

Personal Care Products

Beverages

Bakery Products


Each category has its own page that displays four featured products.

Category pages are accessible via a category display section on the homepage.


3. Footer

The footer contains links to informational pages such as:

About Us

Terms and Conditions

Contact Us, etc.



4. Cart

Users can add or remove products from the cart.

The cart page automatically calculates the total amount based on the selected products.


5. Payment Gateway

A secure payment gateway allows users to finalize their purchase.


Backend and Database

The backend is developed using PHP for handling user Sign Up and Login functionalities.

Supabase is used as the database solution, leveraging PostgreSQL.

The database includes a table with the following columns:

id: Unique identifier for each user.

email: User's email address.

password: Hashed user password.

token (uuid): A UUID token for user session management.



How to Run the Project

1. Clone the repository.


2. Set up the database using Supabase and configure the connection with PostgreSQL.


3. Deploy the PHP backend to handle user authentication and session management.


4. Use any modern web browser to access the website interface and explore the various features.



Future Enhancements

Add more product categories and features such as order history.

Enhance the UI for better user experience.

Implement advanced filtering and search functionalities.


