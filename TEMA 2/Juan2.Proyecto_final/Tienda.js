import VentaRealizada from './VentaRealizada.js';

class Tienda {
    constructor() {
        //Map que almacena los id de los productos y los valores el objeto producto
        this._productos = new Map();
        //Un set que alamcena los nombre de los clientes registrados
        this._clientes = new Set();
        //Array que almacena un objeto de las ventas realizadas. nombreCliente, idProducto, cantComprada, totalComprado
        this._ventas = [];
    }

    //Agregar producto, si ya existe no se mete
    agregarProducto(producto) {
        if (!this._productos.has(producto._id)) {
            this._productos.set(producto._id, producto);
            console.log("Producto insertado : " + producto._nombre)
        } else console.log("El producto que intentas introducir ya existe")
    }

    //Actualizar stock
    actualizarStock(idProducto, cantidad) {
        //Conseguimos el producto a traves del idProducto
        const producto = this._productos.get(idProducto);

        //Si existe actualizamos el stock
        if (producto) {
            producto._stock += cantidad;
            console.log("Cantidad del producto actualizada");
        } else {
            //Si no, se muestra que no se envio
            console.log("Nos se encontró el producto")
        }
    }

    //Metodo que muestra todos los productos de la tienda
    mostrarInventario() {
        this._productos.forEach((producto, id) => console.log("Id: " + id + ", Producto: " + producto.mostrarInfo()))
    }

    //Metodo que registra un cliente
    registrarCliente(nombreCliente) {
        //Busca en cliente y si no existe lo añade
        if (!this._clientes.has(nombreCliente)) {
            this._clientes.add(nombreCliente);
            console.log("Cliente añadido");
        } else {
            //Si existe muestra en consola que ya existe y no se puede registrar
            console.log("El cliente ya está registrado")
        }

    }

    //Metodo que añade una venta al array de ventas realizadas
    realizarVenta(nombreCliente, idProducto, cantidad) {

        //LLamamos al metodo de registrar cliente
        this.registrarCliente(nombreCliente);

        //Conseguimos el producto para verificar si hay stock
        const producto = this._productos.get(idProducto);

        if (producto) {
            //Comprobamos que el stock no sea menor que la cantidad de la venta realizada y que la cantidad no sea negativa
            if (producto._stock >= cantidad && cantidad > 0) {
                producto._stock -= cantidad;
                console.log("Stock actualizado");
                //Agregamos la venta realizada
                this._ventas.push(new VentaRealizada(nombreCliente, idProducto, cantidad, producto._precio * cantidad));
                console.log("El producto se ha vendido y se ha realizado");
            } else {
                console.log("No se puede actualizar el stock del producto");
            }
        } else {
            console.log("No se ha encontrado el producto");
        }
    }

    //Metodo para mostrar todas las ventas
    mostrarVentas() {
        this._ventas.forEach((venta) => console.log(venta.mostrarInfo()));
    }

    //Array de productos que no tengan stock
    productosSinStock() {
        //Convertimos el map a array para poder sacar los productos
        return [...this._productos].filter(([id, producto]) => producto._stock == 0);
    }

    //Metodo que muestra todas las ventas hechas por un cliente especifico
    ventasPorCliente(nombreCliente) {
        this._ventas.forEach((venta) => {
            if (venta._nombreCliente == nombreCliente) {
                console.log(venta);
            }
        })
    }

    //Metodo para el total de los ingresos obtenidos por las ventas
    totalVentas() {
        let ingresosObtenidos = 0;

        this._ventas.forEach((venta) => ingresosObtenidos += venta._totalComprado);

        console.log("El total obtenido por las ventas es " + ingresosObtenidos + "€");
    }
}

export default Tienda;