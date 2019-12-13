export interface Productos {
    idProducto?: string,
    Nombre?: string,
    Marca?: string,
    estatus?: string,
    PrecioUso?: number
}

export interface Tratamientos {
    idTratamiento?: number,
    nombre?: string
}

export interface Usuarios {
    idUsuario?: number,
    nombre?: string,
    NombreUsuario?: string,
    Contrasenia?: string,
    Rol?: string,
    Correo?: string,
    Telefono?: string
}

export interface Login{
    NombreUsuario?: string,
    Contrasenia?: string
}

export interface Reservaciones{
    nombre?: string,
    fecha?: string,
    horaInicio?: string,
    idUsuario?: number,
    idtrata?: number
}