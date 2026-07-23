import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
    >
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-400/30"
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            scale: 0,
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Truck Icon */}
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="p-4 rounded-2xl bg-green-600 shadow-xl shadow-green-600/30"
      >
        <Truck className="w-16 h-16 text-yellow-400" />
      </motion.div>

      {/* Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-2xl md:text-3xl font-extrabold text-white"
      >
        Al Khobar <span className="text-yellow-400">Movers</span>
      </motion.h1>

      {/* Progress Bar */}
      <div className="mt-8 w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-sm font-medium text-slate-300"
      >
        Loading your moving experience...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
