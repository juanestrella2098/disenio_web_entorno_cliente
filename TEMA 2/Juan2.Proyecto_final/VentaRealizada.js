class VentaRealizada {
    constructor(nombreCliente, idProducto, cantComprada, totalComprado) {
        this._nombreCliente = nombreCliente,
            this._idProducto = idProducto;
        this._cantComprada = cantComprada;
        this._totalComprado = totalComprado;
    }

    mostrarInfo() {
        return "Nombre del cliente: " + this._nombreCliente + ", idProducto: " + this._idProducto + ", Cantidad comprada: " + this._cantComprada + ", Total gasto: " + this._totalComprado;
    }
}

export default VentaRealizada;