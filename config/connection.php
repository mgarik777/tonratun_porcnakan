<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$DBname = 'garik_bd';

$connection = new mysqli($servername, $username, $password, $DBname);

if($connection -> connect_error){
    echo 'Sxal ban ka'. ' '. mysqli_connect_error();
}else{
    echo 'Kpav !';
};
?>