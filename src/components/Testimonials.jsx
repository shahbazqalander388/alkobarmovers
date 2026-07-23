import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t } = useContext(LanguageContext);

  const testimonials = [
    { nameKey: 'test1Name', textKey: 'test1Text', rating: 5 },
    { nameKey: 'test2Name', textKey: 'test2Text', rating: 5 },
    { nameKey: 'test3Name', textKey: 'test3Text', rating: 5 }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('testTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">{t('testSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-slate-600 text-lg italic mb-6 relative z-10 leading-relaxed">
                "{t(test.textKey)}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {t(test.nameKey).charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t(test.nameKey)}</h4>
                  <p className="text-sm text-slate-500">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
