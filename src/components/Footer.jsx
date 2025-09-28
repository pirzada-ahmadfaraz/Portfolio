import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-neutral-800/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Back to top section */}
        <motion.div
          ref={ref}
          className="py-16 border-b border-white/5"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                Ready to start{' '}
                <span className="text-neutral-400">your project?</span>
              </h3>
              <p className="text-neutral-400 font-light max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                Let's create something amazing together. Get in touch and let's discuss your ideas.
              </p>
            </div>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center justify-center space-x-3 sm:space-x-4 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-light tracking-wide text-sm sm:text-base">Get in touch</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Main footer content */}
        <motion.div
          className="py-12 sm:py-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 text-center sm:text-left">

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h4 className="text-white font-light text-base sm:text-lg">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Future Goals', href: '#future' }
                ].map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-neutral-400 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base mx-auto sm:mx-0"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h4 className="text-white font-light text-base sm:text-lg">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-neutral-500 text-xs sm:text-sm mb-1">Location</div>
                  <div className="text-neutral-300 font-light text-sm sm:text-base">Bangalore, India</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs sm:text-sm mb-1">Email</div>
                  <a
                    href="mailto:ahmadfarazpz@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors duration-300 font-light text-sm sm:text-base break-all"
                  >
                    ahmadfarazpz@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="py-6 sm:py-8 border-t border-white/5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p
              variants={itemVariants}
              className="text-neutral-400 text-xs sm:text-sm font-light text-center order-2 sm:order-1"
            >
              © {currentYear} Ahmad Faraz. All rights reserved.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center order-1 sm:order-2"
            >
              <motion.button
                onClick={scrollToTop}
                className="p-2 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;