export interface Productos {
    idProducto?: string,
    Nombre?: string,
    Marca?: string,
    estatus?: string,
    PrecioUso?: number
}

export interface Tratamientos {
    idTratamiento?: string,
    nombre?: string,
    descripcion?: string,
    duracion?: string,
    precio?: number,
    idproducto?: number
}

export interface Usuarios {
    IdUsuario?: number,
    Nombre?: string,
    NombreUsuario?: string,
    Contrasenia?: string,
    Rol?: string,
    Correo?: string,
    Telefono?: string
}