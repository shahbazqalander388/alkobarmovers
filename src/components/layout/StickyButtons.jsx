import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { company } from '../../data/company';

const StickyButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={company.social.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-600 text-white rounded-full shadow-lg shadow-green-600/40 hover:shadow-xl hover:bg-green-700 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${company.phoneClean}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-yellow-400 text-slate-900 rounded-full shadow-lg shadow-yellow-400/40 hover:shadow-xl hover:bg-yellow-500 transition-all duration-300 font-bold"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
      </motion.a>
    </>
  );
};

export default StickyButtons;
