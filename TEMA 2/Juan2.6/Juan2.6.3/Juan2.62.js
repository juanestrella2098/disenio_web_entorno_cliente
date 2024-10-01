let colores = ["rojo", "azul", "verde", "amarillo"];
let coloresJuego = [];
let respuesta;
let cont = 0;
let flag = false;

while (!flag) {
    cont = 0;
    coloresJuego.push(colores[parseInt((Math.random() * (3 - 0) + 0))]);
    alert(coloresJuego);

    for (let i = coloresJuego.length; i != 0; i--) {
        respuesta = prompt(`
            1. rojo
            2. azul
            3. verde
            4. amarillo
            Introduce el color (en minúsucula): `);
        console.log(respuesta);
        if (coloresJuego[cont] != respuesta) {
            alert(`Has fallado, tu respuesta estaba siendo ${coloresJuego}`);
            flag = true;
            break;
        }
        cont++;
    }
}