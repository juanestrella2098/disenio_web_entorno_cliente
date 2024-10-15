//Creamos el Map de coche
const coche = new Map();

//Asignamos las variables con set
coche.set("marca", "Citroen");
coche.set("modelo", "c15");
coche.set("anio", 2005);

//Comprobamos si la clave modelo existe en el Map
console.log(coche.has("modelo"));