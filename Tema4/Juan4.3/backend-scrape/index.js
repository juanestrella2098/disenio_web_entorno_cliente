const express = require('express');
const cors = require('cors')
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())

/**
 * Función que se usa para scrapear el producto de amazon.
 * @param {string} url  - Url de la pagina de amazon.
 * @returns {Object} - Objeto que se usa para mostrarlo en el frontend
 */
async function scrapeAmazon(url) {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto(url);

    const titlePage = await page.$('#title #productTitle');
    let title = await page.evaluate(el => el.textContent, titlePage);
    title = title.trim();

    const pricePage = await page.$('#priceblock_ourprice, #priceblock_dealprice, #priceblock_saleprice, .a-price .a-offscreen');
    const price = await page.evaluate(el => el ? el.textContent.trim() : 'Precio no disponible', pricePage);

    const imagePage = await page.$('.imgTagWrapper img');
    const image = await page.evaluate(el => el.src, imagePage);

    await browser.close();

    return { title, price, image };
}

/**
 * 
 * @param {string} title - Titulo del objeto de amazon que se usara para buscar los otros productos
 * @returns {Array} - Devuelve un array de productos que luego se verá en el frontend
 */
async function scrapeBing(title) {


    const browser = await puppeteer.launch({
        headless: true
    });
    title = title.split(' ').slice(0, 3).join('-');
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36');

    await page.goto(`https://www.bing.com/shop?q=${title}`);
    await page.waitForSelector('#br-paidOffersGrid');
    const results = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('li.br-item')).map((list, index) => ({
            position: index + 1,
            price: list.querySelector('.pd-price') ? list.querySelector('.pd-price').textContent.trim() : null,
            venta: list.querySelector('.br-sellersCite') ? list.querySelector('.br-sellersCite').textContent.trim() : null,
            compareLink: list.querySelector('a.br-compareSellers') ? list.querySelector('a.br-compareSellers').href : null
        }));
    });

    const products = results.slice(0, 5);

    await browser.close();

    return products;
}

//Ruta get donde le entra la url
app.get('/scrape', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(404).json({
            error: "La url es obligatoria"
        });
    }

    const amazonData = await scrapeAmazon(url);
    const bingData = await scrapeBing(amazonData.title);

    res.json({ amazonData, bingData });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
