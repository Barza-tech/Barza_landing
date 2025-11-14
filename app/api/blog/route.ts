import { NextResponse } from "next/server";

const FEEDS_BY_CATEGORY: Record<string, string[]> = {
  grooming: ["https://www.gq.com/feed/style.xml", "https://www.menshealth.com/rss/all.xml"],
  skincare: ["https://www.allure.com/feed/all", "https://www.healthline.com/feed"],
  fashion: ["https://www.vogue.com/rss.xml", "https://www.highsnobiety.com/feed"],
  wellness: ["https://www.nytimes.com/services/xml/rss/nyt/Well.xml", "https://www.psychologytoday.com/intl/rss.xml"],
  inspiration: ["https://www.theguardian.com/world/rss", "https://www.nationalgeographic.com/content/nationalgeographic/en/rss"],
  angola: [
    // Feeds angolanos que pudeste encontrar
    "https://angola24horas.com/index.php/lifestyle/itemlist/category/49-moda-e-beleza",  
    "https://noticiasdeangola.co.ao/feed"
    // podes adicionar mais se encontrares
  ],
};

const ALL_FEEDS = Array.from(new Set(Object.values(FEEDS_BY_CATEGORY).flat()));

const BARZA_KEYWORDS = [
  "hair", "hairstyle", "cabelo", "barber", "barbearia", "beleza", "beauty",
  "skin", "skincare", "makeup", "moda", "fashion", "grooming", "unhas", "lifestyle"
];

async function parseXMLString(xmlString: string) {
  const { JSDOM } = await import("jsdom");
  const parser = new JSDOM(xmlString, { contentType: "text/xml" });
  return parser.window.document;
}

function extractImageFromItem(item: Element): string | null {
  const enclosure = item.querySelector("enclosure[url]");
  if (enclosure) return enclosure.getAttribute("url");
  const mediaContent = item.getElementsByTagNameNS("*", "content")[0];
  if (mediaContent?.getAttribute) return mediaContent.getAttribute("url");
  const description = item.querySelector("description")?.textContent || "";
  const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1] : null;
}

function normalizeItem(item: Element, categoryKey: string, feedTitle?: string) {
  const title = item.querySelector("title")?.textContent?.trim() || "Sem título";
  const link = item.querySelector("link")?.textContent?.trim()
    || item.querySelector("guid")?.textContent?.trim()
    || "";
  const pubDate = item.querySelector("pubDate")?.textContent?.trim() || null;
  const excerpt = (item.querySelector("description")?.textContent || "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
  const image = extractImageFromItem(item);
  const id = link || `${title}-${pubDate || Math.random().toString(36).slice(2, 7)}`;

  return {
    id,
    title,
    excerpt: excerpt ? (excerpt.length > 200 ? excerpt.slice(0, 200) + "…" : excerpt) : undefined,
    content: excerpt,
    image: image || null,
    category: categoryKey,
    link,
    source: feedTitle || null,
    publishedAt: pubDate,
  };
}

function isRelevantToBarza(item: any): boolean {
  const text = `${item.title} ${item.excerpt}`.toLowerCase();
  return BARZA_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
}

async function fetchFeed(url: string, categoryKey: string) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const doc = await parseXMLString(text);
    const channelTitle = doc.querySelector("channel > title")?.textContent?.trim() || null;
    const items = Array.from(doc.querySelectorAll("item"));
    return items.map(it => normalizeItem(it, categoryKey, channelTitle));
  } catch (err) {
    console.error("Error fetching feed:", err);
    return [];
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "all";

  const feedUrls = category === "all"
    ? ALL_FEEDS
    : FEEDS_BY_CATEGORY[category] || [];
  if (feedUrls.length === 0) {
    return NextResponse.json({ error: "Categoria inválida" }, { status: 400 });
  }

  const results = await Promise.all(feedUrls.map(url => fetchFeed(url, category)));
  const merged = results.flat();

  // filtra só os relevantes
  const filtered = merged.filter(isRelevantToBarza);

  // remove duplicados
  const map = new Map<string, any>();
  for (const art of filtered) {
    if (!map.has(art.id)) map.set(art.id, art);
  }
  const finalArr = Array.from(map.values());

  // ordena por data
  finalArr.sort(
    (a, b) =>
      (b.publishedAt ? Date.parse(b.publishedAt) : 0) -
      (a.publishedAt ? Date.parse(a.publishedAt) : 0)
  );

  return NextResponse.json(finalArr);
}
