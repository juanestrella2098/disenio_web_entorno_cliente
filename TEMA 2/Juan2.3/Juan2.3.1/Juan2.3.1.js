let nombre = "";
let flag = false;

do {
    nombre = prompt("Digame su nombre");

    if(nombre.length != 0) flag = true;

} while (!flag);

    alert(`Bienvenido ${nombre}`)