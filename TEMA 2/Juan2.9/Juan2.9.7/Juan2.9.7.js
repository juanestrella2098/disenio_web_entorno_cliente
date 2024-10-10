let numsSetUno = new Set([1,2,3]);
let numsSetDos = new Set([4,5,6]);

//Combinamos los dos set en uno
let nuevoSet = new Set([...numsSetUno,...numsSetDos]);

//Mostramos los valores del nuevo set
for (const num of nuevoSet) {
    console.log(num);
}