/*
Calculando el mayor
Declara una función que se llama calculoMayor() y pasarle como parámetros (num1,num2)
Dentro de la función muestra una alerta que diga cuál de los números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta también.
Invoca la función y llena los argumentos con los números que desees.

*/

function calculoMayor(num1, num2) {
    alert((num1 == num2) ? (`El numero ${num1} es igual a ${num2}`)
        : ((num1 > num2) ? `El numero ${num1} es mayor que ${num2}`
            : `El numero ${num2} es mayor que ${num1}`))
}

calculoMayor(6,6)