//Creamos el array
const personas = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Pedro" }
];

//Creamos el Map y asignamos los valores del array de objetos
const personaMap = new Map(personas.map((persona => [persona.id, persona.nombre])));

//Mostramos el Map
console.log(personaMap);


