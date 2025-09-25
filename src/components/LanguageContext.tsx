import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useEffect } from 'react';

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
    heroTitle: "Beleza e Estilo, Onde e Quando Quiser"
    ,
    heroSubtitle: 'Conectando profissionais de beleza ',
    heroDescription: 'Descubra profissionais de beleza móveis talentosos na sua área. Experiência profissional, conveniência moderna.',
    getStarted: 'Começar Agora',
    watchDemo: 'Ver Demonstração',
    
    // Features
    featuresTitle: 'Porque Escolher Barza?',
    featuresSubtitle: 'Conectamos você aos melhores profissionais',
    
    feature1Title: 'Profissionais Móveis',
    feature1Description: 'Profissionais qualificados vêm até você, onde quer que esteja',
    
    feature2Title: 'Notificações Inteligentes',
    feature2Description: 'Receba alertas sobre disponibilidade e promoções especiais',
    
    feature3Title: 'Serviço Premium',
    feature3Description: 'Experimente qualidade profissional com toque moderno',
    
    feature4Title: 'Reserva Fácil',
    feature4Description: 'Agende seu tratamento de beleza em poucos toques',
    
    // App Store Section
    downloadTitle: 'Baixe o Barza Hoje',
    downloadSubtitle: 'Disponível para iOS e Android',
    downloadDescription: 'Junte-se a nós e descobra a conveniência da Barza',
    
    // Footer
    madeWith: 'Feito ',
    inAfrica: 'com Paixão',
    forTheWorld: 'para o Mundo',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français',
    
    // Form
    formTitle: 'Junte-se à Revolução Barza',
    formSubtitle: 'Registo de Barbeiro',
    formPromoLabel: 'Oferta de Lançamento',
    formPromoMessage: 'Vagas limitadas! Garante já 1 mês de clientes gratuitamente antes do lançamento!',
    
    formNameLabel: 'Nome Completo',
    formNamePlaceholder: 'Digite o seu nome completo',
    formEmailLabel: 'Email',
    formEmailPlaceholder: 'exemplo@email.com',
    formPhoneLabel: 'Telefone',
    formPhonePlaceholder: '+224 920 000 000',
    formBarbershopLabel: 'Nome da Barbearia',
    formBarbershopPlaceholder: 'Nome da sua barbearia',
    
    formSubmitButton: 'Enviar',
    formSubmitting: 'Enviando...',
    formPrivacyNote: 'Os seus dados serão tratados com confidencialidade e utilizados apenas para contacto.',
    
    formSuccessTitle: 'Inscrição Enviada!',
    formSuccessMessage: 'Obrigado por se juntar à Barza. Entraremos em contacto em breve.',
    formSuccessDetails: 'Verifique o seu email para mais informações sobre os próximos passos.',
  promoBadge: "Promoção Exclusiva",
  promoTitle: "Desconto Progressivo em Grupo 🎉",
  promoSubtitle: "Quanto mais amigos traz, menos paga! Até 10% OFF em reservas de 4 pessoas no total.",
  promoStep1: "Preço normal",
  promoStep2: "-5%",
  promoStep3: "-7%",
  promoStep4: "-10%",
  promoPeople: "Pessoa",
  promoPeoplePlural: "Pessoas",
  appStoreTop: "Descarregar na",
  appStoreBottom: "App Store",
  playStoreTop: "Obter no",
  playStoreBottom: "Google Play",
  },
  
  en: {
    // Navigation
    features: 'Features',
    download: 'Download',
    about: 'About',
    
    // Hero Section
    heroTitle: 'Beauty and Style, Anytime, Anywhere',
    heroSubtitle: 'Connecting barbering cultures',
    heroDescription: 'Discover talented mobile barbers in your area. Professional expertise, modern convenience.',
    getStarted: 'Get Started',
    watchDemo: 'Watch Demo',
    
    // Features
    featuresTitle: 'Why Choose Barza?',
    featuresSubtitle: 'We connect you to the finest barbers',
    
    feature1Title: 'Mobile Barbers',
    feature1Description: 'Skilled professionals come to you, wherever you are',
    
    feature2Title: 'Smart Notifications',
    feature2Description: 'Get alerts about availability and special promotions',
    
    feature3Title: 'Premium Service',
    feature3Description: 'Experience professional quality with a modern twist',
    
    feature4Title: 'Easy Booking',
    feature4Description: 'Schedule your cut in a few taps, secure payment',
    
    // App Store Section
    downloadTitle: 'Download Barza Today',
    downloadSubtitle: 'Available for iOS and Android',
    downloadDescription: 'Join thousands of users who have already discovered the convenience of Barza',
    
    // Footer
    madeWith: 'Made with',
    inAfrica: 'Passion',
    forTheWorld: 'for the World',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français',
    
    // Form
    formTitle: 'Join the Barza Revolution',
    formSubtitle: 'Barber Registration',
    formPromoLabel: 'Launch Offer',
    formPromoMessage: 'Limited spots! Get 1 months of free clients before the launch!',
    
    formNameLabel: 'Full Name',
    formNamePlaceholder: 'Enter your full name',
    formEmailLabel: 'Email',
    formEmailPlaceholder: 'example@email.com',
    formPhoneLabel: 'Phone',
    formPhonePlaceholder: '+1 (555) 123-4567',
    formBarbershopLabel: 'Barbershop Name',
    formBarbershopPlaceholder: 'Your barbershop name',
    
    formSubmitButton: 'Submit',
    formSubmitting: 'Submitting...',
    formPrivacyNote: 'Your data will be treated confidentially and used only for contact purposes.',
    
    formSuccessTitle: 'Registration Sent!',
    formSuccessMessage: 'Thank you for joining Barza. We will contact you soon.',
    formSuccessDetails: 'Check your email for more information about the next steps.',
     promoBadge: "Exclusive Promotion",
  promoTitle: "Group Progressive Discount 🎉",
  promoSubtitle: "The more friends you bring, the less you pay! Up to 10% OFF for group bookings of 4 people.",
  promoStep1: "Normal Price",
  promoStep2: "-5%",
  promoStep3: "-7%",
  promoStep4: "-10%",
  promoPeople: "Person",
  promoPeoplePlural: "People",
  appStoreTop: "Download on the",
  appStoreBottom: "App Store",
  playStoreTop: "Get it on",
  playStoreBottom: "Google Play",
  },
  
  fr: {
    // Navigation
    features: 'Fonctionnalités',
    download: 'Télécharger',
    about: 'À Propos',
    
    // Hero Section
    heroTitle: 'Beauté et Style, Où et Quand Vous Voulez',
    heroSubtitle: 'Connecter les cultures de barbier',
    heroDescription: 'Découvrez des barbiers mobiles talentueux dans votre région. Expertise professionnelle, commodité moderne.',
    getStarted: 'Commencer',
    watchDemo: 'Voir la Démo',
    
    // Features
    featuresTitle: 'Pourquoi Choisir Barza?',
    featuresSubtitle: 'Nous vous connectons aux meilleurs barbiers',
    
    feature1Title: 'Barbiers Mobiles',
    feature1Description: 'Des professionnels qualifiés viennent à vous, où que vous soyez',
    
    feature2Title: 'Notifications Intelligentes',
    feature2Description: 'Recevez des alertes sur la disponibilité et les promotions spéciales',
    
    feature3Title: 'Service Premium',
    feature3Description: 'Découvrez la qualité professionnelle avec une touche moderne',
    
    feature4Title: 'Réservation Facile',
    feature4Description: 'Planifiez votre coupe en quelques clics, paiement sécurisé',
    
    // App Store Section
    downloadTitle: 'Téléchargez Barza Aujourd\'hui',
    downloadSubtitle: 'Disponible pour iOS et Android',
    downloadDescription: 'Rejoignez des milliers d\'utilisateurs qui ont déjà découvert la commodité de Barza',
    
    // Footer
    madeWith: 'Fait avec',
    inAfrica: 'Passion',
    forTheWorld: 'pour le Monde',
    
    // Languages
    portuguese: 'Português',
    english: 'English',
    french: 'Français',
    
    // Form
    formTitle: 'Rejoignez la Révolution Barza',
    formSubtitle: 'Inscription Barbier',
    formPromoLabel: 'Offre de Lancement',
    formPromoMessage: 'Places limitées ! Profitez de 1 mois de clients gratuits avant le lancement !',
    
    formNameLabel: 'Nom Complet',
    formNamePlaceholder: 'Entrez votre nom complet',
    formEmailLabel: 'Email',
    formEmailPlaceholder: 'exemple@email.com',
    formPhoneLabel: 'Téléphone',
    formPhonePlaceholder: '+33 1 23 45 67 89',
    formBarbershopLabel: 'Nom du Salon',
    formBarbershopPlaceholder: 'Le nom de votre salon',
    
    formSubmitButton: 'Envoyer',
    formSubmitting: 'Envoi...',
    formPrivacyNote: 'Vos données seront traitées confidentiellement et utilisées uniquement à des fins de contact.',
    
    formSuccessTitle: 'Inscription Envoyée!',
    formSuccessMessage: 'Merci de rejoindre Barza. Nous vous contactons bientôt.',
    formSuccessDetails: 'Vérifiez votre email pour plus d\'informations sur les prochaines étapes.',
      promoBadge: "Promotion Exclusive",
  promoTitle: "Réduction Progressive en Groupe 🎉",
  promoSubtitle: "Plus vous amenez d'amis, moins vous payez ! Jusqu'à 10% OFF pour les réservations de 4 personnes.",
  promoStep1: "Prix normal",
  promoStep2: "-5%",
  promoStep3: "-7%",
  promoStep4: "-10%",
  promoPeople: "Personne",
  promoPeoplePlural: "Personnes",
  appStoreTop: "Télécharger sur",
  appStoreBottom: "App Store",
  playStoreTop: "Disponible sur",
  playStoreBottom: "Google Play",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to detect browser language and return supported language
const detectBrowserLanguage = (): Language => {
  // Get browser language (primary language)
  const browserLang = navigator.language.toLowerCase();
  
  // Check for Portuguese (pt or pt-pt)
  if (browserLang === 'pt' || browserLang === 'pt-pt') {
    return 'pt';
  }
  
  // Check for French (fr or fr-fr)
  if (browserLang === 'fr' || browserLang === 'fr-fr') {
    return 'fr';
  }
  
  // Check for English (en, en-us, en-gb)
  if (browserLang === 'en' || browserLang === 'en-us' || browserLang === 'en-gb') {
    return 'en';
  }
  
  // Default to English for any other language
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage first
    const savedLanguage = localStorage.getItem('barza-language') as Language;
    if (savedLanguage && ['pt', 'en', 'fr'].includes(savedLanguage)) {
      return savedLanguage;
    }
    // If no saved language, detect from browser
    return detectBrowserLanguage();
  });
  
  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('barza-language', language);
  }, [language]);
  
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