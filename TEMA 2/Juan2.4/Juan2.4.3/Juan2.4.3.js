/*
Sistema de facturación
Crear una función que se llame facturacion() .
La función tiene que recibir como parámetro el precio de un producto , y el medio de pago : C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). 
Si el precio del producto es menor a €200 no se aplicará ningún descuento.
Si el precio a abonar es entre €200 y €400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito.
Para precio mayores a €400, el descuento es 40% sin importar el medio de pago.
La función deberá retornar el monto final a abonar.
*/

let precio = prompt("Indique cuanto vas a pagar");

let metodoPago = prompt(`Elija el metodo de pago:
    C. Tarjeta de credito
    E. Efectivo
    D. Tarjeta de debito
    Ingrese solo la letra en mayúscula`);

function facturacion(precioProd, medioPago) {
    if (precioProd < 200) {
        return precioProd;
    } else if (precioProd >= 200 && precioProd <= 400) {
        return (medioPago == 'C') ? precioProd *= 0.9 :
            (medioPago == 'D') ? precioProd *= 0.8 : precioProd *= 0.7;
    } else return precioProd *= 0.6
}

alert(`Vas a pagar ${facturacion(parseInt(precio), metodoPago)}`)
