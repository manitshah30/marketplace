document.getElementById("login-id").onclick = function(event) {
    event.preventDefault();
    window.location.href = "login.html";
};

document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form element by its ID
    const signupForm = document.getElementById('signupForm');

    // Add an event listener to handle form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the values of the email and password fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send the form data to the backend (Node.js) using fetch
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);

            if (data.success) {
                alert('Signup successful!');
            } else {
                alert('Signup failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
