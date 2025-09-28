import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Define the phrases for sliding transition
  const phrases = [
    
    "Crypto DApps 🚀",
    "Web3 Solutions 🌐",
    "Blockchain Apps ⛓️",
    "Smart Contracts 🤖",
    "DeFi Platforms 💎"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Auto-advance phrases
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [inView, phrases.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-neutral-800/5 to-transparent rounded-full blur-3xl"
          style={{ y }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Section title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="text-xs sm:text-sm text-neutral-400 tracking-widest uppercase"
                variants={itemVariants}
              >
                About Me
              </motion.div>

              <motion.h2
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-light leading-normal"
                variants={itemVariants}
              >
                <div className="flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start">
                  <span className="text-white">Creating</span>
                  <div className="relative inline-block sm:ml-2 overflow-hidden h-10 sm:h-12 lg:h-16 flex items-center">
                    <motion.span
                      key={currentPhraseIndex}
                      className="text-white cursor-default inline-block whitespace-nowrap text-center lg:text-left"
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -60, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      {phrases[currentPhraseIndex]}
                    </motion.span>
                  </div>
                </div>
              </motion.h2>

              {/* Animated line */}
              <motion.div
                className="h-px bg-gradient-to-r from-white via-neutral-600 to-transparent w-24 sm:w-32 mx-auto lg:mx-0"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 1.2 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Content paragraphs */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0">
              {data.content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2 + 0.6
                  }}
                  className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light px-2 sm:px-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-md mx-auto lg:max-w-none"
          >
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="relative overflow-hidden bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-neutral-900/50 transition-all duration-700">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-1 sm:mb-2"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-neutral-400 text-xs sm:text-sm tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-white/5 rounded-full" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-white/5 rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating text element removed */}
      </div>
    </section>
  );
};

export default About;