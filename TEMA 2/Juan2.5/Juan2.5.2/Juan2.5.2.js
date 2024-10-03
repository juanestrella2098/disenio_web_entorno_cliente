let toDoList = [
    "Comprar comestibles",
    "Lavar el coche",
    "Estudiar JavaScript",
    "Llamar a la familia",
    "Hacer ejercicio"
];

let tareaABorrar = "Lavar el coche";

let indice = toDoList.indexOf(tareaABorrar);

(indice == -1) ? console.log("No se ha encontrado la tarea") : console.log("Tarea borrada", toDoList.splice(-1, indice));
