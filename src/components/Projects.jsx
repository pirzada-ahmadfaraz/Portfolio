import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState({});
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });

  const next = () => setCurrent((p) => (p + 1) % data.length);
  const prev = () => setCurrent((p) => (p - 1 + data.length) % data.length);

  const ease = [0.22, 1, 0.36, 1];
  const project = data[current];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-label text-[0.65rem] text-neutral-500">(02)</span>
              <span className="font-mono-label text-[0.65rem] text-neutral-400">Selected Work</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none">
              Projects<span className="serif-italic text-neutral-400">.</span>
            </h2>
          </div>

          {/* nav controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono-label text-[0.65rem] text-neutral-500">
              {String(current + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-neutral-300 hover:text-white"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-neutral-300 hover:text-white"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            dragSnapToOrigin
            onDragEnd={(e, info) => {
              const threshold = 90;
              if (info.offset.x < -threshold || info.velocity.x < -500) next();
              else if (info.offset.x > threshold || info.velocity.x > 500) prev();
            }}
            whileDrag={{ cursor: 'grabbing', scale: 0.985 }}
            className="glass rounded-[1.75rem] p-3 sm:p-4 cursor-grab active:cursor-grabbing select-none touch-pan-y"
          >
            <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 items-stretch">
              {/* Image */}
              <div className="relative order-1 lg:order-2 overflow-hidden rounded-[1.25rem] min-h-[14rem] lg:min-h-[28rem] group">
                {/* fallback layer */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <span className="font-display text-[10rem] text-white/5 leading-none select-none">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                </div>

                {!imgError[current] && (
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    onError={() => setImgError((s) => ({ ...s, [current]: true }))}
                    className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* status */}
                <div className="absolute top-4 left-4">
                  <span className="glass rounded-full px-3 py-1.5 font-mono-label text-[0.55rem] text-white flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {project.status}
                  </span>
                </div>

                {/* quick links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-white"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-white"
                    aria-label="Source code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-1 flex flex-col p-5 sm:p-8 lg:p-10">
                <h3 className="font-display text-4xl sm:text-5xl leading-none">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-light max-w-md">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-7">
                  <div className="font-mono-label text-[0.55rem] text-neutral-500 mb-3">Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 font-light hover:border-white/30 transition-colors duration-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-400 font-light">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/50 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-8 flex items-center gap-6">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 font-mono-label text-[0.65rem] text-white"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono-label text-[0.65rem] text-neutral-400 hover:text-white transition-colors"
                  >
                    Source
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* dots */}
        <div className="mt-8 flex justify-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
