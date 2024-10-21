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

// Prepare and execute the query
$query = "SELECT token FROM users WHERE email = $1 AND password = $2";
$result = pg_query_params($conn, $query, array($email, $password));

if ($result) {

  $rows = pg_num_rows($result);
  $res = pg_fetch_result($result, "token");

  if ($rows === 0) {
    echo "Login Failed";
  } else {
    header("Location: index.html");
    exit();
  }

} else {
  echo "Login failed: " . pg_last_error();
}

// Close connection
pg_close($conn);
?>
