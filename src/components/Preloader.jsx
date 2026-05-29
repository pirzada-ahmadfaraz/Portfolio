import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="grain fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="grid-bg absolute inset-0 opacity-60" />

      <div className="relative text-center px-6">
        <motion.div
          className="font-mono-label text-[0.65rem] text-neutral-500 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Portfolio — 2026
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-8xl leading-none"
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Ahmad <span className="serif-italic text-neutral-400">Faraz</span>
        </motion.h1>

        <motion.div
          className="mx-auto mt-8 h-px w-56 sm:w-72 bg-neutral-800 overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ transformOrigin: 'left' }}
        >
          <motion.div
            className="h-full w-1/3 bg-white"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        <motion.div
          className="font-mono-label text-[0.6rem] text-neutral-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Full-Stack Developer
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
