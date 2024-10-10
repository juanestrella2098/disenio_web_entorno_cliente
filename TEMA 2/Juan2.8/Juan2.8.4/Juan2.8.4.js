let estudiante = {
    nombre: "juan",
    edad: 26,
    curso: "2 daw"
}

delete estudiante.edad;

for (const propiedad in estudiante) {
    if (Object.prototype.hasOwnProperty.call(estudiante, propiedad)) {
        console.log(estudiante[propiedad])

    }
}