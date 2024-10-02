<?php
session_start();

if (isset($_SESSION['email'])) {
    $servername = "localhost";
    $username = "web"; // Changed $email to $username for database username
    $password = "web";
    $dbname = "fendproject_db";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve form data
    $firstName = $_POST['editFirstName'];
    $lastName = $_POST['editLastName'];
    $email = $_POST['editEmail'];
    $password = $_POST['editPassword'];
    $phone = $_POST['editPhone'];
    $street = $_POST['editStreet'];
    $city = $_POST['editCity'];
    $province = $_POST['editProvince'];
    $loggedInUserEmail = $_SESSION['email'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Prepare and execute SQL statement
    $sql = "UPDATE users SET firstName='$firstName', lastName='$lastName', email='$email', phone='$phone', password='$hashed_password', street='$street', city='$city', province='$province' WHERE email='$loggedInUserEmail'";

    if (mysqli_query($conn, $sql)) {
        echo "Profile updated successfully";
    } else {
        echo "Error updating profile: " . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo "User not logged in";
}
?>
