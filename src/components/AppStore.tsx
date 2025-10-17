import React from 'react';
import { Download, Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const AppStore: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('downloadTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">{t('downloadSubtitle')}</p>
            <p className="text-lg text-gray-500">{t('downloadDescription')}</p>
          </div>

          {/* Stats
          
           <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-orange-500 mr-2">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
          */}

          {/* Download Buttons */}
          {/* Call to Action */}
          <div className="flex flex-row gap-4 justify-center">
            {/* Botão App Store (Disponível) */}
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

            {/* Botão Google Play (Em breve) */}
            <div className="opacity-60 cursor-not-allowed">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play (Em breve)"
                className="h-12 grayscale"
                title="Brevemente na Google Play"
              />
            </div>
          </div>

          {/* QR Code Alternative */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Ou digitalize o QR Code para descarregar</p>
            <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-xl mx-auto flex items-center justify-center">
              <img src="/apple.png" alt="QR Code Barza" className="w-28 h-28 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
