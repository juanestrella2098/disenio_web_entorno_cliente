function enviarDatos() {
    //Crear el objeto con los datos del formulario
    let datosFormulario = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        edad: document.getElementById('edad').value
    };

    //Convertir el objeto a formato JSON
    let datosJSON = JSON.stringify(datosFormulario);

    //Enviar los datos utilizando fetch a un servidor simulado
    fetch('https://api.ejemplo.com/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: datosJSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
