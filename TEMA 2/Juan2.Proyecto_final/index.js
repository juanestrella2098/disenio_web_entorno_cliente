import Producto from './Producto.js';

import Tienda from './Tienda.js';

//Creamos la tienda
const tienda = new Tienda();

//Agregamos 5 productos a la tienda;
tienda.agregarProducto(new Producto(1,"pera",2,5));
tienda.agregarProducto(new Producto(2,"manzana",1,1));
tienda.agregarProducto(new Producto(3,"sandia",3,2));
tienda.agregarProducto(new Producto(4,"melon",4,6));
tienda.agregarProducto(new Producto(5,"naranja",1,9));

//Registramos varios clientes en el sistema
tienda.registrarCliente("Juan");
tienda.registrarCliente("Juan");
tienda.registrarCliente("Jose");
tienda.registrarCliente("Alex");
tienda.registrarCliente("Agriche");

//Simulamos las ventas realizada por los clientes registrados
tienda.realizarVenta("Juan", 2,1)
tienda.realizarVenta("Agriche", 4,2);
tienda.realizarVenta("Alex",5,3);

//Mostramos el inventario, las ventas realizadas, y el total de ingresos de la tienda
console.log("Inventario")
tienda.mostrarInventario();
console.log("Ventas realizadas");
tienda.mostrarVentas()
console.log("Total ingresos obtenidos")
tienda.totalVentas()