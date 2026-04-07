import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, MapPin, Globe, ArrowRight } from 'lucide-react';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? '_blank' : undefined} 
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="group flex items-center gap-6 p-6 glass-card hover:bg-white/5 hover:border-accent-purple/30 transition-all min-w-0"
  >
    <div className="p-4 rounded-2xl bg-accent-purple/10 text-accent-purple group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all shrink-0 shadow-lg shadow-accent-purple/10">
      <Icon size={24} />
    </div>
    <div className="space-y-1 min-w-0 overflow-hidden">
      <p className="text-sm font-semibold text-accent-purple/70 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors flex items-center gap-2 truncate">
        <span className="truncate">{value}</span>
        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
      </p>
    </div>
  </a>
);

const LanguageBadge = ({ name, level, link }) => {
  const content = (
    <div className="flex items-center gap-4 p-4 glass-card bg-white/5 border-white/5 hover:bg-white/10 transition-colors h-full">
      <div className="w-2 h-2 rounded-full bg-accent-blue shadow-lg shadow-accent-blue/50" />
      <div className="space-y-1">
        <p className="font-bold text-white leading-tight">{name}</p>
        <p className="text-xs text-white/40 uppercase tracking-widest">{level}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

const Contact = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9790099292",
      href: "tel:+919790099292"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shammatthew04@gmail.com",
      href: "mailto:shammatthew04@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sham-matthew",
      href: "https://linkedin.com/in/sham-matthew"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Portfolio Code",
      href: "https://github.com/shammatthew"
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Professional" },
    { 
      name: "Japanese", 
      level: "JLPT N4 Level",
      link: "https://www.linkedin.com/posts/sham-matthew-3958a0387_jlpt-jlptn5-jlptn4-activity-7437169500506169344-xQy8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF9ZfCEBIa4kHZKKUaMtmLDrKTMtRDlQV_c"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-blue/10 blur-[200px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-purple/10 blur-[200px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Contact Info & Languages */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-4">
              <p className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">Let's Connect <span className="text-gradient">& Create</span></h2>
              <div className="h-1 w-20 bg-accent-purple rounded-full" />
              <p className="text-lg text-white/60 pt-4 leading-relaxed max-w-lg italic font-medium">
                "Transforming raw data into meaningful insights and intelligent solutions"
              </p>
            </div>

            {/* Languages Section */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Globe size={24} className="text-accent-blue" />
                Languages Known
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <LanguageBadge key={index} {...lang} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Cards */}
          <div className="flex-1 grid md:grid-cols-2 gap-4 lg:gap-6">
            {contactDetails.map((detail, index) => (
              <ContactInfo key={index} {...detail} />
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center pt-20 border-t border-white/10 space-y-4">
          <p className="text-white/40 font-medium">
            © {new Date().getFullYear()} Sham Matthew S. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 text-white/20 text-sm">
            <span>Built with React + Tailwind CSS</span>
            <span>Designed for Data Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
