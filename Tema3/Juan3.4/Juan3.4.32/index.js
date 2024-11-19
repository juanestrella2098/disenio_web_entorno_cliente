class PageTracker {
    constructor() {
        this.visitedPages = new WeakSet();
    }

    visitPage(page) {
        if (!this.visitedPages.has(page)) {
            this.visitedPages.add(page);
            console.log(`Visiting page: ${page.url}`);
        } else {
            console.log(`Already visited: ${page.url}`);
        }
    }

    hasVisited(page) {
        return this.visitedPages.has(page);
    }
}

//Demostración del uso del sistema de seguimiento de páginas visitadas
const tracker = new PageTracker();

let page1 = { url: 'https://example.com/page1' };
let page2 = { url: 'https://example.com/page2' };

tracker.visitPage(page1); //Output: Visiting page: https://example.com/page1
tracker.visitPage(page2); //Output: Visiting page: https://example.com/page2
tracker.visitPage(page1); //Output: Already visited: https://example.com/page1

console.log(tracker.hasVisited(page1)); //Output: true
console.log(tracker.hasVisited(page2)); //Output: true

//Eliminar la referencia a page1
page1 = null;

//Forzar el recolector de basura (esto es solo para demostración, en la práctica no se puede forzar)
setTimeout(() => {
    console.log(tracker.hasVisited(page1)); //Output: false (si el recolector de basura ha eliminado la referencia)
    console.log(tracker.hasVisited(page2)); //Output: true
}, 1000);
