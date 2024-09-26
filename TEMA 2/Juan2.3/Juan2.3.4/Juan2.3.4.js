let numeroSecreto = Math.trunc(Math.random() * (10 - 1) - 1);

let numero;

let flag = false;

console.log(numeroSecreto);

do {
    numero = parseInt(prompt("Adivina un numero del 1 al 10"));
    if (numero === numeroSecreto) {
        flag = true;
        alert("Adivinaste el numero")
    }else alert("Fallaste");
} while (!flag);
