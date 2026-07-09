import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ArrowUpRight } from 'lucide-react';

const Hackathons = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const ease = [0.22, 1, 0.36, 1];

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } })
  };

  return (
    <section id="hackathons" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          custom={0}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-label text-[0.65rem] text-neutral-500">(04)</span>
            <span className="font-mono-label text-[0.65rem] text-neutral-400">{data.label}</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none">
            Built under <span className="serif-italic text-neutral-400">pressure.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            From an ISRO exoplanet-detection ML pipeline to fintech and mobility products — things I've
            designed and shipped against a clock.
          </p>
        </motion.div>

        {/* Timeline of hackathons */}
        <div className="space-y-4">
          {data.items.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i + 1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass glass-hover group rounded-[1.5rem] p-6 sm:p-8"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left — identity */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono-label text-[0.55rem] text-neutral-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono-label text-[0.55rem] text-neutral-500">{item.year}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl leading-none">{item.name}</h3>
                  <div className="mt-4 space-y-1.5">
                    <div className="text-sm font-light text-neutral-200">{item.event}</div>
                    <div className="font-mono-label text-[0.55rem] text-neutral-500">{item.track}</div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono-label text-[0.5rem] text-neutral-300">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {item.result}
                    </span>
                    {item.codeLink && (
                      <a
                        href={item.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono-label text-[0.55rem] text-neutral-400 hover:text-white transition-colors"
                        aria-label={`${item.name} source`}
                      >
                        Code <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — detail */}
                <div className="lg:col-span-8 lg:border-l lg:border-white/10 lg:pl-8">
                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {item.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-sm text-neutral-300 font-light">
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t, j) => (
                        <span
                          key={j}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 font-light group-hover:border-white/20 transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
