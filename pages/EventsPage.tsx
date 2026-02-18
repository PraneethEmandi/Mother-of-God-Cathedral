
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const events = [
  { title: 'Feast of the Mother of God', date: 'January 1', time: 'Morning & Evening Masses', location: 'Main Sanctuary' },
  { title: 'Holy Week & Easter Celebrations', date: 'March / April', time: 'Scheduled Services', location: 'Cathedral Grounds' },
  { title: 'Christmas Midnight Mass', date: 'December 24', time: '12:00 AM', location: 'Main Sanctuary' },
];

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">Gatherings</span>
          <h1 className="font-heading text-6xl md:text-8xl italic mb-8">Sacred Moments</h1>
          <p className="font-paragraph text-xl text-deep-brown/40 max-w-2xl mx-auto font-light leading-relaxed">
            Join our community in celebration, prayer, and reflection. Every event is a chance to grow together.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-12 bg-sandstone/30 border-l-4 border-soft-gold hover:bg-sandstone/50 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-4xl text-deep-brown group-hover:text-soft-gold transition-colors">{event.title}</h3>
                <div className="flex flex-wrap gap-8 text-deep-brown/50 font-paragraph text-xs uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={14} className="text-soft-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-soft-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-soft-gold" />
                    {event.location}
                  </div>
                </div>
              </div>
              <button className="mt-8 md:mt-0 px-8 py-4 bg-deep-brown text-off-white font-paragraph text-[10px] uppercase tracking-widest hover:bg-soft-gold hover:text-deep-brown transition-colors">
                Reserve Seat
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
