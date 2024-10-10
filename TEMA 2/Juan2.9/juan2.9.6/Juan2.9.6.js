/*
Crea un Set con los valores [1, 2, 3, 4, 5].
 Luego, convierte el Set a un array y añade el número 6 al array. Finalmente, muestra el nuevo array.
*/

let numsSet = new Set([1, 2, 3, 4, 5]);
//Convertimos el set en un array
let numsArray = Array.from(numsSet);

//Añadimos el num 6 al arry
numsArray.push(6);

//Mostramos el array
numsArray.forEach((num) => console.log(num));
