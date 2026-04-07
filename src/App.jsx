import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationInternships from './components/EducationInternships';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <LoadingAnimation key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <EducationInternships />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}

export default App;
