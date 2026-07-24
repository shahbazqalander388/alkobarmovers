export const company = {
  name: 'Al Khobar Movers',
  tagline: 'Professional Moving & Shifting Services',
  email: 'akhter90khan@gmail.com',
  phone: '+966 50 815 5432',
  phoneClean: '+966508155432',
  whatsapp: '+966 50 815 5432',
  whatsappClean: '966508155432',
  hours: '24/7 Always Available',
  address: 'Al Khobar, Eastern Province, Saudi Arabia',
  mapUrl: 'https://maps.app.goo.gl/oaLSPmPakNcDzmF97',
  mapEmbed: 'https://maps.google.com/maps?q=76G5%2BW42%2C+Al+Khobar+Al+Janubiyah%2C+Al+Khobar+34621%2C+Saudi+Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed',
  coordinates: {
    lat: 26.2772847,
    lng: 50.2077659,
  },
  baseUrl: 'https://alkhobarmovers.com',
  social: {
    whatsappLink: 'https://wa.me/966508155432?text=Hello%20Al%20Khobar%20Movers,%0A%0AI%27m%20interested%20in%20your%20moving%20services.%20Please%20contact%20me.',
  },
};

export const createWhatsAppUrl = ({ name, phone, email, service, message }) => {
  const formattedText = `Hello Al Khobar Movers,\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nService: ${service || 'General Inquiry'}\nMessage: ${message}\n\nI'm interested in your moving services. Please contact me.`;
  return `https://wa.me/966508155432?text=${encodeURIComponent(formattedText)}`;
};

export const stats = [
  { id: 1, value: 2500, suffix: '+', label: 'Happy Customers' },
  { id: 2, value: 5000, suffix: '+', label: 'Moves Completed' },
  { id: 3, value: 12, suffix: '+', label: 'Years Experience' },
  { id: 4, value: 6, suffix: '', label: 'Cities Served' },
];
