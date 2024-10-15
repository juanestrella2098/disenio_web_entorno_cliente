//Creamos el array de obs
const arrObjs = [
    {
        id: 1,
        nombre: "a"
    },
    {
        id: 1,
        nombre: "pe"
    },
    {
        id: 12,
        nombre: "la"
    },
]

//Mapeamos cada objeto del array con obj.id como clave y convertmos el Map de nuevo usando Array.from y obtenemos solo los valores unicos
const mapObj = Array.from(new Map(arrObjs.map(obj => [obj.id, obj.nombre])).values())

console.log(mapObj);