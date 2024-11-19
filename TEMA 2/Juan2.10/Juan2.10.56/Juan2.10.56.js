//Declaramos la creacion del mapa
const persona = new Map();

//Asignamos la key a su value
persona.set("nombre","Juan");
persona.set("edad",26);
persona.set("profesion", "estudiante");

//convertimos el Map en un Array
const nuevaPersona = Array.from(persona);

console.log(nuevaPersona);
