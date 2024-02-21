<?php

include 'connPerfecto.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $result = mysqli_query($conn, "SELECT MAX(CAST(AdminID AS UNSIGNED)) AS max_id FROM admintable");
    $row = mysqli_fetch_assoc($result);
    $maxId = $row['max_id'];
    
    $newId = $maxId ? $maxId + 1 : 1;
    
    
    $adminID = str_pad($newId, 4, '0', STR_PAD_LEFT);
    
    $firstName = mysqli_real_escape_string($conn, $_POST['FirstName']);
    $lastName  = mysqli_real_escape_string($conn, $_POST['LastName']);
    $username  = mysqli_real_escape_string($conn, $_POST['Username']);
    $password  = mysqli_real_escape_string($conn, $_POST['Password']);

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO admintable (AdminID, FirstName, LastName, Username, Password) VALUES (?, ?, ?, ?, ?)";

    $stmt = mysqli_prepare($conn, $sql);

    mysqli_stmt_bind_param($stmt, 'sssss', $adminID, $firstName, $lastName, $username, $hashedPassword);

    if (mysqli_stmt_execute($stmt)) {
        header('Location: registration_success.php');
        exit();
    } else {
        echo "Error: " . mysqli_stmt_error($stmt);
    }

    mysqli_stmt_close($stmt);
} else {
    echo "Please submit the form.";
}

mysqli_close($conn);
?>