<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$esEntrenador = trim($request->esEntrenador);
$sql = "INSERT INTO users(name,password, email, entrenador) VALUES ('$name','$pwd','$email', '$esEntrenador')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'pwd' => '',
'email' => $email,
'entrenador' => $esEntrenador,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>