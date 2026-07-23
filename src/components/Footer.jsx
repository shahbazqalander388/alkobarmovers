import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('brandName')}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              {t('footerDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-brand-yellow transition-colors">{t('navHome')}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-yellow transition-colors">{t('navServices')}</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-brand-yellow transition-colors">{t('navWhyUs')}</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-brand-yellow transition-colors">{t('navGallery')}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-yellow transition-colors">{t('navContact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{t('contactInfo')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li>{t('addressText')}</li>
              <li>{t('phone')}</li>
              <li>{t('email')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
