import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const Future = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const ease = [0.22, 1, 0.36, 1];

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } })
  };

  return (
    <section id="future" className="relative py-24 sm:py-32">
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
            <span className="font-mono-label text-[0.65rem] text-neutral-500">(04)</span>
            <span className="font-mono-label text-[0.65rem] text-neutral-400">Learning Path</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none">
            What's <span className="serif-italic text-neutral-400">next</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Currently learning */}
          <div className="lg:col-span-7 space-y-5">
            <motion.div
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-mono-label text-[0.6rem] text-neutral-500"
            >
              Currently Learning
            </motion.div>

            {data.currentlyLearning.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i + 1}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="glass glass-hover rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl sm:text-3xl">{item.name}</h3>
                  <span className="font-mono-label text-[0.6rem] text-neutral-400 whitespace-nowrap pt-1">
                    {item.progress}%
                  </span>
                </div>
                <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 space-y-2">
                  <div className="relative h-px bg-white/10">
                    <motion.div
                      className="absolute left-0 top-0 h-px bg-white"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.progress}%` } : {}}
                      transition={{ delay: 0.4 + i * 0.2, duration: 1.2, ease }}
                    />
                  </div>
                  <div className="font-mono-label text-[0.55rem] text-neutral-600">
                    {item.timeframe}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future interests */}
          <div className="lg:col-span-5 space-y-5">
            <motion.div
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-mono-label text-[0.6rem] text-neutral-500"
            >
              On the Horizon
            </motion.div>

            {data.futureInterests.map((interest, i) => (
              <motion.div
                key={interest.name}
                custom={i + 1}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 border-b border-white/8 pb-5"
              >
                <span className="text-xl opacity-70 grayscale">{interest.icon}</span>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-light text-neutral-200 group-hover:text-white transition-colors">
                    {interest.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light mt-0.5">
                    {interest.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
