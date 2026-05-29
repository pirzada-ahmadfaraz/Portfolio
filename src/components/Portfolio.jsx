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
  const [isMobile, setIsMobile] = useState(false);

  // Track mobile viewport — used to skip GPU-heavy scroll parallax
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Scroll parallax (desktop only — re-rendering on every scroll frame
  // and moving large blurred elements is what janks mobile Safari)
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

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
    <div className="grain min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          <main className="relative">
            {/* Atmospheric background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              {/* faint top grid */}
              <div className="grid-bg absolute inset-x-0 top-0 h-[120vh]" />
              {/* soft monochrome light pools */}
              <div
                className="absolute top-[-10%] right-[-5%] w-[44rem] h-[44rem] rounded-full bg-white/[0.04] blur-[120px]"
                style={{ transform: isMobile ? undefined : `translateY(${scrollY * 0.15}px)` }}
              />
              <div
                className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-white/[0.025] blur-[120px]"
                style={{ transform: isMobile ? undefined : `translateY(${scrollY * -0.08}px)` }}
              />
              {/* bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black to-transparent" />
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