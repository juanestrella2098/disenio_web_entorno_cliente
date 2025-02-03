$(document).ready(function () {
    //Cargar los datos
    let busquedas = JSON.parse(localStorage.getItem('busquedas'));

    if (busquedas == null) {
        $('#resultadoAmazon').html('No hay datos todavía guardados');
        $('#resultadosBing').html('No hay datos todavía guardados');
    } else {
        busquedas.forEach(busqueda => {
            $('#busquedas').append(`<li class="list-group-item busqueda-item acortar-texto" data-url="${busqueda}">${busqueda}</li>`);
        });
    }
    //Hacer click en cada elemento para ejecutar la busqueda
    $(document).on('click', '.busqueda-item', function () {
        const url = $(this).data('url');
        realizarBusqueda(url);
    });
    
    //Funcion para buscar
    function realizarBusqueda(url) {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                const amazonData = data.amazonData;
                const amazonHtml = `
                    <div class="producto">
                        <h2>${amazonData.title.replace(/\+/g, ' ')}</h2>
                        <img src="${amazonData.image}" alt="${amazonData.title}">
                        <p>Precio: ${amazonData.price ? amazonData.price : 'Precio no disponible'}</p>
                        <a href="${url}" target="_blank">Ver en Amazon</a>
                    </div>`;
                $('#resultadoAmazon').html(amazonHtml);

                const bingData = data.bingData;
                let bingHTML = '';
                bingData.forEach(product => {
                    bingHTML += `
                        <div class="producto">
                            <p>Posición: ${product.position}</p>
                            <p>Precio: ${product.price ? product.price : 'Precio no disponible'}</p>
                            <p>Venta: ${product.venta}</p>
                            <a href="${product.compareLink}" target="_blank">Ver el precio del vendedor</a>
                        </div>
                    `;
                });
                $('#resultadosBing').html(bingHTML);
            }
        });
    }
});
