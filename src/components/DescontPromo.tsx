import React from "react"
import { Users,  Gift, } from "lucide-react"

const GroupDiscountPromo: React.FC = () => {
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
            Promoção Exclusiva
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Desconto Progressivo em Grupo 🎉
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Quanto mais amigos traz, menos paga!  
            Até <span className="font-semibold text-orange-600">10% OFF</span> em reservas de 4 pessoas no total.
          </p>

          {/* Discount Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {[
              { people: 1, discount: "Preço normal", color: "from-gray-200 to-gray-300" },
              { people: 2, discount: "-5%", color: "from-blue-400 to-blue-600" },
              { people: 3, discount: "-7%", color: "from-green-400 to-green-600" },
              { people: 4, discount: "-10%", color: "from-orange-400 to-orange-600" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mb-3 sm:mb-4`}
                >
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {step.people} Pessoa{step.people > 1 ? "s" : ""}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{step.discount}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Button */}
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="mr-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
            
            {/* Google Play Button */}
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="mr-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default GroupDiscountPromo
