"use client"

import type React from "react"
import { useState } from "react"
import { ShoppingBag, X, Loader2 } from "lucide-react"
import { useLanguage } from "./language-context"
import { useProducts } from "../app/hooks/use-products"

const BarzaProductsShowcase: React.FC = () => {
  const { t } = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const { data = [], loading, error } = useProducts() // garantir array

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-16 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <ShoppingBag className="w-4 h-4 mr-1.5" />
            {t("productsBadge")}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t("productsTitle")}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 sm:mb-16 leading-relaxed max-w-2xl mx-auto">
            {t("productsSubtitle")}
          </p>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
              <span className="ml-3 text-gray-600">{t("loading") || "A carregar produtos..."}</span>
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-500 font-medium py-6">
              {t("errorLoadingProducts") || "Erro ao carregar os produtos."}
            </p>
          )}

          {/* Product Carousel */}
          {!loading && !error && Array.isArray(data) && data.length > 0 && (
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6 scrollbar-hide">
              {data.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-lg snap-center transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="p-4 sm:p-6 flex flex-col items-center">
                    <img
                      src={product.image_url || "/images/default-product.png"}
                      alt={product.name}
                      className="w-40 h-40 object-contain mb-4 sm:mb-6"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 sm:mb-6 line-clamp-3">{product.description}</p>

                    {/* Preço em Kwanza corretamente */}
                    <p className="text-base font-bold text-orange-600 mb-3">
                      {product.promo_price && Number(product.promo_price) > 0
                        ? `Kz ${Number(product.promo_price).toLocaleString("pt-AO")}`
                        : `Kz ${Number(product.price).toLocaleString("pt-AO")}`}
                      {product.promo_price && Number(product.promo_price) > 0 && (
                        <span className="line-through text-gray-400 ml-2">
                          Kz {Number(product.price).toLocaleString("pt-AO")}
                        </span>
                      )}
                    </p>

                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
                    >
                      {t("Encomendar")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && (!Array.isArray(data) || data.length === 0) && (
            <p className="text-gray-600 italic py-10">{t("noProducts") || "Nenhum produto disponível no momento."}</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-11/12 sm:w-[480px] text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("downloadAppTitle")}</h3>
            <p className="text-gray-600 mb-8">{t("downloadAppSubtitle")}</p>

            <div className="flex flex-row gap-4 justify-center">
              {/* App Store */}
              <a
                href="https://apps.apple.com/app/barza/id6752736891"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>

              {/* Google Play (Brevemente) */}
              <div className="opacity-60 cursor-not-allowed">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play (Em breve)"
                  className="h-12 grayscale"
                  title="Brevemente na Google Play"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default BarzaProductsShowcase
