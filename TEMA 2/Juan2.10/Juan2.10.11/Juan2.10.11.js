//Creamos el array de obs
const arrObjs = [
    {
        id: 1,
        nombre: "a"
    },
    {
        id: 12,
        nombre: "pe"
    },
    {
        id: 1,
        nombre: "la"
    },
    {
        id:3,
        nombre:"pera"
    },
]
//ordenamos por id
arrObjs.sort((a, b) => a.id - b.id);

//Extraemos las id del array de objetos con map
const objKeys = arrObjs.map(obj => obj.id);

//Eliminamos los duplicados
const arrKeysPuro = [...new Set(objKeys)];

//Creamos un array vacios donde se copiaran los objetos
const arrObjsSinDupli = [];

//Creamos una variable id que empieza siempre en -1 para que entre en la primera interacción
let id = -1;

//Recorremos el array
arrObjs.forEach((obj) => {
    //Si el id del objeto no es el mismo del que se asignara debajo agregamos el objeto
    if(id!=obj.id){
        arrObjsSinDupli.push(obj);
    }
    id=obj.id;
})

console.log(arrObjsSinDupli);