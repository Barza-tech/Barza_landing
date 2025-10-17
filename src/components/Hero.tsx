import React from 'react';
import { ArrowRight, Play, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Sample barber locations across different regions
  const barberLocations = [
    { id: 1, city: 'Downtown', country: 'Metro', x: '52%', y: '68%', active: true },
    { id: 2, city: 'Westside', country: 'City', x: '48%', y: '45%', active: true },
    { id: 3, city: 'Northend', country: 'District', x: '55%', y: '25%', active: false },
    { id: 4, city: 'Southbank', country: 'Area', x: '54%', y: '85%', active: true },
    { id: 5, city: 'Eastside', country: 'Zone', x: '62%', y: '52%', active: true },
    { id: 6, city: 'Central', country: 'Hub', x: '46%', y: '42%', active: false },
    { id: 7, city: 'Riverside', country: 'Quarter', x: '52%', y: '58%', active: true },
    { id: 8, city: 'Uptown', country: 'Sector', x: '63%', y: '45%', active: false },
    { id: 9, city: 'Midtown', country: 'Plaza', x: '46%', y: '22%', active: true },
    { id: 10, city: 'Oldtown', country: 'Village', x: '40%', y: '38%', active: true },
  ];

  return (
    <section className="pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden relative">
      {/* Map Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(0.5px)' }}
        >
          {/* Simplified world map outline */}
          <path
            d="M100 150 C150 140, 200 145, 250 160 C300 175, 350 190, 400 180 C450 170, 500 160, 550 170 C600 180, 650 190, 700 185 C750 180, 780 175, 780 200 C780 225, 750 250, 700 270 C650 290, 600 300, 550 295 C500 290, 450 285, 400 290 C350 295, 300 300, 250 295 C200 290, 150 285, 100 280 C50 275, 20 270, 20 245 C20 220, 50 195, 100 180 Z M200 300 C250 295, 300 300, 350 310 C400 320, 450 330, 500 325 C550 320, 600 315, 650 320 C700 325, 720 330, 720 350 C720 370, 700 390, 650 400 C600 410, 550 415, 500 410 C450 405, 400 400, 350 405 C300 410, 250 415, 200 410 C150 405, 120 400, 120 380 C120 360, 150 340, 200 330 Z"
            fill="url(#worldGradient)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.1)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Barber Location Pins */}
        {barberLocations.map((location) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{ left: location.x, top: location.y }}
          >
            <div className={`relative ${location.active ? 'animate-bounce' : ''}`}>
              {/* Pin */}
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center shadow-lg ${
                  location.active
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                    : 'bg-gradient-to-r from-gray-400 to-gray-600'
                }`}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 text-white text-xs">
                  ✂
                </div>
              </div>

              {/* Ripple effect for active locations */}
              {location.active && (
                <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-30"></div>
              )}

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-white px-2 py-1 rounded-lg shadow-lg text-xs font-medium text-gray-800 whitespace-nowrap">
                  {location.city}, {location.country}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {barberLocations
            .filter((loc) => loc.active)
            .map((location, index, activeLocations) =>
              activeLocations
                .slice(index + 1)
                .map((nextLocation, nextIndex) => (
                  <line
                    key={`${location.id}-${nextLocation.id}`}
                    x1={`${parseFloat(location.x)}`}
                    y1={`${parseFloat(location.y)}`}
                    x2={`${parseFloat(nextLocation.x)}`}
                    y2={`${parseFloat(nextLocation.y)}`}
                    stroke="rgba(249, 115, 22, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                ))
            )}
        </svg>
      </div>

      {/* Floating Map Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-10 left-1/4 sm:bottom-20 sm:left-1/3 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-400/20 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-12rem)]">
            {/* Phone Mockups - Mobile First */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
              <div className="relative flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6">
                {/* iPhone 16 */}
                <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 scale-75 sm:scale-85 md:scale-95 lg:scale-100">
                  <div className="w-48 h-96 sm:w-56 sm:h-[450px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 sm:top-3 lg:top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 sm:w-20 sm:h-5 lg:w-24 lg:h-6 bg-black rounded-full z-10"></div>

                    <div className="w-full h-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
                      {/* iPhone Content */}
                      <div className="p-3 sm:p-4 lg:p-6 text-center text-white pt-8 sm:pt-10 lg:pt-12">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white text-xs sm:text-sm lg:text-base">
                            ✂
                          </div>
                        </div>
                        <h2 className="text-sm sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 lg:mb-3">
                          Barza
                        </h2>
                        <p className="text-blue-100 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-xs lg:text-sm px-1 sm:px-2 leading-tight">
                          Encontre o profissional perfeito perto de si
                        </p>

                        <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                          <div className="bg-blue-700/50 rounded-md sm:rounded-lg lg:rounded-xl p-1.5 sm:p-2 lg:p-3 flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-orange-400 rounded sm:rounded-md lg:rounded-lg mr-1.5 sm:mr-2 lg:mr-3 flex items-center justify-center text-xs">
                              📍
                            </div>
                            <span className="text-blue-100 text-xs sm:text-xs lg:text-sm">
                              Profissionais móveis
                            </span>
                          </div>

                          <div className="bg-blue-700/50 rounded-md sm:rounded-lg lg:rounded-xl p-1.5 sm:p-2 lg:p-3 flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-orange-400 rounded sm:rounded-md lg:rounded-lg mr-1.5 sm:mr-2 lg:mr-3 flex items-center justify-center text-xs">
                              🔔
                            </div>
                            <span className="text-blue-100 text-xs sm:text-xs lg:text-sm">
                              Notificações
                            </span>
                          </div>
                        </div>

                        <button className="w-full bg-orange-500 text-white py-2 sm:py-2.5 lg:py-3 rounded-md sm:rounded-lg lg:rounded-xl font-semibold text-xs sm:text-sm lg:text-base">
                          Começar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* iPhone Label */}
                  <div className="absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full shadow-lg"></div>
                </div>

                {/* Samsung Galaxy S24 Ultra */}
                <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500 scale-75 sm:scale-85 md:scale-95 lg:scale-100">
                  <div className="w-48 h-96 sm:w-56 sm:h-[450px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] bg-gray-800 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                    {/* Samsung Punch Hole */}
                    <div className="absolute top-3 sm:top-4 lg:top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-black rounded-full z-10"></div>

                    <div className="w-full h-full bg-gradient-to-b from-orange-500 to-orange-700 rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem] relative overflow-hidden">
                      {/* Samsung Content */}
                      <div className="p-3 sm:p-4 lg:p-6 text-center text-white pt-8 sm:pt-10 lg:pt-12">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-blue-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white text-xs sm:text-sm lg:text-base">
                            ✂
                          </div>
                        </div>
                        <h2 className="text-sm sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 lg:mb-3">
                          Barza
                        </h2>
                        <p className="text-orange-100 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-xs lg:text-sm px-1 sm:px-2 leading-tight">
                          Beauty and Style, Anytime, Anywhere
                        </p>

                        <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                          <div className="bg-orange-600/50 rounded-md sm:rounded-lg lg:rounded-xl p-1.5 sm:p-2 lg:p-3 flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-blue-500 rounded sm:rounded-md lg:rounded-lg mr-1.5 sm:mr-2 lg:mr-3 flex items-center justify-center text-xs">
                              📱
                            </div>
                            <span className="text-orange-100 text-xs sm:text-xs lg:text-sm">
                              Mobile Professionals
                            </span>
                          </div>

                          <div className="bg-orange-600/50 rounded-md sm:rounded-lg lg:rounded-xl p-1.5 sm:p-2 lg:p-3 flex items-center">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-blue-500 rounded sm:rounded-md lg:rounded-lg mr-1.5 sm:mr-2 lg:mr-3 flex items-center justify-center text-xs">
                              ⭐
                            </div>
                            <span className="text-orange-100 text-xs sm:text-xs lg:text-sm">
                              Quality service
                            </span>
                          </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 sm:py-2.5 lg:py-3 rounded-md sm:rounded-lg lg:rounded-xl font-semibold text-xs sm:text-sm lg:text-base">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Samsung Label */}
                  <div className="absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full shadow-lg"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-1 sm:-right-2 lg:-right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-orange-400 rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg animate-bounce text-xs sm:text-sm lg:text-base">
                  ✂
                </div>
                <div className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -left-1 sm:-left-2 lg:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-blue-600 rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg animate-pulse text-xs sm:text-sm lg:text-base">
                  📱
                </div>
                <div className="absolute top-1/2 -left-3 sm:-left-4 lg:-left-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping text-xs sm:text-xs lg:text-sm">
                  ⭐
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 w-full max-w-2xl lg:max-w-none mx-auto">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {t('heroSubtitle')}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {t('heroTitle')}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
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
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default Hero;
