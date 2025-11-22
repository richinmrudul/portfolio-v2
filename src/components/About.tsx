import React from "react";
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const About: React.FC = () => {
  const skillBadges = [
    { 
      name: "Golang", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6 2.3c-.3-.1-.6-.1-.9 0L8.5 5.1c-.3.1-.5.4-.5.7v5.1c0 .3.2.6.5.7l6.2 2.8c.3.1.6.1.9 0l6.2-2.8c.3-.1.5-.4.5-.7V5.8c0-.3-.2-.6-.5-.7l-6.2-2.8z" fill="#00ADD8"/>
          <path d="M8.5 12.8c-.3-.1-.5-.4-.5-.7V7c0-.3.2-.6.5-.7l6.2-2.8c.3-.1.6-.1.9 0l6.2 2.8c.3.1.5.4.5.7v5.1c0 .3-.2.6-.5.7l-6.2 2.8c-.3.1-.6.1-.9 0L8.5 12.8z" fill="#5DC9E2"/>
        </svg>
      ), 
      color: "#00ADD8" 
    }, // Backend Badge
    { 
      name: "Python", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 2.5c-1.5 0-2.5 1-2.5 2.5v2h-5v1h5v8.5c0 1.5-1 2.5-2.5 2.5S4.5 20 4.5 18.5V15h-2v3.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V6c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5V9h-2V5c0-1.5-1-2.5-2.5-2.5z" fill="#3776AB"/>
          <path d="M9.5 21.5c1.5 0 2.5-1 2.5-2.5V16h5v-1h-5V6.5c0-1.5 1-2.5 2.5-2.5S19.5 5 19.5 6.5V10h2V6.5c0-2.5-2-4.5-4.5-4.5S12 4 12 6.5v12c0 2.5-2 4.5-4.5 4.5S3 21 3 18.5V15h2v3.5c0 1.5 1 2.5 2.5 2.5z" fill="#FFD43B"/>
        </svg>
      ), 
      color: "#FFD34E" 
    }, // AI/ML Badge
    { 
      name: "React", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
        </svg>
      ), 
      color: "#61DAFB" 
    }, // Full-Stack Badge
    { 
      name: "Docker", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.984 6.984h2.016v2.016h-2.016V6.984zm-3 0h2.016v2.016H10.984V6.984zm-3 0H9.984v2.016H7.968V6.984zm-3 0H6.984v2.016H4.968V6.984zm12-3.984c1.078 0 1.969 0.891 1.969 1.969v12.047c0 1.078-0.891 1.969-1.969 1.969H4.969c-1.078 0-1.969-0.891-1.969-1.969V4.969c0-1.078 0.891-1.969 1.969-1.969h15z" fill="#0DB7ED"/>
        </svg>
      ), 
      color: "#0DB7ED" 
    }, // DevOps Badge
    { 
      name: "TypeScript", 
      icon: (
        <span className="text-lg font-bold" style={{ color: "#3178C6" }}>TS</span>
      ), 
      color: "#3178C6" 
    }, // Language Badge
    { 
      name: "PostgreSQL", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#336791"/>
        </svg>
      ), 
      color: "#336791" 
    }, // Database Badge
    { 
      name: "Firebase", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.969 2.956a.543.543 0 01.143.464l-2.33 13.82a.268.268 0 01-.41.175l-3.182-2.204a.543.543 0 00-.375-.127z" fill="#FFA000"/>
          <path d="M15.838 15.5l-2.33-13.82a.543.543 0 01.143-.464L16.62-1.74a.542.542 0 011.015.173l2.33 13.82a.268.268 0 01-.175.31l-3.182 2.204a.543.543 0 01-.57-.107z" fill="#FFCA28"/>
          <path d="M13.023 24L.896 15.672a.268.268 0 01-.175-.31l2.33-13.82a.543.543 0 01.375-.464L13.023 24z" fill="#F57C00"/>
        </svg>
      ), 
      color: "#FFA000" 
    }, // Cloud Badge
    { 
      name: "Playwright", 
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="12" r="3" fill="#45B4D4"/>
          <circle cx="16" cy="12" r="3" fill="#45B4D4"/>
          <path d="M8 9c1.5 0 2.5 1 2.5 2.5S9.5 14 8 14M16 9c-1.5 0-2.5 1-2.5 2.5S14.5 14 16 14" stroke="#45B4D4" strokeWidth="1.5" fill="none"/>
        </svg>
      ), 
      color: "#45B4D4" 
    }, // Automation Badge
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pokemon-yellow mb-8 text-center"
        >
          Trainer Bio
        </motion.h2>

        {/* Trainer Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-900/80 to-blue-800/60 backdrop-blur-sm border-2 border-pokemon-blue/50 rounded-xl p-6 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Panel - Information */}
            <div className="flex-1">
              {/* Trainer Card Info */}
              <div className="bg-blue-800/40 rounded-lg p-6 mb-6 border border-blue-700/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-600/30 pb-2">
                    <span className="text-sm text-gray-300 uppercase tracking-wider">Major</span>
                    <span className="text-lg font-semibold text-pokemon-yellow">Computer Science</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-600/30 pb-2">
                    <span className="text-sm text-gray-300 uppercase tracking-wider">Concentration</span>
                    <span className="text-lg font-semibold text-pokemon-blue">Machine Intelligence</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300 uppercase tracking-wider">Region</span>
                    <span className="text-lg font-semibold text-pokemon-red">Purdue University</span>
                  </div>
                </div>
              </div>

              {/* Badges Earned Section */}
              <div>
                <h3 className="text-2xl font-bold text-pokemon-yellow mb-4">
                  Badges Earned
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {skillBadges.map((badge, i) => (
                    <SkillBadge
                      key={badge.name}
                      name={badge.name}
                      icon={badge.icon}
                      color={badge.color}
                      delay={0.05 * i}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Trainer Sprite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="bg-blue-800/60 rounded-lg p-4 border border-blue-700/50 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                <img
                  src="/richin-headshot.png"
                  alt="Richin Mrudul"
                  className="w-full h-full rounded-lg object-cover"
                  style={{
                    objectPosition: "center 20%"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
