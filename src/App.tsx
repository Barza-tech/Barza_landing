import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppStore from './components/AppStore';
import Footer from './components/Footer';
import GroupDiscountPromo from './components/DescontPromo';



function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <GroupDiscountPromo/>
        <Features />
        <AppStore />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;