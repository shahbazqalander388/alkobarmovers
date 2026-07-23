import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/services';

const ServicesPreview = () => {
  const previewServices = services.slice(0, 6);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 scroll-mt-20 md:scroll-mt-24">
      <Container>
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Relocation Solutions"
          description="From house packing to office shifting, we offer complete moving services across Saudi Arabia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top border hover highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex p-3.5 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-yellow-400 transition-colors duration-300 mb-5 shadow-sm">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-sm transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-base shadow-lg shadow-green-600/30 hover:scale-105 transition-all duration-300"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-5 h-5 text-yellow-400" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
