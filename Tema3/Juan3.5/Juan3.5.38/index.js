console.log('🥇 Primero');
setTimeout(() => {
    console.log('🕐 Timeout 1');
    Promise.resolve().then(() => console.log('🤔 Promesa dentro de timeout'));
}, 0);

Promise.resolve().then(() => {
    console.log('✨ Promesa 1');
    setTimeout(() => console.log('⏰ Timeout dentro de promesa'), 0);
});
//Añadido el uso de async y reject
Promise.resolve().then(async () => {
    console.log('💫 Promesa 2');
    try {
        await Promise.reject('Error en promesa');
    } catch (error) {
        console.error(error)
    }
});
setTimeout(() => console.log('🕑 Timeout 2'), 0);
console.log('🥈 Segundo');
