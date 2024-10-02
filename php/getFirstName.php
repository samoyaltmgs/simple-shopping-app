<?php
session_start();

if (isset($_SESSION['email'])) {
    $servername = "localhost";
    $email = "web";
    $password = "web";
    $dbname = "fendproject_db";

    $conn = mysqli_connect($servername, $email, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $loggedInUserEmail = $_SESSION['email'];
    $sql = "SELECT firstName FROM users WHERE email = '$loggedInUserEmail'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $firstName = $row["firstName"];
        echo $firstName;
    } else {
        echo "User";
    }

    mysqli_close($conn);
} else {
    echo "Guest";
}
?>
