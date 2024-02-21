<?php

$conn = mysqli_connect("localhost", "root", "", "perfecto");

if(!$conn){
    die("Connection error: " . mysqli_connect_error());
}

?>