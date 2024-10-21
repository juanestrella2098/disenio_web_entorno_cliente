/*
Crea una función que reciba un número como entrada y verifique si es par o impar. 
Utiliza try...catch para capturar errores si el valor no es un número y el bloque finally para siempre mostrar un mensaje al final del proceso.
*/

let esParImpar = (numUno) => {

    try {
        //Si el valor no es numero decimos de que no es numero
        if (isNaN(numUno)) {
            throw new Error("El valor introducido no es numero");
        }
        //con el operador % comprobamos el resto, si es 0 diremos que es par si no impar
        console.log(((numUno % 2 === 0 ) ? 'Es par' : 'Es impar'));
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("La operacion se ha realizado")
    }
}


//Lo probamos
esParImpar(0);
esParImpar("a");
esParImpar(5);
