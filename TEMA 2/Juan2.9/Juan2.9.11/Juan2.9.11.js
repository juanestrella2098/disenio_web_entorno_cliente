/*
Dado un array de objetos donde algunos tienen la misma propiedad id, elimina los duplicados basándote en el id utilizando Set.
*/


let arrayObj = [
    {
        id: 1,
        nombre: "juan"
    },
    {
        id: 1,
        nombre: "alex"
    },
    {
        id: 1,
        nombre: "jose"
    },
    {
        id: 1,
        nombre: "kiko"
    },
];

let ids = new Set();

let arraySinDuplicados = arrayDeObjetos.filter(objeto => {
    if (!ids.has(objeto.id)) {
        ids.add(objeto.id);
        return true;
    }
    return false;
});