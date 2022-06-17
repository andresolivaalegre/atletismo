<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $id_grupo = trim($request->id_grupo);
    $id_entrenador = trim($request->id_entrenador);
    $id_atleta = trim($request->id_atleta);
    $nombre = trim($request->nombre);
    $sql = "INSERT INTO listado_atletas(id_grupo, id_entrenador, id_atleta, nombre) VALUES ('$id_grupo','$id_entrenador','$id_atleta', '$nombre')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
        'id_grupo' => $id_grupo,
        'id_entrenador' => $id_entrenador,
        'id_atleta' => $id_atleta,
        'nombre' => $nombre,
        echo json_encode($authdata);
    }
}

?>