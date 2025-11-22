import React from "react";
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const About: React.FC = () => {
  const skillBadges = [
    { 
      name: "Golang", 
      icon: <span className="text-3xl font-bold" style={{ color: "#00ADD8" }}>Go</span>, 
      color: "#00ADD8" 
    }, // Backend Badge
    { 
      name: "Python", 
      icon: <span className="text-3xl">🐍</span>, 
      color: "#FFD34E" 
    }, // AI/ML Badge
    { 
      name: "React", 
      icon: <span className="text-3xl">⚛️</span>, 
      color: "#61DAFB" 
    }, // Full-Stack Badge
    { 
      name: "Docker", 
      icon: <span className="text-3xl">🐳</span>, 
      color: "#0DB7ED" 
    }, // DevOps Badge
    { 
      name: "TypeScript", 
      icon: <span className="text-2xl font-bold" style={{ color: "#3178C6" }}>TS</span>, 
      color: "#3178C6" 
    }, // Language Badge
    { 
      name: "PostgreSQL", 
      icon: <span className="text-3xl">🐘</span>, 
      color: "#336791" 
    }, // Database Badge
    { 
      name: "Firebase", 
      icon: <span className="text-3xl">☁️</span>, 
      color: "#FFA000" 
    }, // Cloud Badge
    { 
      name: "Playwright", 
      icon: <span className="text-3xl">🎭</span>, 
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
