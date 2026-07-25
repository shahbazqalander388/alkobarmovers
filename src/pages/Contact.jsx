import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../components/seo/JsonLd';
import { company } from '../data/company';
import { services } from '../data/services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    const text = `*New Moving Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'N/A'}%0A*Service:* ${formData.service || 'N/A'}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${company.phoneClean}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: company.phone,
      href: `tel:${company.phoneClean}`,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: company.whatsapp,
      href: company.social.whatsappLink,
      external: true,
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: company.address,
      href: company.mapUrl,
      external: true,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Open 24/7 — Always Available',
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact Al Khobar Movers for a free moving quote. Call +966 50 815 5432 or WhatsApp us. Available 24/7 for house shifting, office relocation, and all moving services."
        keywords="contact al khobar movers, moving quote, call movers, whatsapp movers, moving service contact"
        canonical="/contact"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <WebPageJsonLd type="ContactPage" title="Contact Us | Al Khobar Movers" description="Contact Al Khobar Movers for a free moving quote. Call +966 50 815 5432 or WhatsApp us." url="https://alkhobarmovers.com/contact" />

      {/* Hero */}
      <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-orange-500/20 text-orange-300">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Touch
              </span>
            </h1>
            <p className="text-lg text-blue-100/70">
              Ready to plan your move? Contact us for a free quote. Our team is available 24/7 to assist you.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <SectionHeading
                subtitle="Free Quote"
                title="Send Us a Message"
                description="Fill out the form below and we'll get back to you within an hour."
                center={false}
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 bg-green-50 rounded-2xl border border-green-100"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-900"
                      placeholder="Tell us about your moving needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-h-[48px]"
                  >
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                    Send on WhatsApp
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-2xl p-8 text-white sticky top-28">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-white/10 shrink-0`}>
                        <info.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200 mb-1">{info.title}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.external ? '_blank' : undefined}
                            rel={info.external ? 'noopener noreferrer' : undefined}
                            className="text-white font-medium hover:text-orange-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${company.phoneClean}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href={company.social.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Google Map */}
      <section className="bg-slate-50">
        <Container>
          <div className="py-16">
            <SectionHeading
              subtitle="Our Location"
              title="Find Us on the Map"
              description="Visit our office or let us come to you — we serve the entire Eastern Province and beyond."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src={company.mapEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Khobar Movers Location"
                className="w-full"
              />
              <div className="bg-slate-900 text-white p-4 text-center border-t border-slate-800">
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Location in Google Maps app</span>
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
