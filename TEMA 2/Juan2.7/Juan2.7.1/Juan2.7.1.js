const palabras = ["elefante", "mariposa", "computadora", "bicicleta", "universo"];

const palabraElegida = palabras[Math.floor((Math.random() * palabras.length))];

//Transformamos la palabra elegida en un array para poder localizar que la palabra coincida y sustituir el asterisco
const palabraArray = palabraElegida.split("");

const intentosDefinidos = 6;

//Si el usuario falla este incrementará y si llega los intentos definidos se saldrá
let intentosMeter = 0;
//o bien si consigue acertar también se saldrá
let flagConseguido = false;

//Creamos la palabra con los asteriscos
let palabraAsterisco = "";
for (let i = 0; i < palabraElegida.length; i++) {
    palabraAsterisco += "*";
}

do {
    let letraMetida = prompt(`La palabra es ${palabraAsterisco}. De ${intentosDefinidos} llevas ${intentosMeter} de equivocaciones posibles.
        Introduce la palabra o una letra: `);
    //Si la palabra es igual a la elegida habrás ganado
    //comprobamos que la longitud sea 1 y que la palabra tiene la letra introducida
    if (letraMetida.length == 1 && palabraElegida.includes(letraMetida)) {
        //Separamos en un array de asteriscos
        let asteriscoArray = palabraAsterisco.split("");
        for (let i = 0; i < palabraArray.length; i++) {
            //Si la palabra es igual, la posicion del array de asterisco será igual a la palabra.
            if (palabraArray[i] == letraMetida) {
                asteriscoArray[i] = letraMetida;
            }
        }
        //Volvemos a unir el array de asteriscos
        palabraAsterisco = asteriscoArray.join("");
    } else { intentosMeter++; }

    //Comprobamos que se ha introducido la palabra o la palabra de asterisco ya sea igual a la elegida
    if (letraMetida == palabraElegida || palabraAsterisco == palabraElegida) {
        alert(`Has adivinado la palabra, ${palabraElegida}`);
        flagConseguido = true;

    }
} while (intentosMeter < intentosDefinidos && !flagConseguido);

if(!flagConseguido){
    alert("No has adiviniado la palabra, era " +  palabraElegida)
}
