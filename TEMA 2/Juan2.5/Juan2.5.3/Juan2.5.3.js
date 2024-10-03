const tablero = [
    ["C", "C", "C"],
    ["C", "C", "C"],
    ["C", "C", "C"],
];
let bomba = [parseInt(Math.random() * (3 - 0) + 0), parseInt(Math.random() * (3 - 0) + 0)];

let flag = false;

let x = 0;
let y = 0;

let tableroDibujo = "";

console.log(bomba);

while (!flag) {
    tablero.forEach((fila) => {
        tableroDibujo += fila + "\n";
        tableroDibujo.split(",")
    })
    alert(tableroDibujo);
    x = parseInt(prompt("Introduce la cordenado x: "));
    y = parseInt(prompt("introduce la y: "));

    if (x >= 3 || y >= 3) {

        alert("Has introducido mal el numero");

    } else if (bomba[0] == x && bomba[1] == y) {

        alert("El diablooooo encontraste la bomba");
        tablero[bomba[0]][bomba[1]] = "X"
        flag = true;
        tableroDibujo = "";
        tablero.forEach((fila) => tableroDibujo += fila + "\n")
        alert(tableroDibujo);


    } else {

        tablero[x][y] = "V";

    }

    tableroDibujo = "";
}

