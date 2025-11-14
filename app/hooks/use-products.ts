// hooks/useProducts.ts
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products"); // chama a API server-side
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Erro ao carregar produtos");
        }

        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, loading, error };
};
