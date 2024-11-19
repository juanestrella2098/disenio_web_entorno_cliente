//Creamos los objetos JSON
let lista = [
    { "nombre": "sara", "edad": 25 },
    { "nombre": "juan", "edad": 28 },
    { "nombre": "pablo", "edad": 32 }
];

//Recorremos cada objeto y mostramos el nombre y la edad en la consola
lista.forEach(objeto => {
    console.log("Nombre: " + objeto.nombre);
    console.log("Edad: " + objeto.edad);
});
