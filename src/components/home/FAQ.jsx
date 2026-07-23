import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faq';

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors"
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
        <span className={`shrink-0 p-1 rounded-full transition-colors ${
          isOpen ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600'
        }`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our moving services."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
