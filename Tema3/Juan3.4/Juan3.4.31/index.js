class Cache {
    constructor() {
        this.cache = new WeakMap();
    }

    set(key, value) {
        this.cache.set(key, value);
    }

    get(key) {
        return this.cache.get(key);
    }

    has(key) {
        return this.cache.has(key);
    }

    delete(key) {
        this.cache.delete(key);
    }
}

//Demostración del uso del sistema de caché
const cache = new Cache();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

cache.set(obj1, 'Data for obj1');
cache.set(obj2, 'Data for obj2');

console.log(cache.get(obj1)); //Output: Data for obj1
console.log(cache.get(obj2)); //Output: Data for obj2

//Eliminar la referencia a obj1
obj1 = null;

//Forzar el recolector de basura (esto es solo para demostración, en la práctica no se puede forzar)
setTimeout(() => {
    console.log(cache.get(obj1)); //Output: undefined
    console.log(cache.get(obj2)); //Output: Data for obj2
}, 1000);
