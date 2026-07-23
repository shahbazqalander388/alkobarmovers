import React, { useContext, useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['home', 'services', 'why-us', 'gallery', 'areas', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on navbar height
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navHome'), href: '#home', id: 'home' },
    { name: t('navServices'), href: '#services', id: 'services' },
    { name: t('navWhyUs'), href: '#why-us', id: 'why-us' },
    { name: t('navGallery'), href: '#gallery', id: 'gallery' },
    { name: t('navAreas'), href: '#areas', id: 'areas' },
    { name: t('navContact'), href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-brand-green' : 'text-white drop-shadow-md'}`}>
              {t('brandName')}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`font-medium transition-all hover:text-brand-yellow ${
                    isActive 
                      ? 'text-brand-yellow font-bold scale-105' 
                      : isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions: Lang + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="relative group">
              <button className={`flex items-center gap-1 font-medium ${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-brand-yellow transition-colors`}>
                <Globe className="w-5 h-5" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100">
                <button onClick={() => setLang('en')} className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-brand-green/10 hover:text-brand-green">English</button>
                <button onClick={() => setLang('ar')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-700 hover:bg-brand-green/10 hover:text-brand-green">العربية</button>
                <button onClick={() => setLang('ur')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-700 hover:bg-brand-green/10 hover:text-brand-green">اردو</button>
              </div>
            </div>

            <a href="#quote" className="bg-brand-yellow hover:bg-brand-yellow-dark text-slate-900 font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-yellow/30">
              {t('getQuoteBtn')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
              >
                <Globe className="w-5 h-5" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-white rounded-md shadow-lg transition-all duration-200 z-50">
                  <button onClick={() => { setLang('en'); setIsLangOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-slate-700">English</button>
                  <button onClick={() => { setLang('ar'); setIsLangOpen(false); }} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-700">العربية</button>
                  <button onClick={() => { setLang('ur'); setIsLangOpen(false); }} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-700">اردو</button>
                </div>
              )}
            </div>
            
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full inset-x-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-brand-green bg-brand-green/10' 
                      : 'text-slate-700 hover:text-brand-green hover:bg-brand-green/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="#quote"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-green text-white font-bold px-4 py-3 rounded-lg"
            >
              {t('getQuoteBtn')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
