/*
Crea un Set con los valores 100, 200, 300.
Luego, elimina el valor 200 y muestra el contenido del Set después de la eliminación.
*/

let numsSet = new Set([100,200,300]);

//borramos ya que el delete da truo o false y si se borra saldra que se ha borrado
if(numsSet.delete(200)){
    console.log("borrado")
}

//Recorremos el set
for (const num of numsSet) {
    console.log(num)
}
