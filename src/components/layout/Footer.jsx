import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Truck, ChevronRight, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import { company } from '../../data/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const quickLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Services', path: '/services', id: 'services' },
    { label: 'Gallery', path: '/gallery', id: 'gallery' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ];

  const serviceLinks = [
    { label: 'House Shifting', path: '/services' },
    { label: 'Office Relocation', path: '/services' },
    { label: 'Furniture Moving', path: '/services' },
    { label: 'Packing Services', path: '/services' },
    { label: 'Long Distance Moving', path: '/services' },
  ];

  const handleFooterNavClick = (e, link) => {
    if (location.pathname === '/') {
      e.preventDefault();
      if (link.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(link.id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', `#${link.id}`);
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer */}
      <div className="pt-16 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-green-600 text-yellow-400">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Al Khobar</span>
                  <span className="text-xl font-bold text-yellow-400"> Movers</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Your trusted partner for professional moving and shifting services across Saudi
                Arabia. Available 24/7 for house, villa, apartment, and office relocations.
              </p>
              <div className="flex gap-3">
                <a
                  href={company.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-green-600 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${company.phoneClean}`}
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-green-600 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-yellow-500 text-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-110"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-bold text-white mb-6 border-l-4 border-yellow-400 pl-3">Quick Links</h2>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleFooterNavClick(e, link)}
                      className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors group text-sm font-medium p-1"
                    >
                      <ChevronRight className="w-4 h-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-bold text-white mb-6 border-l-4 border-yellow-400 pl-3">Our Services</h2>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors group text-sm font-medium p-1"
                    >
                      <ChevronRight className="w-4 h-4 text-green-500 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-bold text-white mb-6 border-l-4 border-yellow-400 pl-3">Contact Info</h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`tel:${company.phoneClean}`} className="flex items-start gap-3 text-slate-300 hover:text-yellow-400 transition-colors p-1">
                    <Phone className="w-5 h-5 mt-0.5 text-green-500 shrink-0" />
                    <span>{company.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-slate-300 hover:text-yellow-400 transition-colors p-1">
                    <Mail className="w-5 h-5 mt-0.5 text-green-500 shrink-0" />
                    <span>{company.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-300 p-1">
                  <MapPin className="w-5 h-5 mt-0.5 text-green-500 shrink-0" />
                  <span>{company.address}</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 p-1">
                  <Clock className="w-5 h-5 mt-0.5 text-yellow-400 shrink-0" />
                  <span className="font-semibold text-white">Open 24/7 — Always Available</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <Container>
          <div className="pt-6 pb-24 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500 text-center md:text-left">
            <p>© {currentYear} Al Khobar Movers. All rights reserved.</p>
            <p className="text-slate-400 font-medium">Professional Moving & Shifting Services across Saudi Arabia</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
