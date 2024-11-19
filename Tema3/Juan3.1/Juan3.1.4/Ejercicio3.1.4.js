//Creamos los objetos JSON sobre productos
let productos = [
    { "nombre": "laptop", "precio": 1500, "stock": 5 },
    { "nombre": "teclado", "precio": 50, "stock": 15 },
    { "nombre": "monitor", "precio": 200, "stock": 8 }
];

//Filtramos los productos que tienen un precio mayor a 100
let productosFiltrados = productos.filter(producto => producto.precio > 100);

//Mostramos los nombres de los productos filtrados en la consola
productosFiltrados.forEach(producto => {
    console.log(producto.nombre);
});
