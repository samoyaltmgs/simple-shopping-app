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
  
  $firstName = mysqli_real_escape_string($conn, $_POST["firstName"]);
  $lastName = mysqli_real_escape_string($conn, $_POST["lastName"]);
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $password = mysqli_real_escape_string($conn, $_POST["password"]);
  $phone = mysqli_real_escape_string($conn, $_POST["phone"]);
  $dateOfBirth = mysqli_real_escape_string($conn, $_POST["dateOfBirth"]);
  $street = mysqli_real_escape_string($conn, $_POST["street"]);
  $city = mysqli_real_escape_string($conn, $_POST["city"]);
  $province = mysqli_real_escape_string($conn, $_POST["province"]);

  $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  
  $sql = "INSERT INTO users (firstName, lastName, email, password, phone, dateOfBirth, street, city, province)
          VALUES ('$firstName', '$lastName', '$email', '$hashed_password', '$phone', '$dateOfBirth', '$street', '$city', '$province')";
  
  if (mysqli_query($conn, $sql)) {
    echo "Data added to database successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}

mysqli_close($conn);

?>
