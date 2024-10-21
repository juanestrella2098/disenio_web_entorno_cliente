/*
Crear una clase Patrón Singleton:
Implementa una clase utilizando el patrón Singleton, es decir, que sólo permita la creación de una única instancia.
Crea una clase Configuracion donde solo se pueda tener una única instancia que almacene la configuración de la aplicación.
*/

// Definición de la clase Singleton
class Singleton {
    // Constructor de la clase que recibe un ajuste como parámetro
    constructor(ajuste) {
        // Verifica si ya existe una instancia de Singleton
        if (Singleton.instancia) {
            // Si existe, retorna la instancia existente
            return Singleton.instancia;
        }
        // Si no existe, asigna el ajuste a la propiedad de la instancia
        this.ajuste = ajuste;

        // Guarda la instancia actual en la propiedad estática Singleton.instancia
        Singleton.instancia = this;
    }

    // Método para obtener los ajustes almacenados
    obtenerAjustes() {
        return this.ajuste;
    }
}

// Creación de la primera instancia de Singleton con el ajuste {uno: 1}
let singleUno = new Singleton({ uno: 1 });
console.log(singleUno.obtenerAjustes()); // Muestra: {uno: 1}

// Intento de crear una segunda instancia de Singleton con el ajuste {dos: 2}
let singleDos = new Singleton({ dos: 2 });
console.log(singleDos.obtenerAjustes()); // Muestra: {uno: 1}, ya que se reutiliza la primera instancia