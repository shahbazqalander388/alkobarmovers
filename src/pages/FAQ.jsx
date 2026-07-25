import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from '../components/seo/JsonLd';
import FAQComponent from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';

const faqs = [
  {
    question: 'How much does it cost to move within Al Khobar?',
    answer: 'The cost of moving within Al Khobar depends on several factors, including the size of your home, the volume of items, and any special packing requirements. We offer free, no-obligation surveys to provide you with an accurate and competitive quote.'
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes, we provide high-quality packing materials including sturdy boxes, bubble wrap, packing paper, and specialized cartons for wardrobes and fragile items. Our full-service packing option includes all necessary materials.'
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak moving seasons (summer and end of the month). However, we also accommodate last-minute moves based on availability.'
  },
  {
    question: 'Are my belongings insured during the move?',
    answer: 'Yes, we provide comprehensive transit insurance for your peace of mind. Our team takes the utmost care with your belongings, but our insurance covers any unexpected incidents during packing, transit, and unpacking.'
  },
  {
    question: 'Do you disassemble and reassemble furniture?',
    answer: 'Absolutely. Our trained carpenters will dismantle large furniture items (beds, wardrobes, dining tables) at your current location and professionally reassemble them at your new home.'
  },
  {
    question: 'Do you offer storage facilities?',
    answer: 'Yes, we offer secure, climate-controlled short-term and long-term storage solutions in the Eastern Province. Your items will be carefully inventoried and safely stored until you are ready for them.'
  }
];

const FAQPage = () => {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Al Khobar Movers"
        description="Find answers to common questions about moving, packing, costs, and insurance in Saudi Arabia with Al Khobar Movers."
        keywords="moving faq, movers questions, moving cost al khobar, packing materials, moving insurance saudi arabia"
        canonical="/faq"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <FAQPageJsonLd faqs={faqs} />
      <WebPageJsonLd title="Frequently Asked Questions (FAQ) | Al Khobar Movers" description="Find answers to common questions about moving, packing, costs, and insurance in Saudi Arabia with Al Khobar Movers." url="https://alkhobarmovers.com/faq" />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-14 sm:pb-20 bg-slate-50 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 mb-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full bg-green-100 text-green-700">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our moving services, pricing, and process. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </Container>
      </section>

      {/* Re-use the existing FAQ component but we can pass data if it supports it, or just render it */}
      <div className="py-10">
         <FAQComponent />
      </div>

      <ContactCTA />
    </>
  );
};

export default FAQPage;
