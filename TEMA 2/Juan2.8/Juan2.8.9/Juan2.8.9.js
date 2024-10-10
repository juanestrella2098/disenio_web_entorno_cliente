//Creamos el objeto animal
let animal ={
    hablar:function hablar() {
        console.log("habla")
    },
}

//Extendemos de animal
let perro = Object.create(animal);

//Cambiamos el metodo para que diga guau
perro.hablar = function hablar() {
    console.log("guau")
}

console.log(perro.hablar())