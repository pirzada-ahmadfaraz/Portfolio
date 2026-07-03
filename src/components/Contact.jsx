import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Send, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { sendContactEmail } from '../services/emailService';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px', triggerOnce: true });
  const ease = [0.22, 1, 0.36, 1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast({ title: "Message sent", description: "Thanks for reaching out — I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Message failed",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } })
  };

  const inputClass =
    "w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:border-white/40 focus:bg-white/[0.04] focus:outline-none transition-all duration-300 text-sm font-light";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          custom={0}
          variants={rise}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono-label text-[0.65rem] text-neutral-500">(05)</span>
            <span className="font-mono-label text-[0.65rem] text-neutral-400">Get in Touch</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Let's build <span className="serif-italic text-neutral-400">something.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info */}
          <motion.div
            custom={1}
            variants={rise}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-3"
          >
            <a
              href={`mailto:${data.email}`}
              className="group glass glass-hover flex items-center justify-between rounded-2xl p-6"
            >
              <div>
                <div className="font-mono-label text-[0.55rem] text-neutral-500 mb-2">Email</div>
                <div className="text-base sm:text-lg font-light text-white break-all">{data.email}</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0 ml-3" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-6">
                <MapPin className="w-4 h-4 text-neutral-400 mb-4" />
                <div className="font-mono-label text-[0.55rem] text-neutral-500 mb-1.5">Location</div>
                <div className="text-sm font-light text-neutral-200">{data.location}</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <Clock className="w-4 h-4 text-neutral-400 mb-4" />
                <div className="font-mono-label text-[0.55rem] text-neutral-500 mb-1.5">Status</div>
                <div className="text-sm font-light text-neutral-200">{data.availability}</div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { Icon: Github, href: "https://github.com/pirzada-ahmadfaraz", label: "GitHub profile" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/pirzadaahmadfaraz", label: "LinkedIn profile" },
                { Icon: Twitter, href: "https://x.com/pzahmadfaraz", label: "X (Twitter) profile" }
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full text-neutral-400 hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  <s.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={2}
            variants={rise}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="font-mono-label text-[0.55rem] text-neutral-500">Name</label>
                  <input id="contact-name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className={inputClass} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-mono-label text-[0.55rem] text-neutral-500">Email</label>
                  <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className={inputClass} required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="font-mono-label text-[0.55rem] text-neutral-500">Subject</label>
                <input id="contact-subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className={inputClass} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="font-mono-label text-[0.55rem] text-neutral-500">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project, or just say hi." rows={5} className={`${inputClass} resize-none`} required />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-xl bg-white text-black px-6 py-4 font-mono-label text-[0.65rem] disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  {isSubmitting ? (
                    <>
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
