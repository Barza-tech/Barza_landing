import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    features: 'Funcionalidades',
    download: 'Descarregar',
    about: 'Sobre',
    
    // Hero Section
    heroTitle: 'Encontre o Barbeiro Perfeito',
    heroSubtitle: 'Conectando a cultura africana de barbearia ao mundo',
    heroDescription: 'Descubra barbeiros móveis talentosos na sua área em Angola e além. Experiência profissional, tradições autênticas, conveniência moderna.',
    getStarted: 'Começar Agora',
    watchDemo: 'Ver Demonstração',
    
    // Features
    featuresTitle: 'Porque Escolher Barza?',
    featuresSubtitle: 'Conectamos você aos melhores barbeiros da África',
    
    feature1Title: 'Barbeiros Móveis',
    feature1Description: 'Profissionais qualificados vêm até você, onde quer que esteja',
    
    feature2Title: 'Notificações Inteligentes',
    feature2Description: 'Receba alertas sobre disponibilidade e promoções especiais',
    
    feature3Title: 'Cultura Autêntica',
    feature3Description: 'Experimente tradições africanas de barbearia com toque moderno',
    
    feature4Title: 'Reserva Fácil',
    feature4Description: 'Agende seu corte em poucos toques, pagamento seguro',
    
    // App Store Section
    downloadTitle: 'Baixe o Barza Hoje',
    downloadSubtitle: 'Disponível para iOS e Android',
    downloadDescription: 'Junte-se a milhares de usuários que já descobriram a conveniência do Barza',
    
    // Footer
    madeWith: 'Feito com',
    inAfrica: 'em África',
    forTheWorld: 'para o Mundo',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français'
  },
  
  en: {
    // Navigation
    features: 'Features',
    download: 'Download',
    about: 'About',
    
    // Hero Section
    heroTitle: 'Find Your Perfect Barber',
    heroSubtitle: 'Connecting African barbering culture to the world',
    heroDescription: 'Discover talented mobile barbers in your area across Angola and beyond. Professional expertise, authentic traditions, modern convenience.',
    getStarted: 'Get Started',
    watchDemo: 'Watch Demo',
    
    // Features
    featuresTitle: 'Why Choose Barza?',
    featuresSubtitle: 'We connect you to Africa\'s finest barbers',
    
    feature1Title: 'Mobile Barbers',
    feature1Description: 'Skilled professionals come to you, wherever you are',
    
    feature2Title: 'Smart Notifications',
    feature2Description: 'Get alerts about availability and special promotions',
    
    feature3Title: 'Authentic Culture',
    feature3Description: 'Experience African barbering traditions with a modern twist',
    
    feature4Title: 'Easy Booking',
    feature4Description: 'Schedule your cut in a few taps, secure payment',
    
    // App Store Section
    downloadTitle: 'Download Barza Today',
    downloadSubtitle: 'Available for iOS and Android',
    downloadDescription: 'Join thousands of users who have already discovered the convenience of Barza',
    
    // Footer
    madeWith: 'Made with',
    inAfrica: 'in Africa',
    forTheWorld: 'for the World',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français'
  },
  
  fr: {
    // Navigation
    features: 'Fonctionnalités',
    download: 'Télécharger',
    about: 'À Propos',
    
    // Hero Section
    heroTitle: 'Trouvez Votre Barbier Parfait',
    heroSubtitle: 'Connecter la culture africaine de barbier au monde',
    heroDescription: 'Découvrez des barbiers mobiles talentueux dans votre région en Angola et au-delà. Expertise professionnelle, traditions authentiques, commodité moderne.',
    getStarted: 'Commencer',
    watchDemo: 'Voir la Démo',
    
    // Features
    featuresTitle: 'Pourquoi Choisir Barza?',
    featuresSubtitle: 'Nous vous connectons aux meilleurs barbiers d\'Afrique',
    
    feature1Title: 'Barbiers Mobiles',
    feature1Description: 'Des professionnels qualifiés viennent à vous, où que vous soyez',
    
    feature2Title: 'Notifications Intelligentes',
    feature2Description: 'Recevez des alertes sur la disponibilité et les promotions spéciales',
    
    feature3Title: 'Culture Authentique',
    feature3Description: 'Découvrez les traditions africaines de barbier avec une touche moderne',
    
    feature4Title: 'Réservation Facile',
    feature4Description: 'Planifiez votre coupe en quelques clics, paiement sécurisé',
    
    // App Store Section
    downloadTitle: 'Téléchargez Barza Aujourd\'hui',
    downloadSubtitle: 'Disponible pour iOS et Android',
    downloadDescription: 'Rejoignez des milliers d\'utilisateurs qui ont déjà découvert la commodité de Barza',
    
    // Footer
    madeWith: 'Fait avec',
    inAfrica: 'en Afrique',
    forTheWorld: 'pour le Monde',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};