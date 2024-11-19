/*
Crear una Clase "Persona":
Crea una clase Persona que contenga las propiedades nombre, edad y trabajo.
Añade un método para cambiar el trabajo de la persona.
Crear varias personas y cambiar sus trabajos.
*/
//Creamos la clase
class Persona {
    constructor(nombre,edad,trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }
    //Creamos el metodo que cambia el trabajo
    cambiaTrabajo(nuevoTrabajo){
        this.trabajo = nuevoTrabajo;
    }
}

//Creamos instancias
let personaUno = new Persona("juan", 26,"cual");
let personaDos = new Persona ("manuel", 27, "ninguno");

//Cambiamos el nobmre
personaUno.cambiaTrabajo("Ninguno");
personaDos.cambiaTrabajo("Tampoco");

//Lo probamos
console.log(personaDos);
console.log(personaUno)