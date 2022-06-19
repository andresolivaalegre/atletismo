export class Entrenamientos{
  public ejercicio_id: number;
  public usuario_id: number;
  public id_entrenamiento: number;
  public fecha: string;
  public valor: string;

  constructor(ejercicio_id:number,usuario_id: number, id_entrenamiento: number, fecha: string, valor: string) {
    this.ejercicio_id = ejercicio_id;
    this.usuario_id = usuario_id;
    this.id_entrenamiento = id_entrenamiento;
    this.fecha = fecha;
    this.valor=valor;
    }
}
