
import React from 'react';
import { motion as mBase } from 'framer-motion';
import { Cross, Heart, Book, Coffee, Globe, Shield } from 'lucide-react';
import { useSiteConfig } from '../constants';

// Fix motion type errors by casting the motion object to any
const motion = mBase as any;

const ICON_MAP: Record<string, any> = {
  Heart,
  Book,
  Globe,
  Coffee,
  Shield,
  Cross
};

const MinistriesPage: React.FC = () => {
  const { config } = useSiteConfig();
  const { tagline, heading, description, items } = config.ministries;

  return (
    <div className="min-h-screen pt-40 pb-40 px-6 bg-sandstone/30">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
          <div className="max-w-3xl">
            <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">{tagline}</span>
            <h1 className="font-heading text-6xl md:text-8xl text-deep-brown italic mb-10">{heading}</h1>
            <p className="font-paragraph text-xl text-deep-brown/60 leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((m: any, idx: number) => {
            const Icon = ICON_MAP[m.icon] || Cross;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative bg-off-white p-12 border border-soft-gold/10 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                  <img 
                    src={m.image} 
                    alt="" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]" 
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-sandstone rounded-full flex items-center justify-center text-soft-gold mb-8 group-hover:bg-soft-gold group-hover:text-deep-brown transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-3xl text-deep-brown mb-6 group-hover:text-soft-gold transition-colors">
                    {m.title}
                  </h3>
                  <p className="font-paragraph text-sm text-deep-brown/50 leading-relaxed font-light mb-8 group-hover:text-deep-brown/80 transition-colors">
                    {m.desc}
                  </p>
                  <div className="h-[1px] w-full bg-sandstone group-hover:bg-soft-gold transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;
