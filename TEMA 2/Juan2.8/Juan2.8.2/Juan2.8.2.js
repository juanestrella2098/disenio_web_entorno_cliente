let coche = {
    marca: "Ford",
    modelo: "Focus RS",
    anio: 2024
}

coche.anio = 2023;

Object.assign(coche, { color: "Blanco" });

for (const propiedad in coche) {
    if (Object.prototype.hasOwnProperty.call(coche, propiedad)) {
        console.log(coche[propiedad])

    }
}