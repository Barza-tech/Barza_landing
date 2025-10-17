// src/hooks/useBlogFetch.ts
/*import { useCallback, useEffect, useMemo, useState } from "react";

type Article = {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string | null;
  category: string;
  link: string;
  lang?: string | null;
  source?: string | null;
  publishedAt?: string | null;
};

type UseBlogFetchReturn = {
  articles: Article[];
  loading: boolean;
  error: string | null;
  fetchByCategory: (categoryKey: string) => void;
  refresh: () => void;
};

const CACHE_KEY_PREFIX = "barza_blog_cache_v1";
const CACHE_TTL_SECONDS = 60 * 60; // 1 hora
const DEFAULT_CATEGORY = "all";

const FEEDS_BY_CATEGORY: Record<string, string[]> = {
  grooming: ["https://www.gq.com/feed/style.xml", "https://www.menshealth.com/rss/all.xml"],
  skincare: ["https://www.allure.com/feed/all", "https://www.healthline.com/feed"],
  fashion: ["https://www.vogue.com/rss.xml", "https://www.highsnobiety.com/feed"],
  wellness: ["https://www.nytimes.com/services/xml/rss/nyt/Well.xml", "https://www.psychologytoday.com/intl/rss.xml"],
  inspiration: ["https://www.theguardian.com/world/rss", "https://www.nationalgeographic.com/content/nationalgeographic/en/rss"],
};

const ALL_FEEDS = Array.from(new Set(Object.values(FEEDS_BY_CATEGORY).flat()));

function cacheKeyForCategory(category: string) {
  return `${CACHE_KEY_PREFIX}::${category}`;
}

function isCacheValid(stored: { ts: number } | null) {
  if (!stored) return false;
  const age = Date.now() - stored.ts;
  return age / 1000 < CACHE_TTL_SECONDS;
}

async function parseXMLString(xmlString: string) {
  const parser = new DOMParser();
  return parser.parseFromString(xmlString, "application/xml");
}

function extractImageFromItem(item: Element): string | null {
  const enclosure = item.querySelector("enclosure[url]");
  if (enclosure) return enclosure.getAttribute("url");

  const mediaContent = item.getElementsByTagNameNS("*", "content")[0];
  if (mediaContent?.getAttribute) return mediaContent.getAttribute("url");

  const media = item.getElementsByTagName("media:content")[0] as any;
  if (media?.getAttribute) return media.getAttribute("url");

  const description = item.querySelector("description")?.textContent || "";
  const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) return imgMatch[1];

  return null;
}

function normalizeItem(item: Element, categoryKey: string, feedTitle?: string): Article {
  const title = item.querySelector("title")?.textContent?.trim() || "Sem título";
  const link = item.querySelector("link")?.textContent?.trim() || item.querySelector("guid")?.textContent?.trim() || "";
  const pubDate = item.querySelector("pubDate")?.textContent?.trim() || null;
  const excerpt = (item.querySelector("description")?.textContent || "").replace(/<\/?[^>]+(>|$)/g, "").trim();
  const content = excerpt;
  const image = extractImageFromItem(item);
  const id = link || `${title}-${pubDate || Math.random().toString(36).slice(2, 7)}`;

  return {
    id,
    title,
    excerpt: excerpt ? (excerpt.length > 200 ? excerpt.slice(0, 200) + "…" : excerpt) : undefined,
    content,
    image: image || null,
    category: categoryKey,
    link,
    source: feedTitle || null,
    publishedAt: pubDate,
  };
}

async function fetchFeed(url: string, categoryKey: string): Promise<Article[]> {
  try {
    console.log(`[useBlogFetch] Fetching feed: ${url}`);
    const res = await fetch(`https://cors.bridged.cc/${url}`);
    const text = await res.text();
    const doc = await parseXMLString(text);
    const channelTitle = doc.querySelector("channel > title")?.textContent?.trim() || null;
    const items = Array.from(doc.querySelectorAll("item"));
    console.log(`[useBlogFetch] Found ${items.length} items in feed ${url}`);
    return items.map(it => normalizeItem(it, categoryKey, channelTitle));
  } catch (err) {
    console.error("[useBlogFetch] fetchFeed error", err);
    return [];
  }
}

export function useBlogFetch(initialCategory = DEFAULT_CATEGORY): UseBlogFetchReturn {
  const [category, setCategory] = useState<string>(initialCategory);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = useMemo(() => cacheKeyForCategory(category), [category]);

  const fetchAndCache = useCallback(async () => {
    console.log(`[useBlogFetch] Start fetch for category: ${category}`);
    setLoading(true);
    setError(null);

    try {
      const rawCache = localStorage.getItem(cacheKey);
      if (rawCache) {
        const parsed = JSON.parse(rawCache) as { ts: number; data: Article[] };
        if (isCacheValid(parsed) && parsed.data.length > 0) {
          console.log(`[useBlogFetch] Using cache for category ${category}, ${parsed.data.length} articles`);
          setArticles(parsed.data);
          setLoading(false);
          return;
        } else {
          console.log(`[useBlogFetch] Cache empty or expired for category ${category}`);
        }
      }

      const feedUrls = category === "all" ? ALL_FEEDS : FEEDS_BY_CATEGORY[category] || [];
      console.log(`[useBlogFetch] Fetching feeds:`, feedUrls);

      const results = await Promise.all(feedUrls.map(url => fetchFeed(url, category)));
      const merged = results.flat();
      console.log(`[useBlogFetch] Total articles fetched: ${merged.length}`);

      const map = new Map<string, Article>();
      for (const art of merged) if (!map.has(art.id)) map.set(art.id, art);

      const finalArr = Array.from(map.values());
      finalArr.sort((a, b) => (b.publishedAt ? Date.parse(b.publishedAt) : 0) - (a.publishedAt ? Date.parse(a.publishedAt) : 0));
      console.log(`[useBlogFetch] Final articles after deduplication: ${finalArr.length}`);

      localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: finalArr }));
      setArticles(finalArr);
    } catch (err: any) {
      console.error("[useBlogFetch] Error fetching articles:", err);
      setError(String(err));
    } finally {
      setLoading(false);
      console.log(`[useBlogFetch] Fetch finished for category: ${category}`);
    }
  }, [cacheKey, category]);

  useEffect(() => {
    fetchAndCache();
  }, [fetchAndCache]);

  return {
    articles,
    loading,
    error,
    fetchByCategory: (cat: string) => {
      console.log(`[useBlogFetch] Switching category to: ${cat}`);
      setCategory(cat);
    },
    refresh: () => {
      console.log(`[useBlogFetch] Refresh triggered for category: ${category}`);
      localStorage.removeItem(cacheKey);
      fetchAndCache();
    },
  };
}

export default useBlogFetch;'*/
