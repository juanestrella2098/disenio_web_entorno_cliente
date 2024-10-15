// Primer Map con pares clave-valor
const persona = new Map();
persona.set("nombre", "Juan");
persona.set("edad", 26);

// Segundo Map con pares clave-valor
const ubicacion = new Map();
ubicacion.set("ciudad", "Torredonjimeno");
ubicacion.set("país", "España");

//Creamos la funcion
function comparaMaps(mapUno, mapDos) {
    //Los pasamos a array
    let arrayMapUno = Array.from(mapUno);
    let arrayMapDos = Array.from(mapDos);

    //Si el tamaño es distinto se sale
    if(arrayMapUno.length !== arrayMapDos.length) return false;

    //Recorremos el primer array con mapa siendo el array de cada clave valor e index
    arrayMapUno.forEach((mapa, i) => {
        //Recorremos el array de dentro con un for
        for (let j = 0; j < mapa.length; j++) {
            //comparamos el valor de con el segundo mapa dando como i la fila y j el valor que corresponderia
            if (mapa[j] !== arrayMapDos[i][j]) {
                return false;
            }
        }
    })

    return true;
}