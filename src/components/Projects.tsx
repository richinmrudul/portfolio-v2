import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PokeballIcon from "./PokeballIcon";

interface Project {
  title: string;
  tech: string;
  description: string[];
  github: string;
  demo?: string;
  type: "electric" | "fire" | "psychic";
}

const projects: Project[] = [
  {
    title: "FitTrack",
    tech: "React, Firebase, Chart.js, OpenAI, CSS",
    description: [
      "AI-powered fitness companion for logging workouts & smashing goals.",
      "Personalized plans, progress tracking, and smart insights in one place."
    ],
    github: "https://github.com/richinmrudul/FitTrack",
    demo: "https://fit-track-black.vercel.app/",
    type: "electric"
  },
  {
    title: "Cooked",
    tech: "React, TypeScript, Node.js, Express, PostgreSQL, Multer, Cloudinary",
    description: [
      "Rate, rank, and rediscover your favorite homemade meals with a fun ELO system.",
      "Manage recipes, upload photos, and track your culinary journey!"
    ],
    github: "https://github.com/richinmrudul/Cooked",
    demo: "https://cooked-omega.vercel.app/",
    type: "fire"
  },
  {
    title: "NBA MVP Predictor",
    tech: "Python, Flask, Pandas, scikit-learn",
    description: [
      "Predict the next NBA MVP using machine learning on historical player data.",
      "A Flask API serving real-time predictions — who's your pick?"
    ],
    github: "https://github.com/richinmrudul/nba-mvp-predictor",
    type: "psychic"
  }
];

const getTypeConfig = (type: "electric" | "fire" | "psychic") => {
  const configs = {
    electric: {
      emoji: "⚡",
      name: "Electric",
      glow: "shadow-[0_0_15px_rgba(255,211,78,0.4)]",
      hoverGlow: "hover:shadow-[0_0_20px_rgba(255,211,78,0.5)]",
      border: "border-[1px] border-yellow-300/30",
      bg: "bg-pokemon-yellow/10",
      stripe: "bg-gradient-to-r from-yellow-400 to-yellow-200",
    },
    fire: {
      emoji: "🔥",
      name: "Fire",
      glow: "shadow-[0_0_15px_rgba(255,62,77,0.4)]",
      hoverGlow: "hover:shadow-[0_0_20px_rgba(255,62,77,0.5)]",
      border: "border-[1px] border-red-400/30",
      bg: "bg-pokemon-red/10",
      stripe: "bg-gradient-to-r from-red-500 to-orange-400",
    },
    psychic: {
      emoji: "🧠",
      name: "Psychic",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
      hoverGlow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
      border: "border-[1px] border-purple-400/30",
      bg: "bg-purple-500/10",
      stripe: "bg-gradient-to-r from-purple-500 to-pink-400",
    },
  };
  return configs[type];
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pokemon-yellow mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            const typeConfig = getTypeConfig(project.type);
            return (
              <motion.div
                key={i}
                whileHover={{ rotate: 0.5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative rounded-2xl ${typeConfig.border} p-0 bg-slate-900/40 ${typeConfig.glow} ${typeConfig.hoverGlow} transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient Stripe at Top */}
                <div className={`h-1 w-full ${typeConfig.stripe}`} />
                
                {/* Content */}
                <div className="p-6 relative">
                  {/* Pokéball Watermark */}
                  <div className="absolute bottom-2 right-2 opacity-[0.05] pointer-events-none">
                    <PokeballIcon size={120} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <h3 className="text-2xl font-semibold text-pokemon-yellow tracking-wide">{project.title}</h3>
                    <div className={`${typeConfig.bg} border ${typeConfig.border} px-1.5 py-0.5 text-[10px] rounded-full flex items-center gap-0.5 font-medium`}>
                      <span className="text-xs">{typeConfig.emoji}</span>
                      <span>{typeConfig.name}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 relative z-10">{project.tech}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 relative z-10">
                    {project.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 relative z-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pokemon-red transition"
                    >
                      <FaGithub size={22} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pokemon-red transition"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
