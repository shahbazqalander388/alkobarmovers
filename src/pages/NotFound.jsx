import { motion } from 'framer-motion';
import { Home, Truck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SEOHead from '../components/seo/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been moved. Return to Al Khobar Movers home page."
        canonical="/404"
      />
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            {/* Animated truck icon */}
            <motion.div
              animate={{ x: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 text-orange-400 mb-8"
            >
              <Truck className="w-20 h-20" />
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-300 tracking-tight">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
              Looks like this path is a dead end!
            </h2>

            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
