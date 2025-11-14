"use client"
import React, { useMemo, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import Header from './header';
import { useLanguage } from './language-context';
import { useBlogFetch } from '@/app/hooks/useFetchPosts';

/* Categorias Barza */
const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'grooming', label: 'Grooming Masculino' },
  { key: 'skincare', label: 'Beleza & Skincare' },
  { key: 'fashion', label: 'Moda & Estilo' },
  { key: 'wellness', label: 'Saúde & Bem-estar' },
  { key: 'inspiration', label: 'Inspiração & Cultura' },
];

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b9b3c1f3f7b8a1c7a9f2d3a8f6b1c2d';

type RemoteArticle = {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string | null;
  category?: string;
  link: string;
  lang?: string | null;
  source?: string | null;
  publishedAt?: string | null;
};

function inferCategoryFromText(text = ''): string {
  const s = text.toLowerCase();
  const groomingKeywords = ['beard', 'barba', 'haircut', 'barber', 'barbeiro', 'grooming', 'corte'];
  const skincareKeywords = ['skincare', 'skin', 'pele', 'moistur', 'retinol', 'vitamin c', 'spf'];
  const fashionKeywords = ['fashion', 'style', 'tend', 'outfit', 'moda', 'look'];
  const wellnessKeywords = ['wellness', 'health', 'sono', 'sleep', 'nutri', 'bem-estar'];
  const inspirationKeywords = ['culture', 'story', 'história', 'inspiration', 'viagem', 'arte'];

  if (groomingKeywords.some((k) => s.includes(k))) return 'grooming';
  if (skincareKeywords.some((k) => s.includes(k))) return 'skincare';
  if (fashionKeywords.some((k) => s.includes(k))) return 'fashion';
  if (wellnessKeywords.some((k) => s.includes(k))) return 'wellness';
  return 'inspiration';
}

function formatDate(dateStr?: string | null) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

const FeaturedArticlesLimited: React.FC = () => {
  const { t } = useLanguage();

  const { articles: remoteArticles, loading, error, refresh } = useBlogFetch('all');

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  /* Inferir categorias automaticamente */
  const articles: RemoteArticle[] = useMemo(() => {
    return (remoteArticles || []).map((a) => {
      const textToInspect = [a.title, a.excerpt, a.content, a.source].filter(Boolean).join(' ');
      const inferred = inferCategoryFromText(textToInspect);
      return { ...a, image: a.image || null, category: inferred };
    });
  }, [remoteArticles]);

  /* ✔️ LIMITAÇÃO: apenas 1 artigo principal + 6 abaixo */
  const limitedArticles = useMemo(() => {
    return articles.slice(0, 7); // 1 principal + 6
  }, [articles]);

  const featured = useMemo(() => limitedArticles.slice(0, 1), [limitedArticles]);

  const filtered = useMemo(() => limitedArticles, [limitedArticles]);

  const openArticle = (id: string) => setOpenArticleId(id);
  const closeArticle = () => setOpenArticleId(null);

  const currentArticle = useMemo(() => {
    return articles.find((a) => a.id === openArticleId) || null;
  }, [articles, openArticleId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24">
        {/* HERO — igual ao original */}
        <section className="container mx-auto px-6 -mt-6">
          <div className="rounded-3xl overflow-hidden">
            {featured[0] ? (
              <div className="relative">
                <img
                  src={featured[0].image || PLACEHOLDER}
                  alt={featured[0].title}
                  className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl flex items-end p-6">
                  <div className="text-white max-w-3xl">
                    <span className="inline-block bg-orange-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                      {CATEGORIES.find((c) => c.key === featured[0].category)?.label || 'Destaque'}
                    </span>
                    <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
                      {featured[0].title}
                    </h1>
                    <p className="mt-2 text-sm sm:text-base">{featured[0].excerpt}</p>
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => openArticle(featured[0].id)}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Ver artigo
                      </button>
                      <a
                        href={featured[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg font-medium"
                      >
                        Visitar fonte <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-72 sm:h-96 flex items-center justify-center bg-gray-200 rounded-3xl">
                <span className="text-gray-500">Sem destaques por agora</span>
              </div>
            )}
          </div>
        </section>

        {/* GRELHA ABAIXO */}
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('blogTitle') || 'Inspiração & Lifestyle'}
          </h2>

          {loading ? (
            <div className="py-12 flex justify-center">A carregar…</div>
          ) : error ? (
            <div className="py-12 text-center text-red-600">Erro: {error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(1).map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all border"
                  >
                    <div className="relative h-48">
                      <img
                        src={article.image || PLACEHOLDER}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      <button
                        onClick={() => openArticle(article.id)}
                        className="text-orange-500 font-semibold hover:underline"
                      >
                        Ver mais
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* ✔️ BOTÃO VER MAIS ARTIGOS */}
              <div className="mt-10 flex justify-center">
                <a
                  href="/blog"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow"
                >
                  Ver mais artigos
                </a>
              </div>
            </>
          )}
        </section>
      </main>

      {/* MODAL — igual ao original */}
      {currentArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={closeArticle} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-80">
              <img
                src={currentArticle.image || PLACEHOLDER}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 bg-white/30 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
              <p>{currentArticle.content || currentArticle.excerpt}</p>
              <a
                href={currentArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 border rounded-lg"
              >
                Visitar fonte <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedArticlesLimited;
