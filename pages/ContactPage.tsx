
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 pb-40 px-6 bg-off-white">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">Get in Touch</span>
            <h1 className="font-heading text-6xl md:text-8xl text-deep-brown italic mb-12">Connect With Us</h1>
            <p className="font-paragraph text-xl text-deep-brown/50 mb-16 font-light leading-relaxed">
              Whether you are looking for spiritual guidance, historical inquiry, or community membership, our doors are always open.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full border border-soft-gold/30 flex items-center justify-center text-soft-gold group-hover:bg-soft-gold group-hover:text-deep-brown transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-deep-brown mb-2">Our Sanctuary</h4>
                  <p className="font-paragraph text-sm text-deep-brown/40 font-light">7Q3F+7J9, Convent Road, Near District Court Kozhikode, Mananchira, Kozhikode, Kerala 673032</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full border border-soft-gold/30 flex items-center justify-center text-soft-gold group-hover:bg-soft-gold group-hover:text-deep-brown transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-deep-brown mb-2">Email Us</h4>
                  <p className="font-paragraph text-sm text-deep-brown/40 font-light">info@sacredarchive.org</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full border border-soft-gold/30 flex items-center justify-center text-soft-gold group-hover:bg-soft-gold group-hover:text-deep-brown transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-deep-brown mb-2">Call Us</h4>
                  <p className="font-paragraph text-sm text-deep-brown/40 font-light">+91 495-2366301 </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-sandstone/30 p-12 lg:p-20 shadow-xl border border-soft-gold/10"
            >
              <h3 className="font-heading text-4xl text-deep-brown mb-12">Send a Message</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-deep-brown/10 py-4 font-paragraph text-sm focus:outline-none focus:border-soft-gold transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-deep-brown/10 py-4 font-paragraph text-sm focus:outline-none focus:border-soft-gold transition-colors" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">Subject</label>
                  <input type="text" className="w-full bg-transparent border-b border-deep-brown/10 py-4 font-paragraph text-sm focus:outline-none focus:border-soft-gold transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-deep-brown/10 py-4 font-paragraph text-sm focus:outline-none focus:border-soft-gold transition-colors resize-none" />
                </div>
                <button className="group flex items-center gap-4 px-12 py-5 bg-deep-brown text-off-white font-paragraph text-[10px] uppercase tracking-widest hover:bg-soft-gold hover:text-deep-brown transition-all duration-700">
                  Send Inquiry
                  <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
