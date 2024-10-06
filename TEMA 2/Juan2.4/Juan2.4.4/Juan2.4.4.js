/*
Creando un método de iteración de array.
Crear una función IterarArray() y pasale el parámetro array.
Codea dentro de la función la iteración/recorrido de un array y muéstralo por consola.
Invoca la función IterarArray() y pasale como argumento 3 arrays distintos.
*/

function iterarArray(array) {

    array.forEach((num, i) => {
        console.log(`${i} - ${num}`)
    });

}

iterarArray([1, 2, 3]);
iterarArray(['a', 'b', 'c']);
iterarArray([true, false, true]);