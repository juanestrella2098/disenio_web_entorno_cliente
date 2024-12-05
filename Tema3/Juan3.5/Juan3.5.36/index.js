const usuario = {
    nombre: "Usuario",
    edad: 20,
    email: "usuario@test.com",
    password: "123456"
};



function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad > 18) {
            setTimeout(() => {
                resolve("Edad correcta");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("el usuario tiene que tener 18 años")
            }, 1000);
        }
    })
}

function verificaEmail(email) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return new Promise((resolve, reject) => {
        if (regex.test(email)) {
            setTimeout(() => {
                resolve("Email correcto");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("El correo no tiene el formato valido")

            }, 1000);
        }
    })
}

function verificaPassowrd(password) {

    const regex = /^(?=.*\d)[a-zA-Z\d]{6,}$/;

    return new Promise((resolve, reject) => {
        if (regex.test(password)) {
            setTimeout(() => {
                resolve("Password correcto, Usuario verificado");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("El password no tiene el formato valido")

            }, 1000);
        }
    })
}

verificarEdad(usuario.edad).then((edad) => {
    console.log(edad);
    return verificaEmail(usuario.email)
}).then((email) => {
    console.log(email);
    return verificaPassowrd(usuario.password);
}).then((password) => {
    console.log(password)
}).catch((error) => {
    console.log(error)
})