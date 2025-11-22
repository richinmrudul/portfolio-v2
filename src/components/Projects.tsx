import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      glow: "shadow-[0_0_20px_#FFD34E]",
      hoverGlow: "hover:shadow-[0_0_30px_#FFD34E]",
      border: "border-pokemon-yellow/50",
      bg: "bg-pokemon-yellow/10",
    },
    fire: {
      emoji: "🔥",
      name: "Fire",
      glow: "shadow-[0_0_20px_#FF3E4D]",
      hoverGlow: "hover:shadow-[0_0_30px_#FF3E4D]",
      border: "border-pokemon-red/50",
      bg: "bg-pokemon-red/10",
    },
    psychic: {
      emoji: "🧠",
      name: "Psychic",
      glow: "shadow-[0_0_20px_#A855F7]",
      hoverGlow: "hover:shadow-[0_0_30px_#A855F7]",
      border: "border-purple-500/50",
      bg: "bg-purple-500/10",
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
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`rounded-2xl border ${typeConfig.border} p-6 bg-slate-900/40 ${typeConfig.glow} ${typeConfig.hoverGlow} transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-pokemon-yellow">{project.title}</h3>
                  <div className={`${typeConfig.bg} border ${typeConfig.border} px-2 py-1 text-xs rounded-full flex items-center gap-1`}>
                    <span>{typeConfig.emoji}</span>
                    <span>{typeConfig.name}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  {project.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
