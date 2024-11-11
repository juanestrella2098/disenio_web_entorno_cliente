/* Ejercicio 13 */
//Localiamos el boton
const duplicateButton = document.getElementById("duplicateButton");

//Localizmos el input
const inputText = document.getElementById("inputText");

//Localizamos el div
const textDisplay = document.getElementById("textDisplay");

//Duplicamos su contenido
duplicateButton.addEventListener("click", () => {
    if (inputText.value == "") {
        window.alert("No has introducido un valor")
        return;
    }

    let p = document.createElement("p");

    p.innerHTML = inputText.value;

    textDisplay.appendChild(p);

    inputText.value = "";
});

/* Ejercicio 14 */
//Localizmos le boton
const moveWindowButton = document.getElementById("moveWindowButton");

//Movemos la pantalla
moveWindowButton.addEventListener("click", () => {
    window.moveBy(100, 100);
});

/* Ejercicio 15 */
//Localizamos el parrafo
const p = document.getElementById("mouseInfo");

//Mostramos las coordenadoas cuando entramos
p.addEventListener("mouseover", () => {
    p.innerHTML = "Has introducido el raton en la coordenada x: " + event.clientX + " y: " + event.clientY;
})

//Restablecemos cuando salimos
p.addEventListener("mouseout", () => {
    p.innerHTML = "Pasa el ratón sobre este texto."
})

/* Ejercicio 16 */
//Creamos el boton
const buttonNavigate = document.createElement("button");
buttonNavigate.textContent = "Navegar a otra pagina";
//Lo asignamos al body
document.body.append(buttonNavigate);
//Abrimos una ventana y cerramos la pagina en 3 segundos
buttonNavigate.addEventListener("click", () => {
    const windowToNavigate = window.open("https://www.google.es", "google", "width=800,height=600,menubar=no,toolbar=no,location=no,status=no");
    setTimeout(() => {
        windowToNavigate.close();
    }, 3000);
})