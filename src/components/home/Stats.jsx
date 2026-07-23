import { motion } from 'framer-motion';
import Container from '../ui/Container';
import useCountUp from '../../hooks/useCountUp';
import { stats } from '../../data/company';

const StatItem = ({ value, suffix, label }) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center p-3.5 sm:p-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
      <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-green-600 tracking-tight">
        {count}
        <span className="text-yellow-500">{suffix}</span>
      </div>
      <p className="mt-1 sm:mt-2 text-slate-700 font-bold text-xs sm:text-sm md:text-base">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-y border-slate-200/60">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
