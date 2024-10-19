<?php
// Database connection details

$host = "aws-0-ap-south-1.pooler.supabase.com";
$port = "6543";
$dbname = "postgres";
$user = "postgres.vatopuylgsintculwedv";
$password = "ni9cNlE3MvwQc7N3";

// Create connection string
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

// Connect to PostgreSQL
$conn = pg_connect($conn_string);

if (!$conn) {
  die("Connection failed: " . pg_last_error());
}

// Get the POST data from form submission
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare and execute the query
$query = "INSERT INTO users (email, password) 
          VALUES ($1, $2)";
$result = pg_query_params($conn, $query, array($email, $hashed_password));

if ($result) {
  echo "Registration successful!";
} else {
  echo "Registration failed: " . pg_last_error();
}

// Close connection
pg_close($conn);
?>
