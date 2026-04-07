import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center gap-8"
    >
      <div className="relative w-24 h-24">
        {/* Outer Circle */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-t-accent-purple border-r-accent-blue border-b-accent-cyan border-l-transparent rounded-full blur-[1px]"
        />
        {/* Inner Circle */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border-4 border-t-accent-blue border-r-transparent border-b-accent-purple border-l-transparent rounded-full blur-[1px]"
        />
        {/* Center Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-8 bg-accent-purple/50 rounded-full blur-[10px]"
        />
      </div>
      
      <div className="space-y-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold tracking-[0.2em] uppercase text-gradient italic"
        >
          Sham Matthew
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/30 text-xs font-semibold tracking-widest uppercase"
        >
          Initializing Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
