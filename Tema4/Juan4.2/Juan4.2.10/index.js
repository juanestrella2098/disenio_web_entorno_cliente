// Recogemos los elementos
let inputSearch = $("#searchInput");
let selectFilter = $("#categoryFilter");
let products = $(".product");

// Se filtra los datos al cambiar el select
selectFilter.change(function () {
    products.each(function () {
        let productCategory = $(this).data("category").trim().toLowerCase();
        if (productCategory.includes(selectFilter.val().trim().toLowerCase())) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


// Se filtra los datos por lo que ponga el usuario
inputSearch.keyup(function () {
    products.each(function () {
        let prodName = $(this).find("h3").text().trim().toLowerCase();
        if (prodName.includes(inputSearch.val().trim().toLowerCase())) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});