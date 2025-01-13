// Recogemos los elementos
let inputText = $("#nombre");
let spanErrorText = $("#nombreError");

let inputEmail = $("#email");
let spanErrorEmail = $("#emailError");
const regex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let inputPassword = $("#password");
let spanErrorPassword = $("#passwordError");
const regexPassword = /^.{6,}$/;

let buttonSubmit = $("button");
let flag = true;

// Procedemos a comprobar los datos
buttonSubmit.click(function () {
    event.preventDefault();

    if (inputText.val().trim() === "") {
        spanErrorText.show();
        flag = false;
    } else {
        spanErrorText.hide();
        flag = true;
    }

    if (!regex.test(inputEmail.val())) {
        spanErrorEmail.show();
        flag = false;
    } else {
        spanErrorEmail.hide();
        flag = true;
    }

    if (!regexPassword.test(inputPassword.val())) {
        spanErrorPassword.show();
        flag = false;
    } else {
        spanErrorPassword.hide();
        flag = true;
    }

    // Si todo ha saldio bien, se envia el formulario
    if (flag) {
        $("form").submit();
    }

});