class Producto {
    constructor(id, nombre, precio, stock) {
        //Unico para cada producto
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        //Cantidad disponible
        this._stock = stock;
    }

    mostrarInfo() {
        return "Id: " + this._id + " ,Nombre: " + this._nombre + ",Precio: " + this._precio + ", Stock: " + this._stock;
    }
}

export default Producto;