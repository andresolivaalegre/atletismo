export class Grupo{
  public id: number;
  public id_entrenador: number;
  public id_atleta: number;
  public nombre: string;

  constructor(id:number,nombre: string,id_entrenador:number, id_atleta:number) {
  this.id = id;
  this.id_entrenador= id_entrenador;
  this.id_atleta=id_atleta;
  this.nombre = nombre;

  }
}
