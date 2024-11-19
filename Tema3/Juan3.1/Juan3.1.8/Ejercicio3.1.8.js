//Pedir un nombre por ventana emergente
let nombre = prompt("Introduce un nombre:");

//URL de la API con el nombre como parámetro
let url = `https://api.nationalize.io/?name=${nombre}`;

//Función para obtener y mostrar la probabilidad de nacionalidad
fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.country && data.country.length > 0) {
            //Encontrar el país con mayor probabilidad
            let maxProbabilidad = data.country.reduce((max, country) => country.probability > max.probability ? country : max, data.country[0]);
            console.log(`El país con mayor probabilidad para el nombre ${nombre} es ${maxProbabilidad.country_id} con una probabilidad de ${maxProbabilidad.probability}`);
        } else {
            console.log(`No se encontraron resultados para el nombre ${nombre}`);
        }
    })
    .catch(error => console.error('Error:', error));
