
import React, { createContext, useContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import TimelinePage from './pages/TimelinePage';
import ArchitecturePage from './pages/LeadershipPage';
import ArtAndInteriorsPage from './pages/MinistriesPage';
import GalleryPage from './pages/MediaPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';
import AdminPanel from './components/AdminPanel';
import { DEFAULT_CONFIG } from './constants';

// Context for global site configuration
const ConfigContext = createContext<{
  config: typeof DEFAULT_CONFIG;
  updateConfig: (newConfig: typeof DEFAULT_CONFIG) => void;
  resetConfig: () => void;
}>({
  config: DEFAULT_CONFIG,
  updateConfig: () => {},
  resetConfig: () => {},
});

export const useSiteConfig = () => useContext(ConfigContext);

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <NoiseOverlay />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/art-and-interiors" element={<ArtAndInteriorsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <AdminPanel />
    </>
  );
};

const App: React.FC = () => {
  const [config, setConfig] = useState<typeof DEFAULT_CONFIG>(DEFAULT_CONFIG);

  useEffect(() => {
    const saved = localStorage.getItem('sacred_archive_dynamic_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Basic deep merge or validation could go here
        setConfig(parsed);
      } catch (e) {
        console.error("Failed to parse saved config", e);
      }
    }
  }, []);

  const updateConfig = (newConfig: typeof DEFAULT_CONFIG) => {
    setConfig(newConfig);
    localStorage.setItem('sacred_archive_dynamic_config', JSON.stringify(newConfig));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    localStorage.removeItem('sacred_archive_dynamic_config');
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      <Router>
        <AppContent />
      </Router>
    </ConfigContext.Provider>
  );
};

export default App;
