/* Ejercicio 17 */
//Localizmos el parrafo
const text1 = document.getElementById("text1");

//Creamos la funcion
function cambiarTexto() {
    text1.innerText = "Texto modificado mediante JavaScript"
}

/* Ejercicio 18 */
//Localizamos el parrafo
const text2 = document.getElementById("text2");

//Creamos la funcion que modificará el estilo
function cambiarEstilo() {
    text2.style.color = "red";
    text2.style.fontSize = "20px";
    text2.style.fontWeight = "bold";
}

/* Ejercicio 19 */
//Localizmos el parrafo
const text3 = document.getElementById("text3");

//Creamos la función que ocultara el texto
function toggleVisibilidad() {
    text3.classList.toggle("hidden")
}

/* Ejercicio 20 */
//Localizmos la lista
const listUl = document.getElementById("lista");
//Creamos una lista
const list = [];

//Creamos la funcion para añadir elementos
function agregarElemento() {
    list.push(list.length + 1);

    let li = document.createElement("li");
    li.innerText = "Elemento " + list.length;

    listUl.appendChild(li);
}

/* Ejercicio 21 */
//Localizmos el div
const divMoverRaton = document.getElementById("mouseArea");

//Localizamos el parrafo
const pCoordenada = document.getElementById("coordenadas");

//Utilizamos addEventListener con mousemove para obtener las coordeandas del raton
divMoverRaton.addEventListener("mousemove",(event)=>{
    pCoordenada.innerHTML = "Estas en x: "+ event.clientX + " y: " + event.clientY;
});