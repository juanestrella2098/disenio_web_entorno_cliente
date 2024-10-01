let tareas = [];
let mensaje;
let tarea = "";
let pregunta;
let preguntaModifica = "";
let tareaModificada = "";
let opc = 0;
let cont = 0;

do {
    pregunta = prompt(`
        1. Agregar tarea
        2. Modificar tarea
        3. Elimianr tarea
        4. Ver tareas5
        5. Salir`);

    switch (parseInt(pregunta)) {
        case 1:
            tarea = prompt("¿Que tarea quieres agreagar?");
            //Esta opción agrega al array lo que ha introducido por teclado
            tareas.push(tarea);
            break;
        case 2:
            mensaje = "";
            //Con este bucle pintamos las tareas luego en el prompt
            for (let i = 0; i < tareas.length; i++) {
                mensaje += `${i} - ${tareas[i]}\n`
            }
            mensaje += "Elige la opción a modificar (escribe salir para volver atrás): ";
            //Si escribe salir en el prmpt se sale del bucle
            while (preguntaModifica != "salir") {
                preguntaModifica = prompt(mensaje);
                //Si lo que has introducido es salir u otra cosa se sale del bucle
                if (preguntaModifica == "salir") {
                    mensaje = "";
                    preguntaModifica = "";
                    break;
                } else {
                    //Si introduces el indice esta sera borrada e introducida por una nueva
                    tareaModificada = prompt("Dime que quieres poner en la tarea");
                    tareas.splice(parseInt(preguntaModifica), 1, tareaModificada);
                    preguntaModifica = "";
                    mensaje = "";
                    break;
                }
            }
            break;
        case 3:
            mensaje = "";
            for (let i = 0; i < tareas.length; i++) {
                mensaje += `${i} - ${tareas[i]}\n`
            }
            mensaje += "Elige la opción a eliminar (escribe salir para volver atrás): ";
            while (preguntaModifica != "salir") {
                preguntaModifica = prompt(mensaje);
                //Eliminamos la tarea con el indice introducido
                let tareaEliminada = tareas.splice(parseInt(preguntaModifica), 1);
                //Si el usuario ha introducido el indice se sale
                if (tareaEliminada[0] != "") {
                    mensaje = "";
                    preguntaModifica = "";
                    break;
                }
            }
            break;
        case 4://Mostramos todas las opciones
            mensaje = "";
            for (let i = 0; i < tareas.length; i++) {
                mensaje += `${i} - ${tareas[i]}\n`
            }
            mensaje += "Escribe salir para volver atrás";
            preguntaModifica = prompt(mensaje);
            if (preguntaModifica == "salir") {
                mensaje = "";
                preguntaModifica = "";
                break
            };

    }
} while (pregunta != 5);
