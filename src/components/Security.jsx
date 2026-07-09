import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Bug, Terminal, Lock, CheckCircle2 } from 'lucide-react';

const Security = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const ease = [0.22, 1, 0.36, 1];

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } })
  };

  return (
    <section id="security" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          custom={0}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-label text-[0.65rem] text-neutral-500">(03)</span>
            <span className="font-mono-label text-[0.65rem] text-neutral-400">{data.label}</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none">
            Breaking things,{' '}
            <span className="serif-italic text-neutral-400">responsibly.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {data.intro}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={1}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14"
        >
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass glass-hover group relative overflow-hidden rounded-2xl p-5 sm:p-6"
              whileHover={{ y: -4 }}
            >
              <div className="font-display text-4xl sm:text-5xl text-white leading-none">
                {stat.value}
              </div>
              <div className="mt-3 font-mono-label text-[0.5rem] sm:text-[0.55rem] text-neutral-400 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Case studies */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              custom={1}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-2.5 font-mono-label text-[0.6rem] text-neutral-500"
            >
              <Bug className="w-3.5 h-3.5" />
              Selected Findings
            </motion.div>

            {data.caseStudies.map((c, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="glass glass-hover rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {!c.named && <Lock className="w-3 h-3 text-neutral-600 flex-shrink-0" />}
                      <h3 className="font-display text-2xl sm:text-3xl truncate">{c.target}</h3>
                    </div>
                    <div className="mt-1 font-mono-label text-[0.55rem] text-neutral-500">
                      {c.sector}
                    </div>
                  </div>
                  <span
                    className={`font-mono-label text-[0.55rem] whitespace-nowrap pt-1.5 ${
                      c.severity === 'Critical' ? 'text-white' : 'text-neutral-400'
                    }`}
                  >
                    {c.severity}
                  </span>
                </div>

                <div className="text-base sm:text-lg font-light text-neutral-200 leading-snug">
                  {c.title}
                </div>
                <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
                  {c.description}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono-label text-[0.5rem] text-neutral-300">
                    {c.status.includes('Patched') && <CheckCircle2 className="w-3 h-3" />}
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    {c.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right rail — vuln classes + tools */}
          <div className="lg:col-span-5 space-y-5">
            {/* Vuln classes */}
            <motion.div
              custom={2}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 font-mono-label text-[0.6rem] text-neutral-500 mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Vulnerability Classes
              </div>
              <div className="flex flex-wrap gap-2">
                {data.vulnClasses.map((v, i) => (
                  <motion.span
                    key={v}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 font-light hover:border-white/30 hover:text-white transition-colors duration-300"
                  >
                    {v}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools built */}
            <motion.div
              custom={3}
              variants={rise}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-2.5 font-mono-label text-[0.6rem] text-neutral-500 pt-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              Tools I Built
            </motion.div>

            {data.tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                custom={i + 3}
                variants={rise}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-mono-label text-[0.7rem] text-white">{tool.name}</h4>
                    <div className="mt-1.5 text-sm font-light text-neutral-300">{tool.tagline}</div>
                  </div>
                  <span className="font-mono-label text-[0.5rem] text-neutral-500 whitespace-nowrap pt-1">
                    {tool.status}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ethics note */}
        <motion.div
          custom={4}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex items-start gap-2.5 max-w-2xl"
        >
          <Lock className="w-3.5 h-3.5 text-neutral-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-neutral-500 font-light leading-relaxed">
            All research is conducted within bug-bounty scope or under responsible disclosure. Unconfirmed
            or still-live findings are anonymized by sector; only vendor-confirmed cases are named.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
