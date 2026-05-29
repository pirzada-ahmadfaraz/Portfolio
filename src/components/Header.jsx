import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Future', href: '#future' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      let current = '';
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div
            className={`flex justify-between items-center rounded-full px-4 sm:px-6 py-3 transition-all duration-700 ${
              scrolled
                ? 'glass'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <motion.button
              className="flex items-center gap-2.5 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 font-display text-lg leading-none group-hover:border-white/60 transition-colors duration-500">
                A
              </span>
              <span className="hidden sm:block font-mono-label text-[0.65rem] text-neutral-400 group-hover:text-white transition-colors duration-500">
                Ahmad&nbsp;Faraz
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-mono-label text-[0.65rem] transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1.5 left-0 h-px bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-white flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="grain fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="relative flex items-baseline gap-3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <span className="font-mono-label text-[0.6rem] text-neutral-600">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-4xl transition-colors duration-300 ${
                        isActive ? 'text-white serif-italic' : 'text-white/60'
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;