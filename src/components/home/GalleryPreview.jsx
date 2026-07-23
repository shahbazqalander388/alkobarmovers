import { motion } from 'framer-motion';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { galleryImages } from '../../data/gallery';

const GalleryPreview = () => {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50 scroll-mt-20 md:scroll-mt-24">
      <Container>
        <SectionHeading
          subtitle="Our Work"
          title="Recent Relocation Projects"
          description="Take a look at our professional packing, loading, and transport operations in action."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
            >
              <img
                src={image.thumbnail}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm bg-slate-900/80 px-4 py-2 rounded-full border border-yellow-400/30">
                  <ZoomIn className="w-4 h-4 text-yellow-400" />
                  <span>View Project</span>
                </div>
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
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-base shadow-lg shadow-green-600/30 hover:scale-105 transition-all duration-300"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-5 h-5 text-yellow-400" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
