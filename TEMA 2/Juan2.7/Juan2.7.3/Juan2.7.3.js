let serpiente = "S";

const tablero = [
    ["H", "H", "R", "H", "H"],
    ["M", "R", "M", "R", "M"],
    ["H", "R", serpiente, "H", "H"],
    ["H", "M", "H", "R", "H"],
    ["M", "H", "H", "M", "R"],
    ["H", "H", "H", "H", "M"],
];

let pregunta = "";
let x = 2;
let y = 2;
let contManz = tablero.flat().filter(palabra => palabra === "M").length;
console.log(contManz);

tablero.forEach(fila => {
    console.log(fila);
});

function moverSerpiente(direccion) {
    // Cambiamos la posición inicial por hierba
    tablero[x][y] = "H";

    switch (direccion) {
        case '1': // Arriba
            x--;
            if (x == -1) x = 5;
            break;
        case '2': // Izquierda
            y--;
            if (y == -1) y = 4;
            break;
        case '3': // Derecha
            y++;
            if (y == 5) y = 0;
            break;
        case '4': // Abajo
            x++;
            if (x == 6) x = 0;
            break;
    }

    // Si la posición es una roca, revertimos el movimiento
    if (tablero[x][y] == "R") {
        switch (direccion) {
            case '1': x++; break;
            case '2': y++; break;
            case '3': y--; break;
            case '4': x--; break;
        }
    }

    // Si la posición es una manzana, disminuimos el contador
    if (tablero[x][y] == "M") {
        alert("Encontraste una manzana");
        contManz--;
    }

    // Actualizamos la posición de la serpiente
    tablero[x][y] = serpiente;
}

do {
    console.log("____________________");
    pregunta = prompt(`
        ¿Por donde te quieres mover?
        1. arriba
        2. izquierda
        3. derecha
        4. abajo
        5. salir
    `);

    if (pregunta >= '1' && pregunta <= '4') {
        moverSerpiente(pregunta);
        tablero.forEach(fila => {
            console.log(fila);
        });
    }

    if (contManz == 0) {
        alert("Enhorabuena has encontrado todas las manzanas");
        break;
    }

} while (parseInt(pregunta) != 5);
