let peliculaElegida = prompt("Ingresa su pelicula favorita\n" +
    "1. blade runner\n" + "2. La jungla de cristal\n" + "3. Rambo"
);

let peliculas = [{
    nombre: "blade runner",
    imagen: "./img/blade-runner.jpg"
}, {
    nombre: "La jungla de cristal",
    imagen: "./img/die-hard.jpg"
}, {
    nombre: "rambo",
    imagen: "./img/rambo.jpg"
}];

console.log(peliculaElegida)

switch (peliculaElegida) {
    case "1":
        console.log("llego")
        document.write(`Su ticket ha sido emitido 
            <img src="${peliculas[0].imagen}" alt="Imagen de peli"/>\n<p>${peliculas[0].nombre}</p>`)
        break;
    case "2":
        document.write(`Su ticket ha sido emitido 
            <img src="${peliculas[1].imagen}" alt="Imagen de peli"/>\n<p>${peliculas[1].nombre}</p>`)
        break;
    case "3":
        document.write(`Su ticket ha sido emitido 
            <img src="${peliculas[2].imagen}" alt="Imagen de peli"/>\n<p>${peliculas[2].nombre}</p>`)
        break;
}


