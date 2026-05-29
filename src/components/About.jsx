import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  const phrases = [
    "crypto dApps",
    "web3 solutions",
    "blockchain apps",
    "smart contracts",
    "DeFi platforms"
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, [inView, phrases.length]);

  const ease = [0.22, 1, 0.36, 1];
  const rise = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: i * 0.1 } })
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ---- Left copy ---- */}
          <div className="lg:col-span-7">
            <motion.div
              custom={0}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-mono-label text-[0.65rem] text-neutral-500">(01)</span>
              <span className="font-mono-label text-[0.65rem] text-neutral-400">About</span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              Building{' '}
              <span className="relative inline-grid h-[1.15em] overflow-hidden align-bottom">
                <AnimatedPhrase phrase={phrases[idx]} key={idx} />
              </span>
              <br />
              that <span className="serif-italic text-neutral-400">actually ship.</span>
            </motion.h2>

            <div className="mt-10 space-y-5 max-w-xl">
              {data.content.split('\n\n').map((p, i) => (
                <motion.p
                  key={i}
                  custom={i + 2}
                  variants={rise}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* ---- Right stats ---- */}
          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-5 sm:p-7"
                whileHover={{ y: -4 }}
              >
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
                  {stat.value}
                </div>
                <div className="mt-3 font-mono-label text-[0.55rem] text-neutral-400 leading-relaxed">
                  {stat.label}
                </div>
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnimatedPhrase = ({ phrase }) => (
  <motion.span
    className="serif-italic text-white whitespace-nowrap"
    initial={{ y: '100%', opacity: 0 }}
    animate={{ y: '0%', opacity: 1 }}
    exit={{ y: '-100%', opacity: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {phrase}
  </motion.span>
);

export default About;
