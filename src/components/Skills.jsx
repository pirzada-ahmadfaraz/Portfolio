import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Styling', 'Tools'];
  
  const getSkillsByCategory = (category) => {
    return data.technical.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-blue-500/20 to-blue-600/10',
      'Backend': 'from-green-500/20 to-green-600/10',
      'Database': 'from-yellow-500/20 to-yellow-600/10',
      'Styling': 'from-pink-500/20 to-pink-600/10',
      'Tools': 'from-purple-500/20 to-purple-600/10'
    };
    return colors[category] || 'from-neutral-500/20 to-neutral-600/10';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-neutral-800/5 to-transparent rounded-full blur-3xl"
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
                Expertise
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8">
                Skills &{' '}
                <span className="text-neutral-400">technologies</span>
              </h2>
              <motion.div
                className="h-px bg-gradient-to-r from-white via-neutral-600 to-transparent w-24 sm:w-32 mx-auto lg:mx-0"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.2 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">
              <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">Technical Skills</h3>
              
              {skillCategories.map((category, categoryIndex) => {
                const categorySkills = getSkillsByCategory(category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="space-y-6"
                  >
                    <h4 className="text-base sm:text-lg text-neutral-300 font-light text-center lg:text-left">
                      {category}
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="group"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm sm:text-base text-neutral-300 font-light tracking-wide">
                              {skill.name}
                            </span>
                            <span className="text-neutral-400 text-xs sm:text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress bar container */}
                          <div className="relative h-1 bg-neutral-800 rounded-full overflow-hidden">
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-full" 
                                 style={{ background: `linear-gradient(to right, ${getCategoryColor(category).replace('from-', '').replace(' to-', ', ')})` }} />
                            
                            {/* Progress fill */}
                            <motion.div
                              className="h-full bg-gradient-to-r from-white to-neutral-300 rounded-full relative"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8, 
                                duration: 1.2, 
                                ease: "easeOut" 
                              }}
                            >
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-white/30 blur-sm rounded-full" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Tools & Experience */}
            <motion.div variants={itemVariants} className="space-y-8 sm:space-y-12">
              {/* Development Tools */}
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-light text-white text-center lg:text-left">Development Tools</h3>
                
                <motion.div
                  className="relative bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-neutral-900/50 transition-all duration-700 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl sm:rounded-2xl" />

                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {data.tools.map((tool, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-500 rounded-full flex-shrink-0" />
                          <span className="text-neutral-300 text-xs sm:text-sm font-light">
                            {tool}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-light text-white text-center lg:text-left">Experience</h3>
                
                <motion.div
                  className="space-y-4 sm:space-y-6"
                  variants={containerVariants}
                >
                  {[
                    { stat: '2+', label: 'Years Experience', delay: 0.2 },
                    { stat: '15+', label: 'Projects Completed', delay: 0.4 },
                    { stat: '10+', label: 'Technologies Mastered', delay: 0.6 },
                    { stat: '100%', label: 'Satisfaction Rate', delay: 0.8 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 sm:p-6 bg-neutral-900/20 border border-white/5 rounded-xl hover:bg-neutral-900/40 hover:border-white/10 transition-all duration-500 group"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0" />
                        <span className="text-neutral-300 font-light tracking-wide text-sm sm:text-base">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-xl sm:text-2xl font-light text-white group-hover:text-neutral-300 transition-colors duration-500">
                        {item.stat}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating text element removed */}
      </div>
    </section>
  );
};

export default Skills;