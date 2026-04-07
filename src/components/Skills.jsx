import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Terminal, Cpu, Layers } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-8 group hover:border-accent-blue/30 hover:shadow-2xl hover:shadow-accent-blue/5"
  >
    <div className={`p-4 rounded-2xl bg-${color}/10 w-fit mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className={`text-${color}`} size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent-blue transition-colors">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx} 
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "accent-blue",
      skills: ["Python", "SQL", "C", "Java"]
    },
    {
      title: "Web Technologies",
      icon: Layout,
      color: "accent-purple",
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      title: "Data & Tools",
      icon: Database,
      color: "accent-cyan",
      skills: ["Excel", "Tableau", "Pandas", "Matplotlib", "Jupyter Notebook", "Hugging Face Transformers"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Technical <span className="text-gradient">Skillset</span></h2>
          <div className="h-1 w-20 bg-accent-purple rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
