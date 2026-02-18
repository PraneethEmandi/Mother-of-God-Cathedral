
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../App';

const Footer: React.FC = () => {
  const { config } = useSiteConfig();

  return (
    <footer className="relative bg-deep-brown text-off-white py-24 px-6">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="font-heading text-3xl text-soft-gold italic">
              {config.siteTitle}
            </h3>
            <p className="font-paragraph text-sm text-off-white/60 leading-relaxed font-light">
              {config.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8 tracking-wide">The Sanctuary</h4>
            <ul className="space-y-4">
              {[
                { name: 'History', path: '/history' },
                { name: 'Timeline', path: '/timeline' },
                { name: 'Architecture', path: '/architecture' },
                { name: 'Art & Interiors', path: '/art-and-interiors' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-paragraph text-xs uppercase tracking-widest text-off-white/50 hover:text-soft-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8 tracking-wide">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-soft-gold shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm text-off-white/60">
                  7Q3F+7J9, Convent Road, Near District Court Kozhikode, Mananchira, Kozhikode, Kerala 673032
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-soft-gold shrink-0" />
                <span className="font-paragraph text-sm text-off-white/60">
                  info@sacredarchive.org
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8 tracking-wide">Connect</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full border border-off-white/10 flex items-center justify-center hover:bg-soft-gold hover:border-soft-gold hover:text-deep-brown transition-all duration-500"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-off-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-off-white/30">
            © {new Date().getFullYear()} {config.siteTitle}. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link to="/contact" className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-off-white/30 hover:text-soft-gold">
              Privacy Policy
            </Link>
            <Link to="/contact" className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-off-white/30 hover:text-soft-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
