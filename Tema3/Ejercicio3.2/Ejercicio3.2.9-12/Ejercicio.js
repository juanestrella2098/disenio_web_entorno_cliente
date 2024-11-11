//Declaramos una variable donde pillamos el body
const body = document.body;

/* Ejercicio 9 */
//Localizmos el boton 
const buttonChangeColor = document.getElementById("changeColorButton");

//Cambiamos el color de fondo de la pagina
buttonChangeColor.addEventListener("click", () => {
    body.style.backgroundColor = "grey";
})

/* Ejercicio 10 */
//Localizamos el boton
const buttonShowAlert = document.getElementById("showAlertButton");

//Mostramos el alert
buttonShowAlert.addEventListener("click", () => {
    window.alert("El ancho de la pagina es " + window.innerWidth + " y el alto es " + window.innerHeight);
});

/* Ejercicio 11 */
//Localizmos el parrafo
const paragraph = document.getElementById("paragraph");

//Actualizamos el contenido de paragraph
paragraph.innerHTML = "<a href='/Ejercicio3.2/Ejercicio3.2.9-12/index.html'>La misma pagina</a>";

/* Ejercicio 12 */
//Localizmos el div
const displayInfo = document.getElementById("displayInfo");

//Añadimos el el contenido al div
displayInfo.innerHTML = "Información del navegador: " + navigator.userAgent;
