export class Usuario {
    constructor(
        public nombre: string,
        public correo: string,
        public contrasena: string,
        public id?: number,
        public tipo?: boolean,
    ) { }

}
