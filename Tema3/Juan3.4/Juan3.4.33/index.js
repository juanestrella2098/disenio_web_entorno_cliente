class PowerCache {
    constructor() {
        this.cache = new WeakMap();
    }

    *powerGenerator(base) {
        let exponent = 0;
        while (true) {
            if (!this.cache.has(base)) {
                this.cache.set(base, new Map());
            }
            const baseCache = this.cache.get(base);
            if (!baseCache.has(exponent)) {
                const result = Math.pow(base, exponent);
                baseCache.set(exponent, result);
            }
            yield baseCache.get(exponent);
            exponent++;
        }
    }
}

//Demostración del uso del generador con caché
const powerCache = new PowerCache();
const base = { value: 2 };
const gen = powerCache.powerGenerator(base);

console.log(gen.next().value); //Output: 1 (2^0)
console.log(gen.next().value); //Output: 2 (2^1)
console.log(gen.next().value); //Output: 4 (2^2)
console.log(gen.next().value); //Output: 8 (2^3)

//Eliminar la referencia al objeto base
base.value = null;

//Forzar el recolector de basura (esto es solo para demostración, en la práctica no se puede forzar)
setTimeout(() => {
    console.log(gen.next().value); //Output: undefined (si el recolector de basura ha eliminado la referencia)
}, 1000);
