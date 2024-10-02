<?php

$servername = "localhost";
$email = "web";
$password = "web";
$dbname = "fendproject_db";

$conn = mysqli_connect($servername, $email, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  
  $sql = "SELECT * FROM users WHERE email = '$email'";
  
  $result = mysqli_query($conn, $sql);
  
  if (mysqli_num_rows($result) > 0) {
    
    $row = mysqli_fetch_assoc($result);
    
    if (password_verify($password, $row["password"])) {
      session_start();
      $_SESSION["loggedin"] = true;
      $_SESSION["email"] = $email;
      header("location: ../html/welcome.html");
    } else {
      echo "Invalid password";
    }
    
  } else {
    echo "Invalid email";
  }
}

mysqli_close($conn);

?>
