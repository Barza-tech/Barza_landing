module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/projectos/Barza_landing/app/api/blog/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projectos$2f$Barza_landing$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projectos/Barza_landing/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
;
const FEEDS_BY_CATEGORY = {
    grooming: [
        "https://www.gq.com/feed/style.xml",
        "https://www.menshealth.com/rss/all.xml"
    ],
    skincare: [
        "https://www.allure.com/feed/all",
        "https://www.healthline.com/feed"
    ],
    fashion: [
        "https://www.vogue.com/rss.xml",
        "https://www.highsnobiety.com/feed"
    ],
    wellness: [
        "https://www.nytimes.com/services/xml/rss/nyt/Well.xml",
        "https://www.psychologytoday.com/intl/rss.xml"
    ],
    inspiration: [
        "https://www.theguardian.com/world/rss",
        "https://www.nationalgeographic.com/content/nationalgeographic/en/rss"
    ],
    angola: [
        // Feeds angolanos que pudeste encontrar
        "https://angola24horas.com/index.php/lifestyle/itemlist/category/49-moda-e-beleza",
        "https://noticiasdeangola.co.ao/feed"
    ]
};
const ALL_FEEDS = Array.from(new Set(Object.values(FEEDS_BY_CATEGORY).flat()));
const BARZA_KEYWORDS = [
    "hair",
    "hairstyle",
    "cabelo",
    "barber",
    "barbearia",
    "beleza",
    "beauty",
    "skin",
    "skincare",
    "makeup",
    "moda",
    "fashion",
    "grooming",
    "unhas",
    "lifestyle"
];
async function parseXMLString(xmlString) {
    const { JSDOM } = await __turbopack_context__.A("[externals]/jsdom [external] (jsdom, cjs, async loader)");
    const parser = new JSDOM(xmlString, {
        contentType: "text/xml"
    });
    return parser.window.document;
}
function extractImageFromItem(item) {
    const enclosure = item.querySelector("enclosure[url]");
    if (enclosure) return enclosure.getAttribute("url");
    const mediaContent = item.getElementsByTagNameNS("*", "content")[0];
    if (mediaContent?.getAttribute) return mediaContent.getAttribute("url");
    const description = item.querySelector("description")?.textContent || "";
    const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
    return imgMatch ? imgMatch[1] : null;
}
function normalizeItem(item, categoryKey, feedTitle) {
    const title = item.querySelector("title")?.textContent?.trim() || "Sem título";
    const link = item.querySelector("link")?.textContent?.trim() || item.querySelector("guid")?.textContent?.trim() || "";
    const pubDate = item.querySelector("pubDate")?.textContent?.trim() || null;
    const excerpt = (item.querySelector("description")?.textContent || "").replace(/<\/?[^>]+(>|$)/g, "").trim();
    const image = extractImageFromItem(item);
    const id = link || `${title}-${pubDate || Math.random().toString(36).slice(2, 7)}`;
    return {
        id,
        title,
        excerpt: excerpt ? excerpt.length > 200 ? excerpt.slice(0, 200) + "…" : excerpt : undefined,
        content: excerpt,
        image: image || null,
        category: categoryKey,
        link,
        source: feedTitle || null,
        publishedAt: pubDate
    };
}
function isRelevantToBarza(item) {
    const text = `${item.title} ${item.excerpt}`.toLowerCase();
    return BARZA_KEYWORDS.some((kw)=>text.includes(kw.toLowerCase()));
}
async function fetchFeed(url, categoryKey) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        const doc = await parseXMLString(text);
        const channelTitle = doc.querySelector("channel > title")?.textContent?.trim() || null;
        const items = Array.from(doc.querySelectorAll("item"));
        return items.map((it)=>normalizeItem(it, categoryKey, channelTitle));
    } catch (err) {
        console.error("Error fetching feed:", err);
        return [];
    }
}
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "all";
    const feedUrls = category === "all" ? ALL_FEEDS : FEEDS_BY_CATEGORY[category] || [];
    if (feedUrls.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projectos$2f$Barza_landing$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Categoria inválida"
        }, {
            status: 400
        });
    }
    const results = await Promise.all(feedUrls.map((url)=>fetchFeed(url, category)));
    const merged = results.flat();
    // filtra só os relevantes
    const filtered = merged.filter(isRelevantToBarza);
    // remove duplicados
    const map = new Map();
    for (const art of filtered){
        if (!map.has(art.id)) map.set(art.id, art);
    }
    const finalArr = Array.from(map.values());
    // ordena por data
    finalArr.sort((a, b)=>(b.publishedAt ? Date.parse(b.publishedAt) : 0) - (a.publishedAt ? Date.parse(a.publishedAt) : 0));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projectos$2f$Barza_landing$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(finalArr);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ed5f911._.js.map