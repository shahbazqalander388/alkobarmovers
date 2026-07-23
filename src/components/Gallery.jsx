import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { t } = useContext(LanguageContext);

  const images = [
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807471/WhatsApp_Image_2026-07-23_at_1.53.56_AM_icu4wk.jpg",
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807470/WhatsApp_Image_2026-07-23_at_1.53.55_AM_1_b84d0k.jpg",
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807470/WhatsApp_Image_2026-07-23_at_1.53.54_AM_t7k9s1.jpg",
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807471/WhatsApp_Image_2026-07-23_at_1.53.57_AM_wdpzni.jpg",
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807470/WhatsApp_Image_2026-07-23_at_1.53.55_AM_mzztey.jpg",
    "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807472/WhatsApp_Image_2026-07-23_at_1.53.58_AM_duc6cj.jpg"
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('galleryTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">{t('gallerySubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-bold text-lg mb-1">{t('brandName')}</p>
                  <div className="w-8 h-1 bg-brand-yellow mx-auto rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
