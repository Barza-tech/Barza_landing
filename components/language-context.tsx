"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "pt" | "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    downloadTitle: "Descarregue a Barza",
downloadSubtitle: "A forma mais rápida e moderna de encontrar serviços de beleza.",
downloadDescription: "Baixe a aplicação na App Store ou utilize o QR Code para instalar diretamente no seu iPhone.",
downloadQRCodeText: "Ou digitalize o QR Code para descarregar",
comingSoonPlayStore: "Brevemente na Google Play",
    featuresTitle: "Funcionalidades",
    featuresSubtitle:
      "Descubra todas as funcionalidades incríveis que a Barza oferece para si.",
    feature1Title: "Localização Precisa",
    feature1Description:
      "Encontre profissionais de beleza próximos de si em segundos.",
    feature2Title: "Notificações Inteligentes",
    feature2Description:
      "Receba alertas sobre promoções e serviços importantes.",
    feature3Title: "App Móvel",
    feature3Description: "Aceda à Barza em qualquer lugar, a qualquer hora.",
    feature4Title: "Agendamento Fácil",
    feature4Description: "Marque os seus serviços de forma simples e rápida.",
    productsBadge: "Oferta Especial",
    productsTitle: "Nossos Produtos",
    productsSubtitle: "Confira os melhores produtos disponíveis agora.",
    promoBadge: "Oferta Especial",
    promoTitle: "Desconto em Grupo",
    promoSubtitle:
      "Traga os seus amigos e aproveite descontos exclusivos em serviços de beleza.",
    promoStep1: "Sem desconto",
    promoStep2: "5% de desconto",
    promoStep3: "10% de desconto",
    promoStep4: "15% de desconto",
    promoPeople: "Pessoa",
    promoPeoplePlural: "Pessoas",
    features: "Funcionalidades",
    download: "Descarregar",
    about: "Sobre",
    heroTitle: "Beleza e Estilo, Onde e Quando Quiser",
    heroSubtitle: "Conectando profissionais de beleza ",
    heroDescription:
      "Descubra profissionais de beleza móveis talentosos na sua área. Experiência profissional, conveniência moderna.",
    getStarted: "Começar Agora",
    // (... mantém o resto das traduções)
  },
  en: {
    downloadTitle: "Download Barza",
    downloadSubtitle:
      "The fastest and most modern way to find beauty services.",
    downloadDescription:
      "Get the app on the App Store or scan the QR Code to install directly on your iPhone.",
    downloadQRCodeText: "Or scan the QR Code to download",
    comingSoonPlayStore: "Coming soon to Google Play",
    featuresTitle: "Features",
    featuresSubtitle:
      "Discover all the amazing features that Barza offers for you.",
    feature1Title: "Precise Location",
    feature1Description: "Find beauty professionals near you in seconds.",
    feature2Title: "Smart Notifications",
    feature2Description: "Get alerts about promotions and important services.",
    feature3Title: "Mobile App",
    feature3Description: "Access Barza anywhere, anytime.",
    feature4Title: "Easy Booking",
    feature4Description: "Schedule your services quickly and easily.",
    productsTitle: "Our Products",
    productsSubtitle: "Check out the best products available now.",
    promoBadge: "Special Offer",
    promoTitle: "Group Discount",
    promoSubtitle:
      "Bring your friends and enjoy exclusive discounts on beauty services.",
    promoStep1: "No discount",
    promoStep2: "5% off",
    promoStep3: "10% off",
    promoStep4: "15% off",
    promoPeople: "Person",
    promoPeoplePlural: "People",
    features: "Features",
    download: "Download",
    about: "About",
    heroTitle: "Beauty and Style, Anytime, Anywhere",
    heroSubtitle: "Connecting barbering cultures",
    heroDescription:
      "Discover talented mobile barbers in your area. Professional expertise, modern convenience.",
    getStarted: "Get Started",
    // (... mantém o resto das traduções)
  },
  fr: {
    downloadTitle: "Télécharger Barza",
    downloadSubtitle:
      "La manière la plus rapide et moderne de trouver des services de beauté.",
    downloadDescription:
      "Téléchargez l'application sur l'App Store ou scannez le QR Code pour l’installer directement sur votre iPhone.",
    downloadQRCodeText: "Ou scannez le QR Code pour télécharger",
    comingSoonPlayStore: "Bientôt sur Google Play",
    featuresTitle: "Fonctionnalités",
    featuresSubtitle:
      "Découvrez toutes les fonctionnalités incroyables que Barza offre pour vous.",
    feature1Title: "Localisation Précise",
    feature1Description:
      "Trouvez des professionnels de la beauté près de chez vous en quelques secondes.",
    feature2Title: "Notifications Intelligentes",
    feature2Description:
      "Recevez des alertes sur les promotions et services importants.",
    feature3Title: "Application Mobile",
    feature3Description: "Accédez à Barza où que vous soyez, à tout moment.",
    feature4Title: "Réservation Facile",
    feature4Description: "Planifiez vos services rapidement et facilement.",
    productsTitle: "Nos Produits",
    productsSubtitle:
      "Découvrez les meilleurs produits disponibles maintenant.",
    promoBadge: "Offre Spéciale",
    promoTitle: "Remise de Groupe",
    promoSubtitle:
      "Amenez vos amis et profitez de réductions exclusives sur les services de beauté.",
    promoStep1: "Pas de remise",
    promoStep2: "5% de réduction",
    promoStep3: "10% de réduction",
    promoStep4: "15% de réduction",
    promoPeople: "Personne",
    promoPeoplePlural: "Personnes",
    features: "Fonctionnalités",
    download: "Télécharger",
    about: "À Propos",
    heroTitle: "Beauté et Style, Où et Quand Vous Voulez",
    heroSubtitle: "Connecter les cultures de barbier",
    heroDescription:
      "Découvrez des barbiers mobiles talentueux dans votre région. Expertise professionnelle, commodité moderne.",
    getStarted: "Commencer",
    // (... mantém o resto das traduções)
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Detecta o idioma do browser, mas só no cliente
const detectBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") return "en";

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("pt")) return "pt";
  if (browserLang.startsWith("fr")) return "fr";
  return "en";
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Só acede ao localStorage no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("barza-language") as Language;
      if (savedLanguage && ["pt", "en", "fr"].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        setLanguage(detectBrowserLanguage());
      }
    }
  }, []);

  // Guarda a preferência quando muda
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("barza-language", language);
    }
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
