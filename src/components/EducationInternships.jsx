import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const TimelineItem = ({ title, institution, duration, details, icon: Icon, link }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-10 pb-12 border-l border-white/10 last:pb-0 group"
  >
    {/* Timeline Dot */}
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-dark border-2 border-accent-purple group-hover:bg-accent-purple transition-colors flex items-center justify-center z-10 shadow-lg shadow-accent-purple/20">
      <Icon size={12} className="text-white" />
    </div>

    {/* Content Card */}
    <div className="glass-card p-6 group-hover:border-accent-purple/30 group-hover:shadow-xl group-hover:shadow-accent-purple/5 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
        <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          ) : title}
        </h3>
        <div className="flex items-center text-accent-purple text-sm font-semibold">
          <Calendar size={14} className="mr-1" />
          {duration}
        </div>
      </div>
      <p className="text-white/70 font-medium mb-4">{institution}</p>
      {details && (
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="text-sm text-white/50 flex items-start">
              <span className="mr-2 text-accent-blue">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const EducationInternships = () => {
  const education = [
    {
      title: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Francis Xavier Engineering College (FXEC)",
      duration: "2023 – 2027",
      details: ["CGPA: 7.8"]
    },
    {
      title: "Higher Secondary (HSC)",
      institution: "Assisi Matric Higher Secondary School",
      duration: "2021 – 2023",
      details: ["Score: 80.3%"]
    },
    {
      title: "SSLC (10th)",
      institution: "Assisi Matric Higher Secondary School",
      duration: "2021",
      details: []
    }
  ];

  const internships = [
    {
      title: "Data Analyst Intern",
      institution: "Infosmite",
      duration: "2025",
      link: "https://www.linkedin.com/posts/sham-matthew-3958a0387_dataanalytics-powerbi-datavisualization-activity-7447296194843910144-Fxby?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF9ZfCEBIa4kHZKKUaMtmLDrKTMtRDlQV_c",
      details: [
        "Worked with Pandas, Excel, Matplotlib",
        "Built dashboards and data visualizations",
        "Converted raw data into actionable business insights"
      ]
    },
    {
      title: "AI Intern",
      institution: "Gateway Solutions",
      duration: "2025",
      details: [
        "Worked on machine learning pipelines",
        "Used Hugging Face pre-trained models",
        "Performed data preprocessing and transformation",
        "Implemented solutions using Jupyter Notebook and Python"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Academic <span className="text-gradient">& Professional</span> Journey</h2>
          <div className="h-1 w-40 bg-accent-purple rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: Education Timeline */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-blue/10 rounded-xl">
                <GraduationCap className="text-accent-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="ml-4">
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} icon={GraduationCap} />
              ))}
            </div>
          </div>

          {/* RIGHT: Internships Timeline */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-purple/10 rounded-xl">
                <Briefcase className="text-accent-purple" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Internships</h3>
            </div>
            <div className="ml-4">
              {internships.map((item, index) => (
                <TimelineItem key={index} {...item} icon={Briefcase} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInternships;
