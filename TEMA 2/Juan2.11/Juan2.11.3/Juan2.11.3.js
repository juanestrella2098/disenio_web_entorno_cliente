/*
Crea una función que simule la petición a una API (puedes usar Promise.resolve 
o Promise.reject para simular el éxito o fracaso de la petición). 
Usa try...catch para capturar errores y finally para siempre mostrar un mensaje indicando que la petición ha terminado.
*/

//en esta funcion pasaremos el valor que se ejecutara dentro del promise
function peticioApi(exito){
    return new Promise((resolve, reject) => {
        //Pasado un segundo si el valor es true el resolve dira que la peticion se realizó
        setTimeout(() => {
            if (exito) {
                resolve("Peticion hecha");
            } else {
        //Si no es que ocurrió un error en la peticion
                reject("Error en la peticion");
            }
        }, 1000);
    })
}
//Hacemos la funcion con trycatch
async function realizaPeticion(exito) {
    try {
        let res = await peticioApi(exito);
        //Segun lo que se le paso dira una cosa u otra
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Peticion terminada...")
    }
}

//Lo probamos
realizaPeticion(true);
realizaPeticion(false);