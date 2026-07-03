import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const currentYear = new Date().getFullYear();
  const ease = [0.22, 1, 0.36, 1];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Future', href: '#future' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Big CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="py-20 sm:py-28 text-center"
        >
          <div className="font-mono-label text-[0.6rem] text-neutral-500 mb-8">
            Have an idea?
          </div>
          <button
            onClick={() => scrollToSection('#contact')}
            className="group font-display text-5xl sm:text-7xl lg:text-8xl leading-none transition-colors"
          >
            Let's <span className="serif-italic text-neutral-400 group-hover:text-white transition-colors duration-500">talk</span>
            <ArrowUpRight className="inline-block w-8 h-8 sm:w-12 sm:h-12 ml-2 align-top text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-10 grid sm:grid-cols-3 gap-8 items-center">
          <div className="text-center sm:text-left order-2 sm:order-1">
            <div className="font-display text-xl">Ahmad <span className="serif-italic text-neutral-400">Faraz</span></div>
            <div className="font-mono-label text-[0.55rem] text-neutral-600 mt-2">
              © {currentYear} Pirzada Ahmad Faraz — All rights reserved
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3 order-1 sm:order-2">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => scrollToSection(l.href)}
                className="font-mono-label text-[0.6rem] text-neutral-500 hover:text-white transition-colors"
              >
                {l.name}
              </button>
            ))}
          </nav>

          <div className="flex justify-center sm:justify-end order-3">
            <motion.button
              onClick={scrollToTop}
              className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-neutral-400 hover:text-white"
              whileHover={{ y: -3 }}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
