import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { serviceAreas } from '../../data/areas';

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          subtitle="Service Areas"
          title="Cities We Serve Across Saudi Arabia"
          description="Prompt, reliable moving services covering major metropolitan areas with full insurance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                area.featured
                  ? 'border-yellow-400 bg-gradient-to-br from-green-50/50 to-white shadow-lg shadow-green-600/10 ring-2 ring-yellow-400/50'
                  : 'border-slate-100 bg-white hover:border-green-300 hover:shadow-lg'
              }`}
            >
              {area.featured && (
                <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-extrabold bg-yellow-400 text-slate-900 rounded-full shadow-sm">
                  HEADQUARTERS
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-xl shrink-0 ${
                  area.featured ? 'bg-green-600 text-yellow-400' : 'bg-green-100 text-green-600'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceAreas;
