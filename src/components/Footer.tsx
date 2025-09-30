import React from 'react';
import { Scissors, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <Scissors className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold">Barza</span>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-8">
            <span>{t('madeWith')}</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>{t('inAfrica')}</span>
            <span className="text-orange-400">{t('forTheWorld')}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              {t('features')}
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              {t('download')}
            </a>
            
            {/* Links externos para páginas */}
           
<Link to="/privacy" className="hover:text-white transition-colors">
  Privacy Policy
</Link>
<Link to="/terms" className="hover:text-white transition-colors">
  Terms of Service
</Link>

           
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Barza. All rights reserved. | Connecting excellence worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
