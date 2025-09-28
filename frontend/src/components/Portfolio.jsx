import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Future from './Future';
import Contact from './Contact';
import Footer from './Footer';
import Preloader from './Preloader';
import { Toaster } from './ui/toaster';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Handle smooth scrolling
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor follower removed */}

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          
          <main className="relative">
            {/* Parallax background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neutral-800/10 to-neutral-700/10 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              />
              <div 
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-neutral-700/5 to-neutral-600/5 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              />
            </div>

            <Hero data={mockData.hero} />
            <About data={mockData.about} />
            <Projects data={mockData.projects} />
            <Skills data={mockData.skills} />
            <Future data={mockData.future} />
            <Contact data={mockData.contact} />
          </main>
          
          <Footer />
          <Toaster />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;