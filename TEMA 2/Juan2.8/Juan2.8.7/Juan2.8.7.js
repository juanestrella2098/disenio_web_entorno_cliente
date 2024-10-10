/*
Crea un array de objetos llamado alumnos, donde cada objeto tenga las propiedades nombre, edad y nota. 
Luego, recorre el array con un for...of y muestra los nombres de los alumnos que tienen una nota mayor a 8.
*/

//Creamos los objetos
let alumno = {
    nombre: "juan",
    edad: 26,
    nota: 7
}

let alumno2 = {
    nombre: "jose",
    edad: 26,
    nota: 8.5
}

//El array de objetos
let alumnos = [alumno, alumno2]

//Recorremos los objetos y si su nota tiene mas de 8 lo muestra
for (const element of alumnos) {
    if (element.nota > 8) {
        console.log(element)
    }

}