import React from 'react';
import { motion } from 'framer-motion';
import { MEDIA_DATA } from '../constants';

const MediaPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 px-6 bg-deep-brown text-off-white">
      <div className="max-w-[100rem] mx-auto">
        <div className="text-center mb-32">
          <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">The Gallery</span>
          <h1 className="font-heading text-6xl md:text-8xl italic mb-8">Sacred Visions</h1>
          <p className="font-paragraph text-xl text-off-white/40 max-w-3xl mx-auto font-light leading-relaxed">
            Witness our journey through cinematic documentaries, sacred performances, and community highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MEDIA_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-video overflow-hidden shadow-2xl rounded-sm border border-off-white/10 group-hover:border-soft-gold transition-colors duration-700 bg-black">
                
                {item.type === 'video' ? (
                  /* Video: Directly embedded for instant viewing */
                  <iframe
                    src={`${item.src}${item.src.includes('?') ? '&' : '?'}autoplay=0`}
                    className="w-full h-full pointer-events-auto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  ></iframe>
                ) : (
                  /* Image: Displayed clearly without the initial grayscale */
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                  />
                )}

                {/* Subtle gradient overlay to tie the grid items together */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent pointer-events-none" />
              </div>

              <div className="mt-8">
                <span className="font-paragraph text-[10px] uppercase tracking-widest text-soft-gold mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-heading text-4xl group-hover:text-soft-gold transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center py-24 border-t border-off-white/5">
           <h2 className="font-heading text-4xl italic mb-10 text-soft-gold">Explore the Complete Archive</h2>
           <button className="px-12 py-5 border border-soft-gold text-soft-gold font-paragraph text-[10px] uppercase tracking-[0.3em] hover:bg-soft-gold hover:text-deep-brown transition-all duration-700">
             Launch Digital Museum
           </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;