import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import ServiceAreas from '../components/home/ServiceAreas';
import MovingProcess from '../components/home/MovingProcess';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';
import SEOHead from '../components/seo/SEOHead';
import { LocalBusinessJsonLd, OrganizationJsonLd } from '../components/seo/JsonLd';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Professional Moving & Shifting Services in Saudi Arabia"
        description="Al Khobar Movers — Premium moving and shifting services across Saudi Arabia. House shifting, office relocation, furniture moving, packing & unpacking. Available 24/7. Call +966 50 815 5432."
        keywords="movers al khobar, moving company saudi arabia, house shifting, office relocation, furniture moving, packing services, dammam movers, riyadh movers, jubail movers"
        canonical="/"
      />
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <ServiceAreas />
      <MovingProcess />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <FAQ />
      <ContactCTA />
    </>
  );
};

export default Home;
