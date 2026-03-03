const fs = require('fs');

const urls = [
    "https://auto.mercadolibre.com.ar/MLA-1684025699-citron-berlingo-16-xtr-110cv-am54-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2815656254-peugeot-2008-16-thp-sport-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2824957388-peugeot-308-16-cc-thp-156cv-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2815393014-honda-hr-v-18-ex-2wd-cvt-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2824808846-fiat-mobi-10-way-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2824906154-honda-wr-v-15-ex-cvt-120cv-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2815379662-volkswagen-amarok-20-cd-tdi-140cv-trendline-llantas16-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2824798874-fiat-palio-14-nuevo-attractive-pack-top-85cv-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2825055154-fiat-siena-14-el-pack-attractive-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2824941948-toyota-corolla-cross-18-seg-ecvt-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2736139808-fiat-cronos-18-16v-precision-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2815396502-fiat-toro-20-freedom-4x4-at-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2847953168-fiat-toro-18-freedom-4x2-at-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2815575030-ford-bronco-sport-20-4wd-wildtrak-at8-_JM",
    "https://auto.mercadolibre.com.ar/MLA-1666735745-chevrolet-tracker-18-ltz-fwd-mt-140cv-_JM",
    "https://auto.mercadolibre.com.ar/MLA-2844146388-volkswagen-gol-trend-16-comfortline-101cv-_JM"
];

function formatPrice(price, html) {
    // If price is a raw number (like 23699000), format it
    const num = parseInt(price, 10);
    // ML can also be in USD, check currency symbol
    const currencyMatch = html.match(/<meta itemprop="priceCurrency" content="([^"]+)"/);
    const currency = currencyMatch ? currencyMatch[1] : 'ARS';

    if (currency === 'USD') {
        return `US$ ${num.toLocaleString('es-AR')}`;
    } else {
        return `$ ${num.toLocaleString('es-AR')}`;
    }
}

function getBrandAndModel(title) {
    const parts = title.split(' ');
    const brand = parts[0];
    const model = parts[1] || '';
    return { brand, model };
}

function getType(title) {
    const t = title.toLowerCase();
    if (t.includes('cross') || t.includes('tracker') || t.includes('hr-v') || t.includes('2008') || t.includes('bronco') || t.includes('suv')) return 'SUV';
    if (t.includes('amarok') || t.includes('toro') || t.includes('pickup')) return 'Pickup';
    if (t.includes('berlingo') || t.includes('utilitario') || t.includes('kangoo') || t.includes('partner')) return 'Utilitario';
    if (t.includes('cronos') || t.includes('siena') || t.includes('sedan')) return 'Sedan';
    return 'Hatchback'; // Default fallback
}

async function run() {
    const results = [];
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        try {
            console.log(`Fetching ${url}...`);
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept-Language': 'es-AR,es;q=0.9,en;q=0.8'
                }
            });
            const html = await res.text();

            // Extract details via Regex
            const titleMatch = html.match(/<meta property="og:title" content="([^"]+?)(?: en venta - Mercado Libre)?">/);
            const title = titleMatch ? titleMatch[1].replace(/ en Mercado Libre$/, '') : 'Desconocido';

            const imgMatch = html.match(/<meta property="og:image" content="([^"]+)">/);
            const img = imgMatch ? imgMatch[1] : '';

            const priceMatch = html.match(/<meta itemprop="price" content="([^"]+)">/);
            const priceRaw = priceMatch ? priceMatch[1] : '0';
            const price = formatPrice(priceRaw, html);

            const yearMatch = html.match(/"id":"VEHICLE_YEAR","name":"[^"]+","value_id":"[^"]+","value_name":"(\d{4})"/);
            const year = yearMatch ? parseInt(yearMatch[1], 10) : 2018;

            const { brand, model } = getBrandAndModel(title);
            const type = getType(title);

            results.push({
                id: `item-${i}`,
                src: img,
                description: title,
                price,
                url: url.replace(/#.*$/, ''), // Clean up URL
                brand,
                model,
                type,
                year
            });

        } catch (e) {
            console.error(`Error with ${url}`, e);
        }
    }

    // Rewrite carsData.json completely!
    fs.writeFileSync('C:/Users/leobv/.gemini/antigravity/scratch/autocarril/src/data/carsData.json', JSON.stringify(results, null, 2));
    console.log("Done successfully!");
}

run();
