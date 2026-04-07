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

      {/* RIGHT SIDE: Professional profile image with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 mt-12 md:mt-0 flex justify-center items-center relative"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Animated Glow Circle behind image */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 bg-gradient-to-r from-accent-blue to-accent-purple blur-3xl opacity-30 rounded-full"
          />
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative z-10"
          >
            <div className="w-full h-full bg-dark-card flex items-center justify-center text-white/20">
              {/* Placeholder for Profile Image */}
              <div className="text-center">
                <p className="text-sm font-medium">Professional Photo</p>
                <p className="text-xs">Sham Matthew S</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
