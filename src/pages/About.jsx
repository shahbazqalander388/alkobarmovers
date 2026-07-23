import { motion } from 'framer-motion';
import { Shield, Target, Eye, Heart, Award, Users, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd } from '../components/seo/JsonLd';
import Stats from '../components/home/Stats';
import ContactCTA from '../components/home/ContactCTA';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize the safety of your belongings with professional packing materials and trained handlers.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our top priority. We go the extra mile to exceed your expectations.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'We maintain the highest standards of quality in every move, big or small.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Our dedicated team works together seamlessly to deliver exceptional moving experiences.',
    color: 'bg-green-50 text-green-600',
  },
];

const milestones = [
  { year: '2012', title: 'Company Founded', description: 'Started operations in Al Khobar with a small team and big dreams.' },
  { year: '2015', title: 'Expanded to Dammam', description: 'Extended our services to cover the entire Dammam metropolitan area.' },
  { year: '2018', title: 'Fleet Expansion', description: 'Upgraded to a modern fleet of GPS-tracked moving vehicles.' },
  { year: '2020', title: 'Riyadh Operations', description: 'Opened operations in Riyadh, the capital of Saudi Arabia.' },
  { year: '2023', title: '2,000 Moves Milestone', description: 'Celebrated completing 2,000 successful relocations.' },
  { year: '2025', title: 'Regional Leader', description: 'Recognized as a leading moving company in the Eastern Province.' },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Al Khobar Movers — a trusted moving company with 12+ years of experience in Saudi Arabia. Our mission, values, and commitment to excellence."
        keywords="about al khobar movers, moving company history, professional movers saudi arabia, trusted relocation services"
        canonical="/about"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]} />

      {/* Hero */}
      <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-16 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto px-2 sm:px-0"
          >
            <span className="inline-block px-3.5 py-1 mb-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full bg-orange-500/20 text-orange-300">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Your Trusted Moving
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300"> Partners</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
              With over 12 years of experience, Al Khobar Movers has been providing premium relocation
              services across Saudi Arabia with dedication, professionalism, and care.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-14 sm:py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dai2g47e4/image/upload/f_auto,q_auto,w_600/v1784807472/WhatsApp_Image_2026-07-23_at_1.53.58_AM_duc6cj.jpg"
                  alt="Al Khobar Movers professional team"
                  className="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 sm:-mt-6 sm:ml-6 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold">12+</div>
                <div className="text-xs sm:text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-3.5 py-1 mb-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full bg-orange-100 text-orange-600">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Moving Lives Forward Since 2012
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">
                Al Khobar Movers was founded with a simple mission: to make moving stress-free. What started
                as a small operation in Al Khobar has grown into one of the most trusted moving companies
                in Saudi Arabia's Eastern Province.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                Over the years, we have successfully completed more than 5,000 relocations, serving
                families, businesses, and organizations across Riyadh, Dammam, Jubail, Al Hofuf, and
                beyond. Our commitment to quality, safety, and customer satisfaction has earned us a
                stellar reputation and the trust of thousands of clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  'Professional Team',
                  'Modern Equipment',
                  'Full Insurance',
                  '24/7 Availability',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20 md:py-28 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-8 md:p-10 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-4 sm:mb-5">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To deliver exceptional, reliable, and affordable moving services that exceed customer
                expectations. We aim to make every relocation a smooth and positive experience through
                professionalism, innovation, and genuine care for our clients' belongings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 sm:p-8 md:p-10 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="inline-flex p-3 rounded-xl bg-orange-50 text-orange-600 mb-4 sm:mb-5">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To become Saudi Arabia's most trusted and preferred moving company, known for our
                commitment to quality, safety, and customer satisfaction. We envision expanding our
                services while maintaining the personal touch that sets us apart.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values shape every move we make and every interaction we have."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow bg-white"
              >
                <div className={`inline-flex p-3.5 sm:p-4 rounded-xl ${value.color} mb-4 sm:mb-5`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 md:py-28 bg-slate-50">
        <Container>
          <SectionHeading
            subtitle="Our Journey"
            title="Company Milestones"
            description="Key moments in our journey to becoming a trusted name in moving services."
          />
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 sm:gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 text-white text-xs sm:text-sm font-bold shadow-md">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-12 sm:h-16 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pt-1 pb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{milestone.title}</h3>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <ContactCTA />
    </>
  );
};

export default About;
