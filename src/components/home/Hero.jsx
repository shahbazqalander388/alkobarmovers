import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import Container from '../ui/Container';
import { company } from '../../data/company';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16 sm:pt-20 scroll-mt-16 sm:scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dai2g47e4/image/upload/f_auto,q_auto,w_1920/v1784807472/WhatsApp_Image_2026-07-23_at_1.53.58_AM_duc6cj.jpg"
          alt="Professional moving services by Al Khobar Movers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-green-950/90 to-slate-900/85" />
      </div>

      {/* Floating decorative ambient circles */}
      <motion.div
        className="absolute top-24 right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-green-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-8 bg-yellow-400 text-slate-900 rounded-full font-bold text-[11px] sm:text-xs md:text-sm shadow-md"
          >
            <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
            <span>Trusted by 2,500+ Customers Across Saudi Arabia</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Professional{' '}
            <span className="text-yellow-400 underline decoration-green-500 underline-offset-8">
              Moving &
            </span>
            <br />
            Shifting Services
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl leading-relaxed font-normal"
          >
            Experience hassle-free relocation with Al Khobar Movers. From packing to destination delivery,
            we handle house, apartment, villa, and office moves 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10"
          >
            {/* Primary Green Button */}
            <a
              href={`tel:${company.phoneClean}`}
              className="group flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-green-600/30 hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
            >
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>Call Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-400" />
            </a>

            {/* Secondary Yellow Button */}
            <a
              href={company.social.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl shadow-yellow-400/30 hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 text-slate-900" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
          >
            {[
              { icon: Shield, text: 'Fully Insured' },
              { icon: Clock, text: 'Available 24/7' },
              { icon: Star, text: '4.9★ Top Rating' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white font-medium">
                <Icon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm md:text-base">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
