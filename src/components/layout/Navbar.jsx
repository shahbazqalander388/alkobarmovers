import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Truck, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import { company } from '../../data/company';

const navItems = [
  { id: 'home', label: 'Home', path: '/#home' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'services', label: 'Services', path: '/#services' },
  { id: 'gallery', label: 'Gallery', path: '/#gallery' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to highlight active section on the Home page
  useEffect(() => {
    if (location.pathname !== '/') {
      // If we are on another page, just set active based on pathname (if applicable)
      const currentPath = location.pathname.replace('/', '');
      setActiveSection(currentPath || 'home');
      return;
    }

    const handleScrollSpy = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let current = 'home';

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust threshold based on header height
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Trigger immediately
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle navigation click
  const handleNavClick = (e, item) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    
    if (wasOpen) {
      document.body.style.overflow = '';
    }
    
    // If we're already on the home page, scroll to the section
    if (location.pathname === '/') {
      const scroll = () => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(item.id);
        }
      };

      if (wasOpen) {
        // Wait for mobile menu closing animation to finish so viewport height is correct
        setTimeout(scroll, 300);
      } else {
        scroll();
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-2 sm:py-3'
          : 'bg-white py-2.5 sm:py-4 border-b border-slate-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/#home"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                handleNavClick(e, { id: 'home' });
              } else {
                setIsOpen(false);
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="p-2 sm:p-2.5 rounded-xl bg-green-600 text-yellow-400 shadow-md group-hover:bg-green-700 transition-colors">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-600 tracking-tight">
                  Al Khobar
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight ml-1">
                  Movers
                </span>
                <span className="w-2 h-2 rounded-full bg-yellow-400 ml-1 mt-1 animate-pulse" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider -mt-1">
                Saudi Arabia 24/7
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(e, item);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className={`relative px-4 py-2 text-sm md:text-base transition-all duration-200 ${
                    isActive
                      ? 'text-green-600 font-bold'
                      : 'text-slate-700 hover:text-green-600 font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-yellow-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${company.phoneClean}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>Call Now</span>
            </a>
            <a
              href={company.social.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm shadow-md transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-slate-900" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-green-600" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-y-auto max-h-[calc(100dvh-60px)]"
          >
            <Container className="py-4 sm:py-5 space-y-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        if (location.pathname === '/') {
                          e.preventDefault();
                          handleNavClick(e, item);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all min-h-[48px] ${
                        isActive
                          ? 'bg-green-50 text-green-600 border-l-4 border-yellow-400'
                          : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${company.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm shadow-md min-h-[48px] active:bg-green-800"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  Call Now
                </a>
                <a
                  href={company.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-xl font-bold text-sm shadow-md min-h-[48px] active:bg-yellow-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
