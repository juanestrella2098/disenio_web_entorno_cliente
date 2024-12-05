const coche1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1700, "Coche 1 ha llegado",);
})
const coche2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000), "Coche 2 ha llegado";
})
const coche3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, "Coche 3 ha llegado");
})
const coche4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Coche 4 ha llegado");
})

//Promise.all hace que se resulvan todas las promesas
Promise.all([coche1, coche2, coche3, coche4]).then((resultado) => {
    console.log(resultado);
    //Con Promise.race devolvera la primera que se resuelva antes
    return Promise.race([coche1, coche2, coche3, coche4])
}).then((otroResultado) => {
    console.log("el ganador es " + otroResultado)
})