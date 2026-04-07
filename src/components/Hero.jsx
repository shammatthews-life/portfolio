import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Subtle Gradient Glow Background */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-purple/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-blue/10 blur-[150px] rounded-full -z-10" />

      {/* LEFT SIDE: Name, Title, Tagline, Intro, Buttons */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8"
      >
        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent-blue font-semibold tracking-widest uppercase text-sm"
          >
            Data Analyst
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Sham <span className="text-gradient">Matthew S</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium italic">
            "Transforming raw data into meaningful insights and intelligent solutions"
          </p>
        </div>

        <p className="text-lg text-white/60 max-w-xl leading-relaxed">
          Aspiring Data Analyst with a strong foundation in AI & Data Science, skilled in Python, data analysis, and visualization.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent-purple hover:bg-accent-purple/90 text-white font-bold rounded-full transition-all flex items-center gap-2"
          >
            <FileText size={20} />
            View Resume
          </a>
          <a 
            href="/resume.pdf" 
            download="Sham_Matthew_S_Resume.pdf"
            className="px-8 py-3 border border-white/20 hover:border-accent-purple/50 text-white font-bold rounded-full transition-all flex items-center gap-2 group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Professional profile image with dynamic morphing shape */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 mt-8 md:mt-0 flex justify-center items-start relative"
      >
        <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
          {/* Animated Glow Circle behind image */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan blur-[100px] opacity-30 rounded-full"
          />
          
          {/* Intense Pulsing Glow around the image */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-10 bg-accent-purple/30 blur-[60px] rounded-full z-0"
          />
          
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-4/5 h-4/5 overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative z-10 bg-dark"
          >
            <img 
              src="/profile(1).jpeg" 
              alt="Sham Matthew S" 
              className="w-full h-full object-cover"
              style={{ objectPosition: '89% 42%' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
