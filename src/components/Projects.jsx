import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';

const ProjectCard = ({ name, description, tools, icon: Icon, link }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative h-full flex flex-col bg-dark-card border border-white/10 rounded-3xl overflow-hidden hover:border-accent-purple/30 transition-all duration-500 shadow-xl"
  >
    {/* Project Header (Icon/Illustration area) */}
    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center">
      <div className="absolute inset-0 bg-dark-card opacity-50 group-hover:opacity-20 transition-opacity" />
      <Icon className="text-white/20 group-hover:text-white transition-all duration-500 group-hover:scale-110" size={80} />
      
      {/* Glow Effect */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent-purple/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Project Content */}
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-blue transition-colors">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            {name}
            <ExternalLink size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        ) : name}
      </h3>
      <div className="text-white/60 mb-8 leading-relaxed flex-1 text-sm space-y-4">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>

      {/* Tools used */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tools.map((tool, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-accent-purple uppercase tracking-wider group-hover:bg-white/10 transition-colors"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Actions (if any) */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent-blue transition-colors group/link">
          <Terminal size={18} />
          Details
        </button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      name: "AI CAREER HUB",
      description: "An integrated platform featuring an AI Resume Builder for instant parsing, Mock Interviews with tailored realistic questions, and Real-time Analysis for performance feedback. It includes AI Enhancement for ATS-friendly rewrites to strengthen your career profile effectively.",
      tools: ["React", "Python", "OpenAI API", "Tailwind CSS"],
      icon: Sparkles
    },
    {
      name: "Data Analysis & Dashboard Project",
      description: "Created interactive dashboards and visualizations to analyze datasets and provide actionable insights for decision-making.",
      tools: ["Excel", "Pandas", "Matplotlib", "Tableau"],
      icon: BarChart3,
      link: "https://www.linkedin.com/posts/sham-matthew-3958a0387_excel-dashboard-github-activity-7380810926037573632-N8Ge?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF9ZfCEBIa4kHZKKUaMtmLDrKTMtRDlQV_c"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Recent <span className="text-gradient">Projects</span></h2>
          <div className="h-1 w-20 bg-accent-purple rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
