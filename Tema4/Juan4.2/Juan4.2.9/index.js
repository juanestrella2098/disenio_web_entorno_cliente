// Creamos el array
let users = [];

$("#loadUsers").click(function () {
    // Cuando comienza la peticion ajax muestra el spinner
    $(document)
        .ajaxStart(function () {
            $("#loading").show();
            $("#spinner").show();
        })
        .ajaxStop(function () {
            $("#loading").hide();
            $("#spinner").hide();
        });
    // Realizamos la peticin y ponemos los datos en la tabla
    $.get("https://jsonplaceholder.typicode.com/users", function (data) {
        users = data;

        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            let trBody = $("<tr>");

            let tdName = $("<td>", {
                text: user.name,
            });

            let tdEmail = $("<td>", {
                text: user.email,
            });

            trBody.append(tdName);
            trBody.append(tdEmail);

            $("tbody").append(trBody);
        }
    });
});