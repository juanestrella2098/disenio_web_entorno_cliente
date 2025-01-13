// Cambiar el div de color
$("#btnColor").click(function () {
    $("#targetDiv").css({
        "background-color": "blue",
    });
});

// Añadir el texto al div
$("#btnText").click(function () {
    $("#targetDiv").text("¡Hola mundo!");
});

// Mostrar u ocultar el div
$("#btnToggle").click(function () {
    if ($("#targetDiv").is(":visible")) {
        $("#targetDiv").hide();
    } else {
        $("#targetDiv").show();
    }
});