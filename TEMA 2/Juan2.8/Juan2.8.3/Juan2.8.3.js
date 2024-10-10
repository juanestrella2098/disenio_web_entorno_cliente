let libro = {
    titulo: "Mistborn",
    autor: "Brandon Sanderson",
    anio: 2008
}

for (const propiedad in libro) {
    if (Object.prototype.hasOwnProperty.call(libro, propiedad)) {
        console.log(libro[propiedad])

    }
}