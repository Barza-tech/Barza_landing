import React from 'react';
import { Users, Gift } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const GroupDiscountPromo: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { people: 1, discount: t('promoStep1'), color: 'from-gray-200 to-gray-300' },
    { people: 2, discount: t('promoStep2'), color: 'from-blue-400 to-blue-600' },
    { people: 3, discount: t('promoStep3'), color: 'from-green-400 to-green-600' },
    { people: 4, discount: t('promoStep4'), color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-orange-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-green-400/20 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Gift className="w-4 h-4 mr-1.5" />
            {t('promoBadge')}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('promoTitle')}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('promoSubtitle')}
          </p>

          {/* Discount Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mb-3 sm:mb-4`}
                >
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {step.people} {step.people > 1 ? t('promoPeoplePlural') : t('promoPeople')}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{step.discount}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
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
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default GroupDiscountPromo;
