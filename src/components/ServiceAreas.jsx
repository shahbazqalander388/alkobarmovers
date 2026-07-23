import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceAreas() {
  const { t } = useContext(LanguageContext);

  const areas = [
    'areaRiyadh',
    'areaDammam',
    'areaKhobar',
    'areaJubail',
    'areaHofuf',
    'areaRasTanura'
  ];

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('areasTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">{t('areasSubtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-brand-green group transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-yellow transition-colors duration-300">
                <MapPin className="w-6 h-6 text-brand-yellow group-hover:text-brand-green transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                {t(area)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
