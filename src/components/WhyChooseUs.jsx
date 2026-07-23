import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Clock, Users, DollarSign, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const { t } = useContext(LanguageContext);
  
  // Choose one of the provided images for the background
  const bgImage = "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807470/WhatsApp_Image_2026-07-23_at_1.53.55_AM_mzztey.jpg";

  const reasons = [
    { icon: Clock, titleKey: 'why1', descKey: 'why1Desc' },
    { icon: Users, titleKey: 'why2', descKey: 'why2Desc' },
    { icon: DollarSign, titleKey: 'why3', descKey: 'why3Desc' },
    { icon: ShieldCheck, titleKey: 'why4', descKey: 'why4Desc' },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-green relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
         <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('whyUsTitle')}</h2>
            <div className="w-20 h-1 bg-brand-yellow mb-6 rounded-full"></div>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {t('whyUsSubtitle')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{t(reason.titleKey)}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{t(reason.descKey)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/50">
              <img 
                src="https://res.cloudinary.com/dai2g47e4/image/upload/v1784807472/WhatsApp_Image_2026-07-23_at_1.53.58_AM_duc6cj.jpg" 
                alt="Professional Movers" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-brand-yellow text-brand-green font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
                    10+
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Years of Experience</div>
                    <div className="text-white/80 text-sm">Trusted across Saudi Arabia</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
