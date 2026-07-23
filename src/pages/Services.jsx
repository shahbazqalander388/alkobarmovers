import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd } from '../components/seo/JsonLd';
import { services } from '../data/services';
import ContactCTA from '../components/home/ContactCTA';

const Services = () => {
  return (
    <>
      <SEOHead
        title="Our Services"
        description="Explore our comprehensive moving services: house shifting, apartment moving, villa moving, office relocation, furniture moving, packing, unpacking, local and long-distance moves."
        keywords="house shifting al khobar, apartment moving, villa moving, office relocation, furniture moving, packing services, unpacking services, local moving, long distance moving saudi"
        canonical="/services"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                Moving Solutions
              </span>
            </h1>
            <p className="text-lg text-blue-100/70">
              From residential to commercial moves, we provide end-to-end relocation services tailored to your unique requirements.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            subtitle="What We Offer"
            title="All Our Services"
            description="Choose from our wide range of professional moving services designed to make your relocation seamless."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-800 group-hover:to-blue-900 group-hover:text-white transition-all duration-300 mb-5">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Services;
