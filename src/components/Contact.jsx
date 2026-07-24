import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('contactTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">{t('contactSubtitle')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t('phone')}</h4>
                <p className="text-slate-600">Available 24/7 on WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t('email')}</h4>
                <p className="text-slate-600">Send us an email</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t('addressTitle')}</h4>
                <p className="text-slate-600">{t('addressText')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t('hoursTitle')}</h4>
                <p className="text-slate-600">{t('hoursText')}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=AlRahmaniya+Center,+King+Saud+St,+Al+Khobar+Al+Shamalia,+Al+Khobar+34429&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
