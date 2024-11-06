//Creamos el array de JSON
let estudiantes = [
    { "nombre": "luis", "edad": 23, "nota": 8 },
    { "nombre": "ana", "edad": 21, "nota": 9 },
    { "nombre": "carlos", "edad": 22, "nota": 7 }
];

//Aumentamos en 1 la nota de todos los estudiantes
estudiantes.forEach(estudiante => {
    estudiante.nota += 1;
});

//Mostramos los nombres y las nuevas notas en la consola
estudiantes.forEach(estudiante => {
    console.log("Nombre: " + estudiante.nombre + ", Nueva Nota: " + estudiante.nota);
});

//Convertimos el array actualizado a formato JSON
let estudiantesActualizadosJSON = JSON.stringify(estudiantes);

//Guardamos los datos actualizados en un archivo JSON (simulado aquí)
console.log("Datos actualizados en formato JSON: " + estudiantesActualizadosJSON);
