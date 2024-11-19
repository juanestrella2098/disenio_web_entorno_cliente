/*
Crea una función que simule la lectura y escritura de archivos. 
Si hay un error en la lectura (simulado), debe capturarse con try...catch.
Usa finally para asegurarse de que el archivo siempre se cierre, independientemente de si ocurrió un error o no.
*/

function simulaEscrituraLectura(lectura, escritura) {
    //El archivo se encuentra cerrado
    let archivoAbierto = false;

    try {
        //Abrimos el archivo
        archivoAbierto = true;

        //si hay un error en la lectura
        if (!lectura) {
            throw new Error("Error en la lectura");
        }
        console.log("Lectura exitosa del archivo")

        //si hay un error en la escritura
        if (!escritura) {
            throw new Error("Error en la escritura");
        }
        console.log("Escritura exitosa del archivo")
    } catch (error) {
        console.log(error.message);
    } finally {
        if (archivoAbierto) {
            //Cerramos el archivo
            archivoAbierto = false;
        }
        console.log("Operacion terminada");
    }
}

simulaEscrituraLectura(true,true);
simulaEscrituraLectura(false,true);
simulaEscrituraLectura(true,false)