
import React, { useState } from 'react';
import { motion as mBase, AnimatePresence } from 'framer-motion';
import { Settings, X, Save, RotateCcw, Image, Type, Compass, Layout, Calendar, Box, Smartphone, Palette, Heart } from 'lucide-react';
import { useSiteConfig } from '../constants';

const motion = mBase as any;

const AdminPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { config, updateConfig, resetConfig } = useSiteConfig();
  const [activeTab, setActiveTab] = useState<'general' | 'header' | 'hero' | 'intro' | 'history' | 'cards' | 'timeline' | 'ministries'>('general');

  const handleUpdate = (path: string, value: any) => {
    const newConfig = { ...config };
    const keys = path.split('.');
    let current: any = newConfig;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    updateConfig(newConfig);
  };

  const tabs = [
    { id: 'general', label: 'Site', icon: Layout },
    { id: 'header', label: 'Header', icon: Palette },
    { id: 'hero', label: 'Hero', icon: Type },
    { id: 'intro', label: 'Intro', icon: Image },
    { id: 'history', label: 'History', icon: Compass },
    { id: 'ministries', label: 'Ministries', icon: Heart },
    { id: 'cards', label: 'Home Cards', icon: Box },
    { id: 'timeline', label: 'Time', icon: Calendar },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[100] w-14 h-14 bg-deep-brown text-soft-gold rounded-full shadow-2xl flex items-center justify-center hover:bg-soft-gold hover:text-deep-brown transition-all duration-500 hover:rotate-90"
      >
        <Settings size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-deep-brown/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-lg bg-off-white shadow-2xl z-[120] flex flex-col"
            >
              <div className="p-8 border-b border-soft-gold/10 flex justify-between items-center bg-deep-brown text-off-white">
                <div>
                  <h2 className="font-heading text-2xl text-soft-gold tracking-tight italic">Sanctuary Management</h2>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Live Content Editor</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:text-soft-gold transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex bg-sandstone/30 overflow-x-auto hide-scrollbar border-b border-deep-brown/5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 min-w-[70px] py-5 flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest font-bold transition-all ${
                      activeTab === tab.id ? 'bg-off-white text-soft-gold' : 'text-deep-brown/40 hover:text-deep-brown'
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-off-white">
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <SectionTitle>Site Identity</SectionTitle>
                    <InputGroup label="Website Name" value={config.siteTitle} path="siteTitle" onUpdate={handleUpdate} />
                    <InputGroup label="Logo Abbreviation" value={config.siteLogo} path="siteLogo" onUpdate={handleUpdate} />
                  </div>
                )}

                {activeTab === 'header' && (
                  <div className="space-y-6">
                    <SectionTitle>Header Visibility</SectionTitle>
                    <InputGroup label="Initial Text Color (Hex)" value={config.header.initialTextColor} path="header.initialTextColor" onUpdate={handleUpdate} placeholder="#ffffff" />
                    <InputGroup label="Scrolled Text Color (Hex)" value={config.header.scrolledTextColor} path="header.scrolledTextColor" onUpdate={handleUpdate} placeholder="#3d2b1f" />
                    <InputGroup label="Scrolled Background (RGBA)" value={config.header.scrolledBgColor} path="header.scrolledBgColor" onUpdate={handleUpdate} placeholder="rgba(0,0,0,0.5)" />
                    <InputGroup label="Logo/Accent Color" value={config.header.logoColor} path="header.logoColor" onUpdate={handleUpdate} />
                  </div>
                )}

                {activeTab === 'hero' && (
                  <div className="space-y-6">
                    <SectionTitle>Home Hero</SectionTitle>
                    <InputGroup label="Fallback Photo" value={config.home.hero.image} path="home.hero.image" onUpdate={handleUpdate} />
                    <InputGroup label="Main Title" value={config.home.hero.heading} path="home.hero.heading" onUpdate={handleUpdate} />
                    <InputGroup label="Subtitle" value={config.home.hero.tagline} path="home.hero.tagline" onUpdate={handleUpdate} />
                    <TextAreaGroup label="Description" value={config.home.hero.description} path="home.hero.description" onUpdate={handleUpdate} />
                  </div>
                )}

                {activeTab === 'ministries' && (
                  <div className="space-y-8">
                    <SectionTitle>Ministries Editor</SectionTitle>
                    <InputGroup label="Heading" value={config.ministries.heading} path="ministries.heading" onUpdate={handleUpdate} />
                    <TextAreaGroup label="Description" value={config.ministries.description} path="ministries.description" onUpdate={handleUpdate} />
                    
                    <div className="space-y-6 pt-4 border-t border-soft-gold/10">
                      <p className="text-[10px] font-bold text-soft-gold uppercase tracking-widest">Individual Cards</p>
                      {config.ministries.items.map((item: any, idx: number) => (
                        <div key={idx} className="p-4 bg-sandstone/30 border border-deep-brown/5 rounded-lg space-y-3">
                          <p className="text-[10px] font-bold text-deep-brown/40 uppercase">Card {idx + 1}</p>
                          <input 
                            className="w-full bg-white border border-deep-brown/10 rounded px-3 py-2 text-xs"
                            value={item.title} 
                            placeholder="Title"
                            onChange={(e) => {
                              const newItems = [...config.ministries.items];
                              newItems[idx].title = e.target.value;
                              handleUpdate('ministries.items', newItems);
                            }}
                          />
                          <input 
                            className="w-full bg-white border border-deep-brown/10 rounded px-3 py-2 text-[10px]"
                            value={item.image} 
                            placeholder="Background Image URL"
                            onChange={(e) => {
                              const newItems = [...config.ministries.items];
                              newItems[idx].image = e.target.value;
                              handleUpdate('ministries.items', newItems);
                            }}
                          />
                          <textarea 
                            className="w-full bg-white border border-deep-brown/10 rounded px-3 py-2 text-[10px] resize-none"
                            value={item.desc} 
                            rows={2}
                            placeholder="Description"
                            onChange={(e) => {
                              const newItems = [...config.ministries.items];
                              newItems[idx].desc = e.target.value;
                              handleUpdate('ministries.items', newItems);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'cards' && (
                  <div className="space-y-8">
                    <SectionTitle>Home Collection Cards</SectionTitle>
                    {config.home.collections.items.map((item: any, idx: number) => (
                      <div key={idx} className="p-4 bg-sandstone/30 border border-deep-brown/5 rounded-lg space-y-3">
                        <p className="text-[10px] font-bold text-soft-gold uppercase">Card 0{idx + 1}</p>
                        <input 
                          className="w-full bg-white border border-deep-brown/10 rounded px-3 py-2 text-xs"
                          value={item.title} 
                          onChange={(e) => {
                            const newItems = [...config.home.collections.items];
                            newItems[idx].title = e.target.value;
                            handleUpdate('home.collections.items', newItems);
                          }}
                        />
                        <input 
                          className="w-full bg-white border border-deep-brown/10 rounded px-3 py-2 text-[10px]"
                          value={item.image} 
                          placeholder="Photo URL"
                          onChange={(e) => {
                            const newItems = [...config.home.collections.items];
                            newItems[idx].image = e.target.value;
                            handleUpdate('home.collections.items', newItems);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'timeline' && (
                  <div className="space-y-6">
                    <SectionTitle>Timeline Events</SectionTitle>
                    {config.timeline.events.map((event: any, idx: number) => (
                      <div key={idx} className="p-5 bg-sandstone/20 border border-deep-brown/5 rounded-lg space-y-3">
                        <div className="flex gap-3">
                          <input 
                            className="w-20 bg-white border border-deep-brown/10 rounded px-2 py-1 text-xs" 
                            value={event.year}
                            onChange={(e) => {
                              const newEvents = [...config.timeline.events];
                              newEvents[idx].year = e.target.value;
                              handleUpdate('timeline.events', newEvents);
                            }}
                          />
                          <input 
                            className="flex-1 bg-white border border-deep-brown/10 rounded px-2 py-1 text-xs" 
                            value={event.title}
                            onChange={(e) => {
                              const newEvents = [...config.timeline.events];
                              newEvents[idx].title = e.target.value;
                              handleUpdate('timeline.events', newEvents);
                            }}
                          />
                        </div>
                        <input 
                          className="w-full bg-white border border-deep-brown/10 rounded px-2 py-1 text-[10px]" 
                          value={event.image}
                          placeholder="Photo URL"
                          onChange={(e) => {
                            const newEvents = [...config.timeline.events];
                            newEvents[idx].image = e.target.value;
                            handleUpdate('timeline.events', newEvents);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-8 border-t border-soft-gold/10 flex gap-4 bg-sandstone/20">
                <button
                  onClick={resetConfig}
                  className="flex-1 py-4 border border-deep-brown/10 text-deep-brown text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  <RotateCcw size={14} /> Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-4 bg-deep-brown text-soft-gold text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-soft-gold hover:text-deep-brown transition-all"
                >
                  <Save size={14} /> Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-heading text-xl text-deep-brown italic border-b border-soft-gold/10 pb-2 mb-4">
    {children}
  </h3>
);

const InputGroup: React.FC<{ label: string, value: string, path: string, onUpdate: any, placeholder?: string }> = ({ label, value, path, onUpdate, placeholder }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onUpdate(path, e.target.value)}
      className="w-full bg-sandstone/40 border border-deep-brown/10 rounded px-4 py-3 font-paragraph text-sm focus:bg-white focus:border-soft-gold outline-none transition-all"
    />
  </div>
);

const TextAreaGroup: React.FC<{ label: string, value: string, path: string, onUpdate: any }> = ({ label, value, path, onUpdate }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest text-deep-brown/40 font-bold">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onUpdate(path, e.target.value)}
      rows={3}
      className="w-full bg-sandstone/40 border border-deep-brown/10 rounded px-4 py-3 font-paragraph text-sm focus:bg-white focus:border-soft-gold outline-none transition-all resize-none"
    />
  </div>
);

export default AdminPanel;
