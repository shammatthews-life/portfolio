import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-6 glass-card group hover:bg-white/5 transition-colors"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/50 tracking-widest uppercase">
        {label}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* LEFT SIDE: Professional summary */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
            <div className="h-1 w-20 bg-accent-purple rounded-full" />
          </div>
          
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              I am a motivated and detail-oriented Data Analyst specializing in AI and Data Science. I have hands-on experience in data analysis, machine learning pipelines, and visualization tools.
            </p>
            <p>
              I enjoy solving real-world problems using data-driven approaches and continuously improving my technical expertise.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Animated counters */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-8">
          <Counter target="3" label="Projects" suffix="+" />
          <Counter target="2" label="Internships" />
          <Counter target="3" label="Certifications" />
          <Counter target="3" label="Languages Known" />
        </div>
      </div>
    </section>
  );
};

export default About;
