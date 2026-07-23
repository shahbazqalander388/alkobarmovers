import { motion } from 'framer-motion';

const SectionHeading = ({ subtitle, title, description, light = false, center = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs md:text-sm font-bold tracking-wider uppercase rounded-full bg-yellow-400 text-slate-900 shadow-sm">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-emerald-100' : 'text-slate-600'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
