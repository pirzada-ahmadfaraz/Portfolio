import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const ease = [0.22, 1, 0.36, 1];

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } })
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          custom={0}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-label text-[0.65rem] text-neutral-500">(05)</span>
            <span className="font-mono-label text-[0.65rem] text-neutral-400">Expertise</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none">
            Skills &amp; <span className="serif-italic text-neutral-400">tools</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Technical bars */}
          <div className="lg:col-span-7 space-y-6">
            {data.technical.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group"
              >
                <div className="flex items-baseline justify-between mb-2.5">
                  <span className="text-base sm:text-lg font-light text-neutral-200">
                    {skill.name}
                  </span>
                  <span className="font-mono-label text-[0.6rem] text-neutral-500">
                    {skill.category}
                  </span>
                </div>
                <div className="relative h-px bg-white/10 overflow-visible">
                  <motion.div
                    className="absolute left-0 top-0 h-px bg-white origin-left"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 1.1, ease }}
                  />
                  <motion.span
                    className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.5)]"
                    style={{ left: `calc(${skill.level}% - 3px)` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 + 1, duration: 0.3, ease }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools + note */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="font-mono-label text-[0.6rem] text-neutral-500 mb-5">Toolkit</div>
              <div className="flex flex-wrap gap-2.5">
                {data.tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-neutral-300 font-light hover:border-white/30 hover:text-white transition-colors duration-300"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <p className="font-display text-2xl sm:text-3xl leading-snug text-neutral-300">
                “I'd rather ship one real product than read ten tutorials about it.”
              </p>
              <div className="mt-5 font-mono-label text-[0.55rem] text-neutral-500">
                — How I learn
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
