import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuoteForm() {
  const { t } = useContext(LanguageContext);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Quote Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Moving From:* ${formData.movingFrom}%0A*Moving To:* ${formData.movingTo}%0A*Date:* ${formData.date}%0A*Details:* ${formData.message}`;
    
    // Open WhatsApp
    const waUrl = `https://wa.me/966508155432?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="quote" className="py-24 bg-brand-green relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('quoteTitle')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/90">{t('quoteSubtitle')}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formName')} *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder={t('formName')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formPhone')} *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder={t('formPhone')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formEmail')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder={t('formEmail')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formDate')} *</label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formFrom')} *</label>
                <input 
                  type="text" 
                  name="movingFrom"
                  required
                  value={formData.movingFrom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder={t('formFrom')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('formTo')} *</label>
                <input 
                  type="text" 
                  name="movingTo"
                  required
                  value={formData.movingTo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder={t('formTo')}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{t('formMessage')}</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-slate-50 resize-none"
                placeholder={t('formMessage')}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-slate-900 font-bold text-lg py-4 rounded-xl transition-all hover:-translate-y-1 shadow-xl shadow-brand-yellow/30 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {t('formSubmit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
