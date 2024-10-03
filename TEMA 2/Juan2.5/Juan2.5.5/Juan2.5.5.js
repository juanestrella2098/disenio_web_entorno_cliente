let canciones = [];
let artistas = [];
let opc;

do {
    opc = prompt(`
        1. agregar cancion
        2. buscar canciones
        3. listar artistas
        4. salir`);

    switch (opc) {
        case '1':
            let cancArtis = prompt("Agrega la canción con el artista separada por coma:");
            let array = cancArtis.split(",");
            canciones.push(array[0]);
            artistas.push(array[1]);
            break;
        case '2':
            let artistaACancion = prompt("Pon el nombre del artista");
            let cancionesDelArtista = [];

            artistas.forEach((artista, i) => {
                if (artista === artistaACancion) {
                    cancionesDelArtista.push(canciones[i]);
                }
            });

            if (cancionesDelArtista.length > 0) {
                alert(`Canciones de ${artistaACancion}: \n- ${cancionesDelArtista.join("\n- ")}`);
            } else {
                alert(`No se encontraron canciones para el artista: ${artistaACancion}`);
            }
            break;
        case '3':
            let artistasMensaje = '';
            let artistasUnique = [...new Set(artistas)];
            artistasUnique.forEach((artista) => artistasMensaje += artista + "\n");
            alert(artistasMensaje);
            break;

    }

} while (parseInt(opc) != 4);