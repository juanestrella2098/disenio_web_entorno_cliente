let contrasenia = "contraseña";
let contraseniaIntro = "";
let intentos = 0;
let flag = false;

do{
    contraseniaIntro = prompt("Introduce la contraseña");
    (contraseniaIntro == contrasenia) ? flag = true : intentos++;
    console.log(intentos);
    if(!flag) alert("Contraseña incorrecta, ingresela de nuevo " + intentos);
}while(intentos<3 && !flag);

alert((flag) ? "Has iniciado sesión" : "Fallaste todos los intentos");