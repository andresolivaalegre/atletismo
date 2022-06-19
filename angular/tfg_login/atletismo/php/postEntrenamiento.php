<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once "cors.php";
include_once("database.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $rodaje = trim($request->rodaje);
  $pista = trim($request->pista);
  $gimnasio = trim($request->gimnasio);
  $fecha = trim($request->fecha);

  $id_usuario = mysqli_real_escape_string($mysqli, trim($request->id_usuario));
  $sql = "INSERT INTO listado_entrenamientosp(id_usuario,fecha,rodaje,pista,gimnasio) VALUES ('$id_usuario','$fecha','$rodaje','$pista','$gimnasio')";
  if ($mysqli->query($sql) === TRUE) {
    $authdata = [
      'rodaje' => $rodaje,
      'gimnasio' => $gimnasio,
      'pista' => $pista,
      'Id' => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
  }
}
