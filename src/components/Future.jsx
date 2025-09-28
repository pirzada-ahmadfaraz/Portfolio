import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, TrendingUp, BookOpen, Zap, ArrowRight } from 'lucide-react';

const Future = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="future" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-neutral-800/5 to-transparent rounded-full blur-3xl"
          style={{ y }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
            <div className="max-w-4xl mx-auto lg:mx-0">
              <div className="text-xs sm:text-sm text-neutral-400 tracking-widest uppercase mb-3 sm:mb-4">
                Learning Path
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8">
                Future{' '}
                <span className="text-neutral-400">goals</span>
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

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Currently Learning */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-xl sm:text-2xl font-light text-white">Currently Learning</h3>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {data.currentlyLearning.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="relative bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-neutral-900/50 hover:border-white/20 transition-all duration-700">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl sm:rounded-2xl" />

                      <div className="relative z-10 space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                          <h4 className="text-lg sm:text-xl font-light text-white group-hover:text-neutral-300 transition-colors duration-500 text-center sm:text-left">
                            {item.name}
                          </h4>
                          <div className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mx-auto sm:mx-0">
                            <TrendingUp className="w-3 h-3 text-green-400" />
                            <span className="text-green-400 text-sm font-medium">
                              {item.progress}%
                            </span>
                          </div>
                        </div>

                        <p className="text-neutral-400 leading-relaxed font-light text-sm sm:text-base text-center sm:text-left">
                          {item.description}
                        </p>

                        {/* Progress bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-neutral-500">Progress</span>
                            <span className="text-neutral-400 font-medium">
                              {item.timeframe}
                            </span>
                          </div>
                          <div className="relative h-1.5 sm:h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-full relative"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${item.progress}%` } : {}}
                              transition={{
                                delay: index * 0.3 + 0.8,
                                duration: 1.5,
                                ease: "easeOut"
                              }}
                            >
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-green-400/30 blur-sm rounded-full" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Future Interests */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-xl sm:text-2xl font-light text-white">Future Interests</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {data.futureInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group cursor-pointer"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 bg-neutral-900/20 border border-white/5 rounded-xl hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500">
                      <div className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        {interest.icon}
                      </div>
                      <div className="space-y-2 sm:space-y-3 flex-1 text-center sm:text-left">
                        <div>
                          <h4 className="text-base sm:text-lg font-light text-white group-hover:text-neutral-300 transition-colors duration-500">
                            {interest.name}
                          </h4>
                        </div>
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </motion.div>

        {/* Floating text element removed */}
      </div>
    </section>
  );
};

export default Future;