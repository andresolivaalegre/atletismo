<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once "cors.php";
include_once "database.php";
$sentencia = mysqli_query($mysqli, "select * from users");
$rows = array();
while ($row = mysqli_fetch_assoc($sentencia)) {
  $rows[] = $row;
}
echo json_encode($rows);
