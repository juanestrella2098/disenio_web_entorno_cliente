let numsSetUno = new Set([1, 2, 3]);
let numsSetDos = new Set([3, 4, 5]);
//creamos un nuevo Set que contenga solo los valores que están en el primer conjunto, pero no en el segundo
let nuevoSet = Set([...numsSetUno].filter((num) => !numsSetDos.has(num)))

for (const num of nuevoSet) {
    console.log(num);
}