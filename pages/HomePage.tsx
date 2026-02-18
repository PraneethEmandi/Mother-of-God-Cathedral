
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Users, Cross, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SacredCharacter from '../components/SacredCharacter';
import { useSiteConfig } from '../App';

// Mapping icons for feature grid
const ICON_MAP: Record<string, any> = {
  'Historical Eras': BookOpen,
  'Interactive Timeline': Calendar,
  'Leadership Legacy': Users,
  'Ministries': Cross,
  'Media Gallery': Play,
  'Events': MapPin,
};

const RevealText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.05
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const HomePage: React.FC = () => {
  const { config } = useSiteConfig();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { hero, intro, collections, cta } = config.home;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ x: mousePosition.x * 0.1, y: mousePosition.y * 0.1 }}
        >
          {hero.videoUrl ? (
            <video
              key={hero.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-[0.3]"
            >
              <source src={hero.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <motion.img
              key={hero.image}
              src={hero.image}
              alt="Hero Background"
              className="w-full h-full object-cover brightness-[0.4]"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/40 via-transparent to-background" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-8 block font-medium opacity-80">
              {hero.established}
            </span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-off-white leading-[0.85] tracking-tight mb-12">
              <RevealText key={hero.heading} text={hero.heading} />
              <br />
              <span className="italic text-soft-gold opacity-90">
                <RevealText key={hero.tagline} text={hero.tagline} delay={0.5} />
              </span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-off-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              {hero.description}
            </p>
            <Link
              to="/history"
              className="group relative inline-flex items-center gap-6 px-12 py-5 bg-soft-gold/10 backdrop-blur-xl border border-soft-gold/30 text-off-white rounded-full overflow-hidden transition-all duration-700 hover:bg-soft-gold hover:text-deep-brown"
            >
              <span className="relative z-10 font-paragraph text-sm uppercase tracking-[0.2em]">{hero.buttonText}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-soft-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-soft-gold to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-off-white font-paragraph">Scroll</span>
        </motion.div>
      </section>

      {/* Floating Abstract Element */}
      <SacredCharacter className="fixed top-1/2 right-10 w-64 h-64 z-20 opacity-20 hidden lg:block" />

      {/* Intro Section */}
      <section className="py-40 px-6 relative bg-off-white">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl text-deep-brown mb-12 leading-[1.1]">
              {intro.heading.split(' ').map((word, i) => (
                word === 'Sacred' || word === 'Archive' ? <span key={i} className="italic"> {word}</span> : word + ' '
              ))}
            </h2>
            <div className="space-y-10 border-l border-soft-gold/20 pl-10">
              <p className="font-paragraph text-xl text-deep-brown/70 leading-relaxed font-light">
                {intro.paragraph1}
              </p>
              <p className="font-paragraph text-xl text-deep-brown/70 leading-relaxed font-light">
                {intro.paragraph2}
              </p>
            </div>
            
            <div className="mt-20 flex gap-20">
              <div>
                <span className="block font-heading text-5xl text-soft-gold">{intro.stat1Value}</span>
                <span className="text-[10px] uppercase tracking-widest text-deep-brown/40">{intro.stat1Label}</span>
              </div>
              <div>
                <span className="block font-heading text-5xl text-soft-gold">{intro.stat2Value}</span>
                <span className="text-[10px] uppercase tracking-widest text-deep-brown/40">{intro.stat2Label}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="relative aspect-[4/5] clip-arch overflow-hidden shadow-2xl group">
              <img
                key={intro.mainImage}
                src={intro.mainImage}
                alt="Intro Image"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-deep-brown/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Decorative Diamond */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-soft-gold/10 backdrop-blur-md border border-soft-gold/20 flex items-center justify-center rotate-45">
               <div className="rotate-[-45deg] text-center p-4">
                  <p className="font-heading text-sm text-soft-gold italic">"{intro.badgeText}"</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition Video Section */}
<section className="relative w-full bg-deep-brown overflow-hidden">
  <motion.div 
    className="relative w-full"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    {/* By removing h-full and using w-full, the container follows the video's height */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto object-contain brightness-[0.5]"
    >
      <source src="https://res.cloudinary.com/dqpszrpnf/video/upload/v1770550662/WhatsApp_Video_2026-02-08_at_5.06.18_PM_pehedb.mp4" type="video/mp4" />
    </video>
    
    {/* Subtle Inner Glow/Overlays */}
    <div className="" />
    <div className="" />
    
    {/* Optional: Minimalist branding overlay */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center"
      >
        <h2 className="font-heading text-2xl md:text-4xl text-off-white/60 italic tracking-[0.2em]">
          
        </h2>
      </motion.div>
    </div>
  </motion.div>
</section>
      {/* Feature Grid */}
      <section className="py-40 px-6 bg-sandstone/50">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-deep-brown/10">
            <div className="max-w-2xl">
              <span className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-soft-gold mb-4 block">{collections.tagline}</span>
              <h2 className="font-heading text-5xl md:text-7xl text-deep-brown">{collections.heading}</h2>
            </div>
            <p className="font-paragraph text-sm text-deep-brown/50 max-w-xs mt-8 md:mt-0 font-light italic">
              {collections.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.items.map((feature, idx) => {
              const Icon = ICON_MAP[feature.title] || Play;
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <Link
                  to={feature.link}
                  className="group block relative aspect-[4/5] bg-background border border-soft-gold/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 grayscale">
                    <img src={feature.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="relative h-full p-12 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="p-4 bg-sandstone rounded-full text-soft-gold group-hover:bg-soft-gold group-hover:text-deep-brown transition-colors duration-500">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-5xl text-soft-gold/10 font-bold group-hover:text-soft-gold/20">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-4xl text-deep-brown mb-6 group-hover:text-soft-gold transition-colors">
                        {feature.title}
                      </h3>
                      <div className="h-[1px] w-12 bg-soft-gold/30 mb-6 group-hover:w-full transition-all duration-700" />
                      <p className="font-paragraph text-sm text-deep-brown/60 leading-relaxed font-light line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-soft-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </Link>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="relative py-60 px-6 bg-deep-brown overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: yParallax }}
        >
          <img key={cta.backgroundImage} src={cta.backgroundImage} alt="CTA Background" className="w-full h-full object-cover grayscale" />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-heading text-5xl md:text-8xl text-off-white mb-10">{cta.heading}</h2>
            <p className="font-paragraph text-lg md:text-2xl text-off-white/50 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-soft-gold text-deep-brown font-paragraph text-xs uppercase tracking-[0.3em] font-bold hover:bg-off-white transition-colors duration-500">
                {cta.button1Text}
              </Link>
              <Link to="/events" className="px-12 py-5 border border-soft-gold/30 text-soft-gold font-paragraph text-xs uppercase tracking-[0.3em] hover:bg-soft-gold/10 transition-colors duration-500">
                {cta.button2Text}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
