/*
Crear una Clase "Rectángulo":
Crea una clase que tenga como propiedades ancho y alto.
Añadir un método para calcular el área del rectángulo.
Crear varias instancias y calcular el área de diferentes rectángulos.
*/
//Creamos la clase
class Rectangulo {
    constructor(ancho,alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    //Declaramos el metodo que obtiene el area
    area(){
        return this.alto * this.ancho;
    }
}

//Cramos instancias
let recUno = new Rectangulo(2,5);
let recDos = new Rectangulo(5,5);
//Probamos
console.log(recDos.area());
console.log(recUno.area());