import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { sendContactEmail } from '../services/emailService';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Message Failed",
        description: "Sorry, there was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-neutral-800/5 to-transparent rounded-full blur-3xl"
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-xs sm:text-sm text-neutral-400 tracking-widest uppercase mb-3 sm:mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8">
                Let's{' '}
                <span className="text-neutral-400">collaborate</span>
              </h2>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-24 sm:w-32 mx-auto mb-6 sm:mb-8"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.2 }}
              />
              <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto px-4 sm:px-0">
                {data.description}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    Icon: Mail,
                    title: "Email",
                    content: data.email,
                    href: `mailto:${data.email}`,
                    delay: 0.2
                  },
                  {
                    Icon: MapPin,
                    title: "Location",
                    content: data.location,
                    delay: 0.4
                  },
                  {
                    Icon: Clock,
                    title: "Availability",
                    content: data.availability,
                    delay: 0.6
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 bg-neutral-900/20 border border-white/5 rounded-xl hover:bg-neutral-900/40 hover:border-white/20 transition-all duration-500">
                      <div className="p-2.5 sm:p-3 bg-white/10 rounded-full border border-white/20 group-hover:bg-white/20 transition-colors duration-500 flex-shrink-0">
                        <item.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="space-y-1 sm:space-y-2 text-center sm:text-left flex-1">
                        <h4 className="font-light text-white group-hover:text-neutral-300 transition-colors duration-500 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('mailto:') ? undefined : "_blank"}
                            rel={item.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                            className="text-neutral-400 text-xs sm:text-sm hover:text-white transition-colors duration-300 block"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-neutral-400 text-xs sm:text-sm">
                            {item.content}
                          </p>
                        )}
                      </div>
                      {item.href && (
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 sm:ml-auto hidden sm:block" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6 sm:pt-8">
                <h4 className="font-light text-white mb-4 sm:mb-6 text-center lg:text-left text-sm sm:text-base">Connect with me</h4>
                <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                  {[
                    { Icon: Github, href: "https://github.com/pirzada-ahmadfaraz", label: "Github" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/pirzadaahmadfaraz", label: "LinkedIn" },
                    { Icon: Twitter, href: "https://x.com/pzahmadfaraz", label: "Twitter" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 bg-neutral-900/30 border border-white/10 rounded-xl hover:bg-neutral-900/50 hover:border-white/30 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3 order-1 lg:order-2">
              <div className="relative bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-neutral-900/50 transition-all duration-700">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-xl sm:rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center lg:text-left">Send a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name Input */}
                      <motion.div
                        className="space-y-1.5 sm:space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <label className="text-xs sm:text-sm font-light text-neutral-300 tracking-wide">
                          Name
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus:bg-neutral-900/70 transition-all duration-300 text-sm sm:text-base"
                          required
                        />
                      </motion.div>

                      {/* Email Input */}
                      <motion.div
                        className="space-y-1.5 sm:space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <label className="text-xs sm:text-sm font-light text-neutral-300 tracking-wide">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus:bg-neutral-900/70 transition-all duration-300 text-sm sm:text-base"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    {/* Subject Input */}
                    <motion.div
                      className="space-y-1.5 sm:space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <label className="text-xs sm:text-sm font-light text-neutral-300 tracking-wide">
                        Subject
                      </label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus:bg-neutral-900/70 transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </motion.div>
                    
                    {/* Message Textarea */}
                    <motion.div
                      className="space-y-1.5 sm:space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <label className="text-xs sm:text-sm font-light text-neutral-300 tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hi!"
                        rows={5}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus:bg-neutral-900/70 transition-all duration-300 resize-none text-sm sm:text-base"
                        required
                      />
                    </motion.div>
                    
                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative overflow-hidden w-full bg-white text-black border border-white rounded-lg px-6 py-3 sm:px-8 sm:py-4 font-light tracking-wide hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                              <span className="text-sm sm:text-base">Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-sm sm:text-base">Send Message</span>
                            </>
                          )}
                        </span>

                        {/* Button hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating text element removed */}
      </div>
    </section>
  );
};

export default Contact;