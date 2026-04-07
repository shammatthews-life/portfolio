import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy, Star } from 'lucide-react';

const CertificationCard = ({ title, issuer, details, icon: Icon, link }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex items-start gap-6 group hover:border-accent-purple/30 hover:bg-white/5 transition-all"
  >
    <div className="p-4 rounded-2xl bg-accent-purple/10 text-accent-purple group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all shrink-0">
      <Icon size={28} />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors leading-tight">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {title}
          </a>
        ) : title}
      </h3>
      {issuer && <p className="text-sm font-semibold text-accent-purple/70 uppercase tracking-widest">{issuer}</p>}
      {details && <p className="text-white/50 text-sm leading-relaxed">{details}</p>}
    </div>
  </motion.div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      icon: Award
    },
    {
      title: "JLPT N4 Certified",
      issuer: "Japanese Language Proficiency Test",
      details: "Demonstrates proficiency in basic Japanese communication and comprehension.",
      icon: CheckCircle2,
      link: "https://www.linkedin.com/posts/sham-matthew-3958a0387_jlpt-jlptn5-jlptn4-activity-7437169500506169344-xQy8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF9ZfCEBIa4kHZKKUaMtmLDrKTMtRDlQV_c"
    },
    {
      title: "ISTE Project Participation",
      issuer: "P.S.R Engineering College",
      icon: Trophy
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Certifications <span className="text-gradient">& Recognition</span></h2>
          <div className="h-1 w-20 bg-accent-purple rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
