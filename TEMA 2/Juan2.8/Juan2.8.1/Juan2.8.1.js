const persona = {
    nombre: "Juan",
    edad: 26,
    ciudad: "Jaén"
}

for (const pro in persona) {
    //Se comprueba quel objeto tenga lo propiedad
    if (Object.prototype.hasOwnProperty.call(persona, pro)) {
        console.log(persona[pro]);

    }
}