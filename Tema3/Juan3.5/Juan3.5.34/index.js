//Función que mostrara al final "han pasado dos segundos"
function temporizador() {
    console.log("Inicio del programa");
    setTimeout(() => {
        console.log("han pasado dos segundos");
    }, 2000);
    console.log("fin del programa");
}

temporizador();

//Funcion que cuenta segundo a segundo
function temporizadorB(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
}

temporizadorB()