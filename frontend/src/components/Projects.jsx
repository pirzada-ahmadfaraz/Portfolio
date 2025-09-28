import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = ({ data }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + data.length) % data.length);
  };

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-neutral-800/5 to-transparent rounded-full blur-3xl"
          style={{ y }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="mb-8 sm:mb-12 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="text-xs sm:text-sm text-neutral-400 tracking-widest uppercase mb-3 sm:mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6">
              Selected{' '}
              <span className="text-neutral-400">projects</span>
            </h2>
            <motion.div
              className="h-px bg-gradient-to-r from-white via-neutral-600 to-transparent w-32 sm:w-40 mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>

        {/* Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <div className="flex space-x-3 sm:space-x-4">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-white scale-125'
                      : 'bg-neutral-600 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <motion.button
                onClick={prevProject}
                className="p-2 sm:p-3 border border-white/20 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="p-2 sm:p-3 border border-white/20 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>

          {/* Current Project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="group"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                {/* Project Image */}
                <motion.div
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl order-1 lg:order-2 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredProject(data[currentProject].id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="aspect-[4/3] relative group cursor-pointer">
                    <motion.img
                      src={data[currentProject].image}
                      alt={data[currentProject].title}
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl sm:rounded-2xl" />

                    {/* Status badge */}
                    <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                      <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                        data[currentProject].status === 'Completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}>
                        {data[currentProject].status}
                      </div>
                    </div>

                    {/* Hover overlay with links */}
                    <AnimatePresence>
                      {hoveredProject === data[currentProject].id && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center space-x-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.a
                            href={data[currentProject].demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.a>
                          <motion.a
                            href={data[currentProject].codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-xs sm:text-sm text-neutral-400 tracking-widest uppercase">
                      {String(currentProject + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
                    </div>

                    <h3 className="text-2xl xs:text-3xl lg:text-4xl font-light group-hover:text-neutral-300 transition-colors duration-500">
                      {data[currentProject].title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light max-w-md mx-auto lg:mx-0 px-4 sm:px-0">
                      {data[currentProject].description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wide">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {data[currentProject].technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="px-2.5 sm:px-3 py-1 bg-neutral-900/50 border border-white/10 rounded-full text-xs text-neutral-300 hover:border-white/30 transition-colors duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <span className="mr-1.5 sm:mr-2">{tech.icon}</span>
                          {tech.name}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wide">
                      Key Features
                    </div>
                    <ul className="space-y-1 max-w-xs sm:max-w-md mx-auto lg:mx-0">
                      {data[currentProject].features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-neutral-300 font-light text-xs sm:text-sm justify-center lg:justify-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 + 0.4, duration: 0.5 }}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-neutral-500 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Links */}
                  <motion.div
                    className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 pt-3 sm:pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.a
                      href={data[currentProject].demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-white hover:text-neutral-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <span className="text-xs sm:text-sm tracking-wide uppercase">Live Demo</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>

                    <motion.a
                      href={data[currentProject].codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-neutral-400 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <span className="text-xs sm:text-sm tracking-wide uppercase">Source</span>
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating text element removed */}
      </div>
    </section>
  );
};

export default Projects;