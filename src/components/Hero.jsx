import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t, lang } = useContext(LanguageContext);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-green via-brand-green-dark to-brand-yellow pt-24 sm:pt-28 lg:pt-32">
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4 bg-brand-green/20 border border-brand-green/50 backdrop-blur-sm px-4 py-1.5 rounded-full w-max"
          >
            <ShieldCheck className="w-5 h-5 text-brand-yellow" />
            <span className="text-white font-medium text-sm tracking-wide">Trusted Moving Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-snug md:leading-normal mb-8"
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#quote" className="bg-brand-yellow hover:bg-brand-yellow-dark text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-xl shadow-brand-yellow/20">
              {t('heroCta')}
              {lang === 'ar' || lang === 'ur' ? <ArrowRight className="w-5 h-5 rotate-180" /> : <ArrowRight className="w-5 h-5" />}
            </a>
            <a href="tel:+966508155432" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-brand-yellow" />
              {t('phone')}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
               <Clock className="w-5 h-5 text-brand-yellow" />
               <span className="text-sm font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
               <MapPin className="w-5 h-5 text-brand-yellow" />
               <span className="text-sm font-medium">Across Saudi Arabia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
