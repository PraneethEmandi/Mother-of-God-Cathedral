
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useSiteConfig } from '../App';

const TimelinePage: React.FC = () => {
  const { config } = useSiteConfig();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRowRef = useRef<HTMLDivElement>(null);
  
  const [scrollWidth, setScrollWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Use useLayoutEffect and ResizeObserver for robust measurement
  useLayoutEffect(() => {
    const updateSizes = () => {
      if (scrollRowRef.current) {
        setScrollWidth(scrollRowRef.current.scrollWidth);
        setViewportWidth(window.innerWidth);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSizes();
    });

    if (scrollRowRef.current) {
      resizeObserver.observe(scrollRowRef.current);
    }
    
    updateSizes();
    window.addEventListener('resize', updateSizes);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSizes);
    };
  }, [config.timeline.events]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the shift so that the end of the timeline reaches the end of the viewport
  // The goal is to move the row from x=0 to x=-(totalWidth - viewportWidth)
  const xRange = Math.max(0, scrollWidth - viewportWidth);
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -xRange]);
  const x = useSpring(rawX, { stiffness: 50, damping: 20, restDelta: 0.001 });

  // Parallax for the giant background text
  const bgX = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  
  // Progress bar width
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const timeline = config.timeline;

  return (
    <div className="bg-deep-brown text-off-white">
      {/* 
          Container height controls the vertical scroll 'depth'. 
          Increased to 600vh for a smoother, more expansive feel.
      */}
      <div ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-10 md:px-20 mb-16 relative z-30"
          >
            <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-4 block">
              {timeline.tagline}
            </span>
            <h1 className="font-heading text-6xl md:text-9xl tracking-tighter leading-none">
              {timeline.heading}
            </h1>
          </motion.div>

          {/* Timeline Row */}
          <motion.div 
            ref={scrollRowRef}
            style={{ x }} 
            className="flex gap-32 px-10 md:px-20 items-center h-[55vh] relative z-20"
          >
            {timeline.events.map((event, idx) => (
              <TimelineItem key={idx} event={event} index={idx} total={timeline.events.length} />
            ))}
          </motion.div>

          {/* Progress Bar Container */}
          <div className="absolute bottom-20 left-10 md:left-20 right-10 md:right-20 h-[1px] bg-white/10 z-30">
            <motion.div 
              style={{ scaleX: progressScaleX, originX: 0 }}
              className="h-full bg-soft-gold w-full" 
            />
            <div className="absolute top-4 left-0 font-paragraph text-[8px] uppercase tracking-widest text-soft-gold/40">
              The Journey Begins
            </div>
            <div className="absolute top-4 right-0 font-paragraph text-[8px] uppercase tracking-widest text-soft-gold/40">
              Continuing Today
            </div>
          </div>

          {/* Background Decorative Text */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center z-0">
            <motion.h2 
              style={{ x: bgX }}
              className="text-[40rem] font-heading whitespace-nowrap opacity-[0.04] text-off-white italic select-none leading-none"
            >
              SACRED STORYTELLING ARCHIVE
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Finishing CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative bg-deep-brown z-10 border-t border-white/5">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="font-paragraph text-[10px] uppercase tracking-[0.4em] text-soft-gold mb-8 block">Future Chapters</span>
            <h2 className="font-heading text-7xl md:text-9xl mb-12 italic leading-none">The Story Never Ends</h2>
            <p className="font-paragraph text-xl text-off-white/40 mb-16 font-light leading-relaxed">
              Every prayer whispered, every song sung, and every hand held adds a new page to our living archive. 
              Discover how you can be part of the chapters yet to be written.
            </p>
            <div className="flex justify-center gap-10 items-center">
               <div className="h-[1px] w-24 bg-soft-gold/20" />
               <button className="px-12 py-5 border border-soft-gold text-soft-gold font-paragraph text-[10px] uppercase tracking-[0.3em] hover:bg-soft-gold hover:text-deep-brown transition-all duration-700">
                  Join the Mission
               </button>
               <div className="h-[1px] w-24 bg-soft-gold/20" />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-20">
           <div className="w-1 h-20 bg-gradient-to-b from-soft-gold to-transparent" />
        </div>
      </section>
    </div>
  );
};

interface TimelineItemProps {
  event: any;
  index: number;
  total: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, total }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[480px] group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Visual connection line */}
      {index < total - 1 && (
        <div className="absolute top-[35%] -right-32 w-32 h-[1px] bg-white/5 group-hover:bg-soft-gold/20 transition-colors duration-700 hidden md:block" />
      )}

      <div className="relative mb-12 overflow-hidden aspect-[16/10] shadow-2xl border border-white/5 group-hover:border-soft-gold/30 transition-all duration-1000">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-deep-brown/20 group-hover:opacity-0 transition-opacity duration-700" />
        
        {/* Floating Index */}
        <div className="absolute top-6 left-6 font-heading text-xl text-soft-gold/40 group-hover:text-soft-gold transition-colors italic">
          #{index + 1 < 10 ? `0${index + 1}` : index + 1}
        </div>
      </div>
      
      <div className="space-y-6 px-2">
        <div className="flex items-end gap-4">
          <span className="font-heading text-6xl text-soft-gold leading-none italic">{event.year}</span>
          <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-soft-gold/20 transition-all duration-1000 mb-2" />
        </div>
        
        <div>
          <h3 className="font-heading text-4xl mb-4 group-hover:text-soft-gold transition-colors tracking-tight leading-tight">
            {event.title}
          </h3>
          <p className="font-paragraph text-sm text-off-white/40 leading-relaxed font-light line-clamp-3 group-hover:text-off-white/60 transition-colors duration-700">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelinePage;
