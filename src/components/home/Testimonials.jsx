import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from families and businesses who experienced our moving services."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon background */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-green-100/80 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 text-center px-4 md:px-12 py-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-md"
            >
              {/* Star rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-2xl text-slate-800 leading-relaxed italic font-medium">
                "{testimonials[current].text}"
              </p>

              {/* Author info */}
              <div className="mt-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-yellow-400 font-extrabold text-lg mb-3 shadow-md">
                  {testimonials[current].avatar}
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm font-semibold text-green-600 mt-0.5">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-slate-100 hover:bg-green-600 hover:text-white text-slate-700 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-green-600 w-8'
                      : 'bg-slate-300 hover:bg-yellow-400 w-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-xl bg-slate-100 hover:bg-green-600 hover:text-white text-slate-700 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
