import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Home, Briefcase, PackageOpen, Wrench, Warehouse, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useContext(LanguageContext);

  const services = [
    {
      icon: Home,
      titleKey: 'srvHouse',
      descKey: 'srvHouseDesc',
    },
    {
      icon: Briefcase,
      titleKey: 'srvOffice',
      descKey: 'srvOfficeDesc',
    },
    {
      icon: PackageOpen,
      titleKey: 'srvPacking',
      descKey: 'srvPackingDesc',
    },
    {
      icon: Wrench,
      titleKey: 'srvFurniture',
      descKey: 'srvFurnitureDesc',
    },
    {
      icon: Warehouse,
      titleKey: 'srvStorage',
      descKey: 'srvStorageDesc',
    },
    {
      icon: Truck,
      titleKey: 'srvTransport',
      descKey: 'srvTransportDesc',
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('servicesTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">{t('servicesSubtitle')}</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
