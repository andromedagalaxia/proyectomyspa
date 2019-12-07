export interface Products{
    idProducto?:string,
    nombre?:string,
    marca?:string,
    precioUso?:number
    }

    export interface Tratamientos{
                idTratamiento?:string,
                nombre?:string,
                descripcion?:string,
                duracion?:string,
                precio?: number,
                idproducto?: number
          }