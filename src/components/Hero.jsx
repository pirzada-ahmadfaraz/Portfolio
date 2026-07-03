import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTyping } from '../hooks/useTyping';

const Hero = ({ data }) => {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 500], [0, 80]);

  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const typingText = useTyping(data.typingTexts || ["full-stack web apps"], 90, 1800);

  const ease = [0.22, 1, 0.36, 1];
  const rise = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease, delay: 0.2 + i * 0.12 }
    })
  };

  const ticker = data.experiences || [];

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ---- Left: editorial copy ---- */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              custom={0}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center justify-center lg:justify-start gap-3 mb-7"
            >
              <span className="h-px w-10 bg-white/40" />
              <span className="font-mono-label text-[0.65rem] text-neutral-400">
                Security Researcher · Full-Stack Dev
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display leading-[0.92] text-6xl sm:text-7xl md:text-8xl xl:text-[8.5rem]"
            >
              <span className="sr-only">Pirzada </span>Ahmad
              <br />
              <span className="serif-italic text-neutral-400">Faraz</span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-8 flex flex-col items-center lg:items-start gap-1.5"
            >
              <p className="text-lg sm:text-xl text-neutral-300 font-light">
                I build{' '}
                <span className="text-white border-b border-white/30 pb-0.5">
                  {typingText}
                  <span className="ml-0.5 inline-block w-px h-5 align-middle bg-white animate-pulse" />
                </span>
              </p>
            </motion.div>

            <motion.p
              custom={3}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-neutral-400 leading-relaxed font-light"
            >
              {data.description}
            </motion.p>

            <motion.div
              custom={4}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-9 flex items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden rounded-full bg-white text-black px-7 py-3 font-mono-label text-[0.65rem]"
              >
                <span className="relative z-10">View Work</span>
              </button>

              <div className="flex items-center gap-2">
                {[
                  { Icon: Github, href: "https://github.com/pirzada-ahmadfaraz", external: true, label: "GitHub profile" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/pirzadaahmadfaraz/", external: true, label: "LinkedIn profile" },
                  { Icon: Mail, href: "#contact", external: false, label: "Contact section" }
                ].map(({ Icon, href, external, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-neutral-300 hover:text-white"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---- Right: framed monochrome portrait ---- */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
          >
            <div className="relative group">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="glass relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-[1.75rem] p-3 overflow-hidden"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-neutral-900">
                  <img
                    src={data.image}
                    alt="Pirzada Ahmad Faraz — Full-Stack Developer from Bangalore"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </motion.div>

              {/* floating mono index */}
              <div className="absolute -left-5 top-6 hidden lg:block font-mono-label text-[0.55rem] text-neutral-600 [writing-mode:vertical-rl] rotate-180">
                Est. 2025 — Portfolio
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Marquee ticker ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mt-16 border-y border-white/10 py-4 overflow-hidden"
      >
        <div className="flex w-max animate-marquee">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center font-display text-2xl sm:text-3xl text-neutral-500 whitespace-nowrap">
              <span className="px-8">{item}</span>
              <span className="text-white/30">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-mono-label text-[0.55rem] text-neutral-500">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-500" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
