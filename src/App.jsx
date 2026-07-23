import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import ServiceAreas from './components/ServiceAreas';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

function AppContent() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Al Khobar Movers",
    "image": "https://res.cloudinary.com/dai2g47e4/image/upload/v1784807471/WhatsApp_Image_2026-07-23_at_1.53.57_AM_wdpzni.jpg",
    "telephone": "+966 50 815 5432",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Al Khobar",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2731802,
      "longitude": 50.1172856
    },
    "url": "https://alkhobarmovers.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <Helmet>
        <title>Al Khobar Movers | Best House Shifting Company in Saudi Arabia</title>
        <meta name="description" content="Professional movers in Al Khobar offering house shifting, office relocation, packing & unpacking services across Saudi Arabia. 24/7 service. Call +966 50 815 5432" />
        <meta name="keywords" content="Al Khobar Movers, house shifting Saudi Arabia, office relocation Al Khobar, best movers Dammam, packing unpacking services Riyadh, moving company Jubail" />
        <meta property="og:title" content="Al Khobar Movers | Best House Shifting Company in Saudi Arabia" />
        <meta property="og:description" content="Professional movers in Al Khobar offering house shifting, office relocation, packing & unpacking services across Saudi Arabia. 24/7 service." />
        <meta property="og:image" content="https://res.cloudinary.com/dai2g47e4/image/upload/v1784807471/WhatsApp_Image_2026-07-23_at_1.53.57_AM_wdpzni.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <div className="font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <ServiceAreas />
          <QuoteForm />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
