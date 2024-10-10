let empresa = {
    nombre: "Empresa 1",
    ubicacion: "No lo se",
    empleados: [
        {
            nombre: "empleado1",
            puesto: "no lo se",
            salario: 1500
        },
        {
            nombre: "empleado12",
            puesto: "no lo se",
            salario: 2000
        },
        {
            nombre: "empleado15",
            puesto: "no lo se",
            salario: 1550
        },
    ]
}

empresa.empleados.forEach(empleado => {
    console.log(`Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}, Salario: ${empleado.salario}`);
});