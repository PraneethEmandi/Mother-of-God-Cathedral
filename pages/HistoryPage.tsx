
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSiteConfig } from '../App';
import { HISTORY_ERAS } from '../constants';

const HistoryPage: React.FC = () => {
  const { config } = useSiteConfig();
  const { scrollYProgress } = useScroll();
  const backgroundProgress = useTransform(scrollYProgress, [0, 1], ["#fdfbf7", "#f5f1e9"]);

  const { tagline, heading, description, image } = config.history;

  return (
    
    <motion.div style={{ backgroundColor: backgroundProgress }} className="min-h-screen">
    {/* Hero Header with Background Image */}
    <section className="relative h-[80vh] flex items-center justify-center text-center px-6 pt-24 overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={image}
          alt="History Background"
          className="w-full h-full object-cover brightness-[0.4]" // Darkens image for text readability
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        {/* Gradient Overlay to blend with the rest of the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl" // z-10 puts text above the image
      >
        <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">
          {tagline}
        </span>
        {/* Changed text color to white/gold to pop against the image */}
        <h1 className="font-heading text-6xl md:text-8xl text-white mb-8 italic">
          {heading}
        </h1>
        <p className="font-paragraph text-xl text-white/80 leading-relaxed font-light">
          {description}
        </p>
      </motion.div>
    </section>

      {/* Eras Content */}
      <div className="space-y-0">
        {HISTORY_ERAS.map((era, idx) => (
          <section key={era.id} className="relative min-h-screen py-40 px-6 md:px-20">
            <div className={`max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="mb-8">
                  <span className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-soft-gold block mb-4">
                    {era.years}
                  </span>
                  <h2 className="font-heading text-5xl md:text-7xl text-deep-brown mb-10 leading-tight">
                    {era.title}
                  </h2>
                </div>
                <div className="border-l-2 border-soft-gold/20 pl-10">
                  <p className="font-paragraph text-xl text-deep-brown/70 leading-relaxed font-light whitespace-pre-line mb-10">
                    {era.description}
                  </p>
                  <motion.div
                    className="flex items-center gap-4 text-soft-gold group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="h-[1px] w-12 bg-soft-gold transition-all group-hover:w-20" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover More</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className={`relative aspect-[16/10] overflow-hidden shadow-2xl rounded-sm ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              >
                <motion.img
                  src={era.image}
                  alt={era.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 to-transparent pointer-events-none" />
                <div className="absolute top-10 right-10 text-off-white/80 font-heading text-3xl italic">
                  0{idx + 1}
                </div>
              </motion.div>
            </div>
            
            {/* Scroll Indicator Divider */}
            {idx < HISTORY_ERAS.length - 1 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-[1px] bg-gradient-to-b from-soft-gold/40 to-transparent" />
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default HistoryPage;
