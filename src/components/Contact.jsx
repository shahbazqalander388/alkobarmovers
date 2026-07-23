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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114406.88373302061!2d50.11728560111161!3d26.273180230230302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e830e2f9d6c7%3A0xc3fbc12da285fc51!2sAl%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1714418648375!5m2!1sen!2s" 
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
