let colores = ["rojo", "azul", "verde", "amarillo"];
let menuColores = pintaMenuColores(colores);
let coloresJuego = [];
const modosJuegos = ["Supervivencia", "Clásico"];
let partidas = [];
let modo = modosJuegos[0];
let respuesta;
let opc;
let opcModo = 0;
let cont = 0;
let contRondas = 0;
let contPartJug = 0;
let cantRondasClas = 50;
let flag = false;

while (opc != '5') {
    menuColores = pintaMenuColores(colores);
    opc = prompt(`Modo Actual: ${modo}
Colores actuales:${menuColores}
        Partidas jugadas: ${contPartJug}
        1. Iniciar Juego
        2. Cambiar Modo
        3. Cambiar colores
        4. Ver historial de partidas
        5. Salir
        Introduce una opción`);

    switch (opc) {
        case '1':
            switch (modo) {
                case 'Supervivencia':
                    while (!flag) {
                        cont = 0;
                        coloresJuego.push(colores[Math.floor((Math.random() * colores.length))]);
                        alert(coloresJuego);

                        for (let i = coloresJuego.length; i != 0; i--) {
                            respuesta = prompt(`
                                ${menuColores}
            Introduce el color (en minúsucula): `);
                            console.log(respuesta);
                            if (coloresJuego[cont] != respuesta) {
                                alert(`Has fallado, tu respuesta estaba siendo ${coloresJuego}`);
                                partidas.push(['Modo ' + modo, colores.length, coloresJuego.length-1]);
                                flag = true;
                                contPartJug++;
                                break;
                            }
                            cont++;
                        }
                    }
                    cont = 0;
                    break;
                case 'Clásico':
                    cantRondasClas = parseInt(prompt("¿Cuantas rondas quieres? Introduce un numero"));
                    while (flag == false && cont < cantRondasClas) {
                        cont = 0;
                        coloresJuego.push(colores[Math.floor((Math.random() * colores.length))]);
                        alert(coloresJuego);

                        for (let i = coloresJuego.length; i != 0; i--) {
                            respuesta = prompt(`
                                ${menuColores}
            Introduce el color (en minúsucula): `);
                            console.log(respuesta);
                            if (coloresJuego[cont] != respuesta) {
                                alert(`Has fallado, tu respuesta estaba siendo ${coloresJuego}`);
                                partidas.push(['Modo ' + modo, colores.length, "Rondas " + coloresJuego.length - 1]);
                                flag = true;
                                contPartJug++;
                                break;
                            }
                            cont++;
                        }
                    }
                    break;
            }
            //reiniciamos variables
            coloresJuego = [];
            flag = false;
            cont = 0;
            break;
        case '2':
            opcModo = prompt(`Introduce 1 para supervivencia o 2 para clasico`);
            modo = modosJuegos[parseInt(opcModo - 1)];
            break;
        case '3':
            let nuevoArrColores = [];
            let coloresCont = prompt("Cuantos colores quieres");
            while (cont < parseInt(coloresCont)) {
                let color = prompt("Asigna el color a la primera posicion, de normal era " + colores[cont]);
                nuevoArrColores[cont] = color;
                cont++;
            }
            colores = nuevoArrColores;
            //Boramos los colores que se salen de lo que el usuario a introducido
            cont = 0;
            break;
        case '4':
            let msgPartidas = "";
            partidas.forEach((partida, i) => {
                msgPartidas += i+1 + " " + partida[0] + " - Partidas: " + partida[1] + " - Rondas: " + partida[2] + "\n"
            });
            alert(msgPartidas);
            break;
    }

}

function pintaMenuColores(arrayColores) {
    let msg = "";

    arrayColores.forEach((color, i) => {
        msg += `\n${i + 1} - ${color}`;
    });

    return msg;
}