/*
Crea un objeto producto con las propiedades nombre, precio y cantidad. 
Luego, haz una copia del objeto utilizando Object.assign y cambia el valor de cantidad en la copia, 
sin afectar el objeto original.
*/

let objeto = {
    nombre: "juan",
    precio: 26,
    cantidad: 2
}

//Creamos el objeto copia
let objetoCopia = Object.assign({},objeto);

objetoCopia.cantidad = 3;

//Mostramos los datos

console.log(objeto);

console.log(objetoCopia);