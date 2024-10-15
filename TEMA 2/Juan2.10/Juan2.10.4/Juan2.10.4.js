//Declaramos la creacion del mapa
const persona = new Map();

//Asignamos la key a su value
persona.set("nombre","Juan");
persona.set("edad",26);
persona.set("apellido", "Estrella");

//Eliminamos la clave edad
persona.delete("edad");

//Recorremos el mapa y lo pintamos
for (const [dato, valor] of persona) {
    console.log(dato + " " + valor);
}

