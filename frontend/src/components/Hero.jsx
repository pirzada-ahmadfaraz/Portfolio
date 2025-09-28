import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTyping } from '../hooks/useTyping';

const Hero = ({ data }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const typingText = useTyping(data.typingTexts || ["Python Enthusiast"], 100, 2000);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements removed */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center lg:text-left">
          {/* Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-neutral-400 text-base sm:text-lg tracking-wide"
            >
              Hello, I'm
            </motion.div>

            {/* Name with stagger animation */}
            <motion.h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none"
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {data.name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === ' ' ? 'mr-2 sm:mr-4' : 'inline-block'}
                  style={{
                    color: index < 5 ? '#ffffff' : '#a3a3a3'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-neutral-300 tracking-wide">
                <span className="block sm:inline">{data.title}</span>
                <span className="text-white block sm:inline">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>

              {/* Animated underline */}
              <motion.div
                className="h-px bg-gradient-to-r from-white via-neutral-400 to-transparent mx-auto lg:mx-0 w-3/4 sm:w-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1.2, duration: 1.5 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-xs sm:max-w-lg mx-auto lg:mx-0 font-light px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {data.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              {[
                { Icon: Github, href: "https://github.com/pirzada-ahmadfaraz", external: true },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/pirzadaahmadfaraz/", external: true },
                { Icon: Mail, href: "#contact", external: false }
              ].map(({ Icon, href, external }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-2 sm:p-3 border border-white/20 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2 lg:justify-end"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-neutral-400/10 to-white/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />

              {/* Image container */}
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                <motion.img
                  src={data.image}
                  alt="Ahmad Faraz"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating elements removed */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ y: -2 }}
        >
          <span className="text-xs text-neutral-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-neutral-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;