/*
Crear una Herencia: Clase "Empleado" y "Gerente":
Crear una clase Empleado con propiedades nombre, salario y un método trabajar.
Crear una clase Gerente que herede de Empleado y tenga un método adicional llamado dirigir.
Crear instancias de ambas clases y mostrar cómo interactúan entre ellas.
*/

// Creamos la clase Empleado
class Empleado {
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar(){
        console.log("¿"+this.nombre + " trabaja?");
    }
}

// Creamos la clase Gerente que hereda de Empleado
class Gerente extends Empleado{
    constructor(nombre,salario){
        super(nombre,salario);
    }

    dirigir(){
        console.log("¿"+this.nombre + " dirige?");
    }
}

//Instanciamos
let emp = new Empleado("juan",0);
let ger = new Gerente("jose", -1);

//Probamos los metodos
emp.trabajar();
ger.trabajar();
ger.dirigir();