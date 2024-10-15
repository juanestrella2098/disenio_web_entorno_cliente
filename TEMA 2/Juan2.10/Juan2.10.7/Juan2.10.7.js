//Creamos un producto como Map
const producto = new Map();

//Asignamos las claves
producto.set("producto", "cosa");
producto.set("precio",15);
producto.set("cantidad", 5);

//Recorremos el producto y lo mostramos en consola
for (const [clave, dato] of producto) {
    console.log(clave + " - " + dato);
}