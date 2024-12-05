let segundosAleatorio = Math.floor(Math.random() * 4);
let numeroAleatorio = Math.floor(Math.random() * 11);
console.log("La ruleta está girando");


function ruleta(segundosAleatorio, numeroAleatorio) {
    return new Promise((resolve, reject) => {
        if (numeroAleatorio == 0) {
            setTimeout(() => {
                reject("La ruleta se ha atascado");
            }, segundosAleatorio * 1000);
        } else {
            setTimeout(() => {
                resolve("Tenemos un ganador, has ganado " + numeroAleatorio + " puntos");
            }, segundosAleatorio * 1000);
        }
    })
}

ruleta(segundosAleatorio, numeroAleatorio).then((mensjae) => {
    console.log(mensjae);
}).catch((error) => {
    console.log(error);
})