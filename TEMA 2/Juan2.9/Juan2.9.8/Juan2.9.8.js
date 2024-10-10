let numsSetUno = new Set([1,2,3]);
let numsSetDos = new Set([2,3,4]);
//Creamos un nuevo set filtrando los que ya tiene el segundo en el primero
let nuevoSet = new Set([...numsSetUno].filter((num)=>numsSetDos.has(num)))

for (const num of nuevoSet) {
    console.log(num)
}

