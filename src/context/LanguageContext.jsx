import React, { createContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { ar } from '../locales/ar';
import { ur } from '../locales/ur';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const dictionaries = {
    en,
    ar,
    ur,
  };

  const t = (key) => {
    return dictionaries[lang][key] || key;
  };

  const handleSetLang = (newLang) => {
    setLang(newLang);
    document.documentElement.lang = newLang;
    if (newLang === 'ar' || newLang === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  useEffect(() => {
    handleSetLang(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
