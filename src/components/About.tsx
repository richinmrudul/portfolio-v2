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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-pokemon-yellow mb-8 text-center">
            Trainer Bio
          </h2>

          {/* Trainer Card Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pokemon-offnavy/60 backdrop-blur-sm border border-pokemon-yellow/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 uppercase tracking-wider mb-1">Major</span>
                <span className="text-lg font-semibold text-pokemon-yellow">Computer Science</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 uppercase tracking-wider mb-1">Concentration</span>
                <span className="text-lg font-semibold text-pokemon-blue">Machine Intelligence</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 uppercase tracking-wider mb-1">Region</span>
                <span className="text-lg font-semibold text-pokemon-red">Purdue University</span>
              </div>
            </div>
          </motion.div>

          {/* Badges Earned Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-pokemon-yellow mb-6 text-center">
              Badges Earned
            </h3>
            <div className="flex justify-center flex-wrap gap-4 md:gap-6">
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
          </motion.div>
        </motion.div>

        {/* Profile Picture and Bio */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 flex justify-center"
          >
            <img
              src="/richin-headshot.png"
              alt="Richin Mrudul"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-pokemon-yellow/30"
              style={{
                objectPosition: "center 20%"
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed flex-1"
          >
            Hi! My name is <span className="text-pokemon-yellow font-semibold">Richin Mrudul</span>, 
            and I'm a second-year Computer Science student at Purdue University with a 
            concentration in <span className="text-pokemon-blue">Machine Intelligence</span>.
            I love using technology to build projects that solve real-world problems and make people's lives easier.
            Outside of coding, I enjoy playing guitar and drums, cooking, eating good food, and hanging out with my friends.
            I'm also a huge <span className="text-pokemon-red">Sacramento Kings</span> fan and hope we go to the playoffs soon.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
