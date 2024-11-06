// URL del archivo JSON
const url = 'https://jsonplaceholder.typicode.com/albums';

// Función para obtener y filtrar los álbumes
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Filtrar los álbumes del artista con ID 3
        const albumsArtista3 = data.filter(album => album.userId === 3);

        // Mostrar los títulos de los álbumes filtrados en la consola
        albumsArtista3.forEach(album => {
            console.log(album.title);
        });
    })
    .catch(error => console.error('Error:', error));
