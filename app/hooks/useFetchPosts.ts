"use client"
import { useState, useEffect } from "react";

export function useBlogFetch(category = "all") {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/blog?category=${category}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao carregar artigos");
      setArticles(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [category]);

  return { articles, loading, error, refresh: fetchArticles };
}
