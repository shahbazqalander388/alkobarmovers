import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, ThumbsUp, Headphones } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const reasons = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Your belongings are completely protected with our comprehensive moving insurance.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We guarantee punctual pickup and scheduled delivery with real-time updates.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Our trained professionals handle your items with utmost care and specialized packing.',
  },
  {
    icon: Users,
    title: '2,500+ Happy Clients',
    description: 'Thousands of families and businesses trust us for seamless relocations.',
  },
  {
    icon: ThumbsUp,
    title: 'Affordable Pricing',
    description: 'Transparent, competitive rates with zero hidden charges or extra fees.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for instant quotes and query assistance.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-20 md:scroll-mt-24">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Trusted Moving Partners in KSA"
          description="We go above and beyond to deliver a seamless, stress-free moving experience every single time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
            >
              <div className="inline-flex p-3.5 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-yellow-400 transition-colors duration-300 mb-4 sm:mb-6 shadow-sm">
                <reason.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
