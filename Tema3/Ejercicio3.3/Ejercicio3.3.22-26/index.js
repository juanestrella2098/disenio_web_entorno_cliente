/* Ejercicio 22 */
//Localizamos el div donde se añadiran los nodos
const treeRoot = document.getElementById("treeRoot");

//Usamos el addEventListener para añadir elementos en los seleccionados y si no estará desde el root
function agregarNodoArbol() {

    let selectedNodes = document.querySelectorAll(".selected");


    if (selectedNodes.length > 0) {
        selectedNodes.forEach((node) => {
            let p = document.createElement("p");
            p.innerText = "Soy un parrafo"
            p.id = Math.random() * (1000 - 1) + 1;
            p.classList.add("no-selected");
            changeStyle(node);
            node.appendChild(p);

        })
    } else {
        let p = document.createElement("p");
        p.innerText = "Soy un parrafo"
        p.id = Math.random() * (1000 - 1) + 1;
        p.classList.add("no-selected");
        changeStyle(p);
        treeRoot.appendChild(p);
    }




}

//Funcion para eliminar los nodos seleccionados
function eliminarNodoSeleccionado() {
    let selectedNodes = document.querySelectorAll(".selected");

    selectedNodes.forEach((node) => {
        node.remove();
    })


}

//Funcion para cambiar la clase
function changeStyle(node) {
    node.addEventListener("click", () => {
        if (node.className == "no-selected") {
            node.classList.remove("no-selected");
            node.classList.add("selected");
        } else {
            node.classList.remove("selected");
            node.classList.add("no-selected");
        }
    })
}

/* Ejercicio 23 */
let offset = [0, 0];
let divOverlay = document.getElementById("draggable");
let dropzone = document.getElementById("dropzone");
let isDown = false;

divOverlay.addEventListener('mousedown', (e) => {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', () => {
    isDown = false;
}, true);

document.addEventListener('mousemove', (e) => {
    event.preventDefault();
    if (isDown) {
        let newLeft = e.clientX + offset[0];
        let newTop = e.clientY + offset[1];

        //Obtener los límites del dropzone
        let dropzoneRect = dropzone.getBoundingClientRect();
        let overlayRect = divOverlay.getBoundingClientRect();

        //Asegurarse de que el elemento no se salga del dropzone
        if (newLeft < dropzoneRect.left) newLeft = dropzoneRect.left;
        if (newTop < dropzoneRect.top) newTop = dropzoneRect.top;
        if (newLeft + overlayRect.width > dropzoneRect.right) newLeft = dropzoneRect.right - overlayRect.width;
        if (newTop + overlayRect.height > dropzoneRect.bottom) newTop = dropzoneRect.bottom - overlayRect.height;

        divOverlay.style.left = newLeft + 'px';
        divOverlay.style.top = newTop + 'px';
    }
}, true);


/* Ejercicio 24 */

//Localizamos los inputs
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");

//Localizamos los divs para mostrar los errores
const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const telefonoError = document.getElementById("telefonoError");

//Localizamos el boton
const buttonSubmit = document.getElementsByTagName('button')[2];

const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const patterPhone = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;

buttonSubmit.addEventListener('click', (e) => {
    let errores = 0;
    if (inputNombre.value.length < 3) {
        nombreError.innerText = "El nombre debe de tener al menos 3 caracteres";
        errores++;
    }
    if (!patternEmail.test(inputEmail.value)) {
        emailError.innerText = "El email no tiene un formato adecuado";
        errores++;
    }
    if (!patterPhone.test(inputTelefono)) {
        telefonoError.innerText = "El telefono debe ser en formato español de ESPAÑA";
        errores++;
    }

    (errores > 0) ? e.preventDefault() : false;


})


/* Ejercicio 26 */
//Localizamos el div donde se crearan los botones con id unico
const buttonContainer = document.getElementById("buttonContainer")

//Creamos la funcion
function agregarBotonDinamico() {
    let boton = document.createElement("button");
    boton.innerHTML = 'Mostrar id';
    boton.id = Math.random() * (1000 - 1) + 1;
    buttonContainer.appendChild(boton);
}

//Añadimos el addEventListener en el id para dar delegacion de eventos
buttonContainer.addEventListener('click', (e) => {
    alert(e.target.id);
})