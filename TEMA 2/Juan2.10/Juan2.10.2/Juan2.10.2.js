//Declaramos la creacion del mapa
const persona = new Map();

//Asignamos la key a su value
persona.set("nombre","Juan");
persona.set("edad",26);
persona.set("ciudad", "torredonjimeno");

//Accedemos al valor de nombre
console.log(persona.get("nombre"));

