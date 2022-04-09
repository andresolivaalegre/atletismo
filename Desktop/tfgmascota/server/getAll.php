<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once "cors.php";
$bd = include_once "bd.php";
$sentencia = $bd->query("select id, nombre, raza, edad from mascotas");
$mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($mascotas);
