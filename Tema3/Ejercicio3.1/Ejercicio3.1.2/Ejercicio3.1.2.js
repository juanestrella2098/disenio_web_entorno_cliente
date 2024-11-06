//Creamos el objeto
let producto = {
    nombre: "laptop",
    precio: 1200,
    stock: 10
};

//Convertimos el objeto a un string en formato JSON
let productoJSON = JSON.stringify(producto);

//Mostramos el resultado en la consola
console.log(productoJSON);
