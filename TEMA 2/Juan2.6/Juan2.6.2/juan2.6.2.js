let vidaJugadora = 50;
let vidaMonstruo = 100;
let pociones = 5;
let ataMaxJug = 20;
let ataMaxMons = 5;
let curPocMax = 25;
let ataqueRecibidoDado = 0;
let opc;

while (opc != "4") {

    if (vidaJugadora <= 0) {
        alert("Te quedste sin vida, has perdido")
        break
    }

    if (vidaMonstruo <= 0) {
        alert("Has derrotado al monstruo, enhorabuena")
        break;
    }

    opc = prompt(`
        Tu vida: ${vidaJugadora}
        Vida de Leti, Jinchūriki de la Gula: ${vidaMonstruo}

        1. Atacar monstruo
        2. Tomar pocion
        3. Buscar pocion
        4. Salir
        Introduce la opcion: `)
    switch (opc) {
        case "1":
            ataqueRecibidoDado = calcularAtaque(ataMaxJug);
            vidaMonstruo -= ataqueRecibidoDado;
            alert(`Atacas al monstruo, le hicistes ${ataqueRecibidoDado}. Ahora tiene ${vidaMonstruo} de vida.`)
            ataqueRecibidoDado = calcularAtaque(ataMaxMons);
            vidaJugadora -= ataqueRecibidoDado;
            alert(`El monstruo te ha atacado, tienes ${vidaJugadora}, te hizo ${ataqueRecibidoDado}`)
            break;
        case "2":
            if (pociones != 0) {
                let numAleatorio = parseInt((Math.random() * (curPocMax - 1) + 1));
                vidaJugadora += numAleatorio;
                pociones--;
                ataqueRecibidoDado = calcularAtaque(ataMaxMons);
                vidaJugadora -= ataqueRecibidoDado;
                alert(`El monstruo te ha atacado, tienes ${vidaJugadora}, te hizo ${ataqueRecibidoDado}`)
                break;
            } else {
                alert("no puedes tomar pociones")
            }
        case "3":
            let numAleatorio = parseInt((Math.random() * (4 - 1) + 1));
            alert((numAleatorio == 1) ? `Has encontrado una poción, tienes ${pociones++}` : "nada");
            ataqueRecibidoDado = calcularAtaque(ataMaxMons);
            vidaJugadora -= ataqueRecibidoDado;
            alert(`El monstruo te ha atacado, tienes ${vidaJugadora}, te hizo ${ataqueRecibidoDado}`)
            break;
        case "4":
            break;
    }
}
function calcularAtaque(atacaMax) {
    return parseInt((Math.random() * (atacaMax - 1) + 1))
}

