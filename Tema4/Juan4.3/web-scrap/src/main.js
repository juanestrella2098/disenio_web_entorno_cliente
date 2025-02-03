
$(document).ready(function () {
  $("#buscarBtn").on('click', function () {
    const url = $('#buscar').val();
    if (url) {
      let busquedas = [];
    if(localStorage.getItem('busquedas') != null){
      busquedas = JSON.parse(localStorage.getItem('busquedas'));
    } 
      busquedas.push(`http://localhost:3000/scrape?url=${encodeURIComponent(url)}`);
      localStorage.setItem('busquedas', JSON.stringify(busquedas));
      $.ajax({
        url: `http://localhost:3000/scrape?url=${encodeURIComponent(url)}`,
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
        },
        error: function (error) {
          console.error('Error en la petición:', error);
        }
      });
    } else {
      alert('Por favor, ingresa una URL');
    }
  });

  $("#buscar").on('keydown', function (event) {
    if (event.key === 'Enter') {
      $("#buscarBtn").click();
    }
  });
});
