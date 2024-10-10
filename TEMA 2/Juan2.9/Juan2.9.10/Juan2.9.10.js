let setUno = new Set([1, 2]);
let setDos = new Set([1, 2, 3, 4]);

let flagConjunto = true;
//Comprobamos que los valores del primer set estan en el segundo, en el caso de que no exita saltara false
setUno.forEach((num => {
    if (!setDos.has(num)) flagConjunto = false
}))

//Segun la respuesta de arriba pintamos una cosa u otra
console.log((flagConjunto) ? "Los valores de setUno están en setDos" : "No son valores del subconjunto");