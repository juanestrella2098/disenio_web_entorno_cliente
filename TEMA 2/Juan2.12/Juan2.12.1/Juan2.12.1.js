/*
Crear una clase "Coche":
La clase debe tener propiedades como marca, modelo, y año.
Debe incluir un método que devuelva una descripción del coche.
Crear varias instancias de la clase y mostrar la descripción en la consola.

*/
//Creamos la clase
class Coche {
    constructor(marca,modelo,anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    //Craemos el metodo descCoche
    descCoche(){
        return "Marca: " + this.marca + " - Modelo: " + this.modelo + " - Año: " + this.anio
    }
}

//Declarmos dos objetos
let cocheUno = new Coche("citroen", "berlingo", 2005);
let cocheDos = new Coche("bmw", "m3", 2007);

//Probamos los metodos de descCoche
console.log(cocheDos.descCoche());
console.log(cocheUno.descCoche());