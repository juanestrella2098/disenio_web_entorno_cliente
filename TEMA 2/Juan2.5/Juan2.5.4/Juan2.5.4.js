let serpiente = "S";

const tablero = [
    ["H", "H", "R", "H", "H"],
    ["M", "R", "M", "R", "M"],
    ["H", "R", serpiente, "H", "H"],
    ["H", "M", "H", "R", "H"],
    ["M", "H", "H", "M", "R"],
    ["H", "H", "H", "H", "M"],
]

let pregunta = "";
let x = 2;
let y = 2;
let contManz = tablero.flat().filter(palabra=>palabra === "M").length;
console.log(contManz);5

tablero.forEach(fila => {
    console.log(fila)
});


do {
    console.log("____________________")
    pregunta = prompt(`
        ¿Por donde te quieres mover?
        1. arriba
        2. izquierda
        3. derecha
        4. abajo
        5. salir
    `)

    switch (pregunta) {
        case '1'://Nos movemos arriba
            //Cambiamos la posicion inicial por una hierba pero este solo se dará si la serpiente no cambia
            tablero[x][y] = "H";
            //Restamos para movernos para arriba
            x--;
            //Comprobamos que si nos salimos de los limites volvemos al otro lado
            if (x == -1) {
                x = 5
            }
            //Si la posicion es una roca, sumamos de nuevo y no nos movemos
            if (tablero[x][y] == "R") {
                x++
            }
            //Si la posicion es una manzana, sumamos al contador;
            if(tablero[x][y] == "M"){
                alert("Encontraste una manzana");
                contManz--;
            }
            //La posicion ahora actualiazada de '[x][y]' será ahora la serpiente
            tablero[x][y] = serpiente;
            //Pintamos
            tablero.forEach(fila => {
                console.log(fila)
            });
            break;
        case '2': //Nos movemos hacia la izquierda
            //Cambiamos la posicion inicial por una hierba pero este solo se dará si la serpiente no cambia
            tablero[x][y] = "H";
            //Restamos para movernos para hacia la izquierda
            y--;
            //Comprobamos que si nos salimos de los limites volvemos al otro lado
            if (y == -1) {
                y = 4
            }
            //Si la posicion es una roca, sumamos de nuevo y no nos movemos
            if (tablero[x][y] == "R") {
                y++
            }
            //Si la posicion es una manzana, sumamos al contador;
            if(tablero[x][y] == "M"){
                alert("Encontraste una manzana");
                contManz--;
            }
            //La posicion ahora actualiazada de '[x][y]' será ahora la serpiente
            tablero[x][y] = serpiente;
            //Pintamos
            tablero.forEach(fila => {
                console.log(fila)
            });
            break;
        case '3': //Nos movemos hacia la derecha
            //Cambiamos la posicion inicial por una hierba pero este solo se dará si la serpiente no cambia
            tablero[x][y] = "H";
            //Sumamos para movernos para hacia la derecha
            y++;
            //Comprobamos que si nos salimos de los limites volvemos al otro lado
            if (y == 5) {
                y = 0
            }
            //Si la posicion es una roca, restamos  y no nos movemos
            if (tablero[x][y] == "R") {
                y--
            }
            //Si la posicion es una manzana, sumamos al contador;
            if(tablero[x][y] == "M"){
                alert("Encontraste una manzana");
                contManz--;
            }
            //La posicion ahora actualiazada de '[x][y]' será ahora la serpiente
            tablero[x][y] = serpiente;
            //Pintamos
            tablero.forEach(fila => {
                console.log(fila)
            });
            break;
        case '4'://Nos movemos arriba
        //Cambiamos la posicion inicial por una hierba pero este solo se dará si la serpiente no cambia
        tablero[x][y] = "H";
        //Restamos para movernos para arriba
        x++
        //Comprobamos que si nos salimos de los limites volvemos al otro lado
        if (x == 6) {
            x = 0
        }
        //Si la posicion es una roca, restamos de nuevo y no nos movemos
        if (tablero[x][y] == "R") {
            x--
        }
        //Si la posicion es una manzana, sumamos al contador;
        if(tablero[x][y] == "M"){
            alert("Encontraste una manzana");
            contManz--;
        }
        //La posicion ahora actualiazada de '[x][y]' será ahora la serpiente
        tablero[x][y] = serpiente;
        //Pintamos
        tablero.forEach(fila => {
            console.log(fila)
        });
            break;
    }
    if(contManz == 0){
        alert("Enhorabuena has encontrado todas las manzanas");
        break;
    }
} while (parseInt(pregunta) != 5);

