/*
Crear una Clase "Banco" con encapsulamiento:
Crea una clase Banco que tenga una propiedad balance que no se pueda modificar directamente desde fuera de la clase.
Añade métodos para depositar y retirar dinero, validando que no se pueda retirar más de lo que hay en el balance.
Crea una instancia de Banco y muestra cómo se utilizan sus métodos.
*/
//Creamo la clase banco
class Banco {
    constructor(balance) {
        this._balance = balance; // Propiedad privada con _
    }
    //Metodo para añadir dinero al balance
    depositarDinero(saldo) {
        this._balance += saldo;
        console.log("Saldo añadido");
    }
    //metodo para quitar dinero dle balance
    retirarDinero(saldo) {
        //Si el saldo es mayor que el balance no podremos
        if (saldo > this._balance) {
            console.log("No se puede retirar dinero");
        } else {
            this._balance -= saldo;
            console.log("saldo retirado")
        }

    }
}

let bancoUno = new Banco(5000);
bancoUno.depositarDinero(500);
bancoUno.retirarDinero(200);
bancoUno.retirarDinero(6000);