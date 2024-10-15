// Primer Map con las claves nombre y edad
const persona = new Map();
persona.set("nombre", "Juan");
persona.set("edad", 26);

// Segundo Map con las claves ciudad y país
const ubicacion = new Map();
ubicacion.set("ciudad", "Torredonjimeno");
ubicacion.set("país", "España");

//Combinamos los dos maps con el operador de propagar (spread)
const persUbi = new Map([...persona, ...ubicacion]);

//Mostramos el resultado
console.log(persUbi);
