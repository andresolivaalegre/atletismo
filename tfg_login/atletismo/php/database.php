<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'angdb';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>