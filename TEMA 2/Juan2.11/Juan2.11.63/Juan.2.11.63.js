/*
Crea una función que simule una operación aritmética entre dos números y usa try...catch para manejar posibles errores,
 como la división por cero.
 Usa el bloque finally para siempre mostrar un mensaje de que la operación se ha completado.
*/
//Declaramos la funcion division donde le pasamos dos valores
let division = (numUno, numDos) => {
    try {
        //Si uno de los dos valores no es numero saltamos de que no es numero
        if (isNaN(numUno) || isNaN(numDos)) {
            throw new Error("El valor introducido no es numero")
        }
        //Si el segundo valor es el 0 no se puede dividr
        if (numDos === 0) {
            throw new Error("No se puede dividir por 0");
        }
        console.log(numUno / numDos);
    } catch (e) {
        //Si hay un error salta por aqui
        console.log(e.message);
        return;
    }
    finally {
        //Si resulta exitoso saltara por aqui
        console.log("La operacion se ha realizado")
    }
}

//Lo probamos
division(10, 2);
division(10, "a");


