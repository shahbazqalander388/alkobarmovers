import { motion } from 'framer-motion';
import { PhoneCall, Package, Truck, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Book & Quote',
    description: 'Contact us via Call or WhatsApp. Share your details for an immediate, transparent estimate.',
  },
  {
    icon: Package,
    step: '02',
    title: 'Professional Packing',
    description: 'Our team arrives with high-grade boxes and bubble wrap to pack all items securely.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Safe Transit',
    description: 'Loaded into GPS-tracked moving trucks and driven safely to your destination.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Unpack & Setup',
    description: 'We unload, assemble furniture, and arrange items as requested in your new location.',
  },
];

const MovingProcess = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-gradient-to-br from-green-950 via-slate-900 to-green-900 relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Our Process"
          title="Simple 4-Step Moving Journey"
          description="How we deliver a stress-free relocation from initial contact to final setup."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector line on desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-yellow-400/40 to-transparent" />
              )}

              <div className="relative inline-flex mb-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-yellow-400 group-hover:bg-green-600 transition-colors duration-300">
                  <step.icon className="w-9 h-9" />
                </div>
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-slate-900 font-extrabold text-sm shadow-md">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovingProcess;
