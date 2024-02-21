<?php

session_start();

include 'connPerfecto.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = mysqli_real_escape_string($conn, $_POST['Username']);
    $password = $_POST['Password']; 

    
    $sql = "SELECT * FROM admintable WHERE Username = ?";

    
    $stmt = mysqli_prepare($conn, $sql);

    
    mysqli_stmt_bind_param($stmt, 's', $username);

   
    if (mysqli_stmt_execute($stmt)) {
        
        mysqli_stmt_store_result($stmt);

        if (mysqli_stmt_num_rows($stmt) == 1) {
            
            mysqli_stmt_bind_result($stmt, $adminId, $firstName, $lastName, $username, $hashedPassword);

            if (mysqli_stmt_fetch($stmt)) {
                
                if (password_verify($password, $hashedPassword)) {
                    
                    $_SESSION['loggedin'] = true;
                    $_SESSION['AdminID'] = $adminId;
                    $_SESSION['Username'] = $username;

                    header('Location: index.php');
                } else {
                    
                    echo "Invalid username or password.";
                }
            }
        } else {
            
            echo "Invalid username or password.";
        }
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

    
    mysqli_stmt_close($stmt);
}


mysqli_close($conn);
?>