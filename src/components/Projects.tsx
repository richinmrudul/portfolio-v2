import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  tech: string;
  description: string[];
  github: string;
  demo?: string;
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
    demo: "https://fit-track-black.vercel.app/"
  },
  {
    title: "Cooked",
    tech: "React, TypeScript, Node.js, Express, PostgreSQL, Multer, Cloudinary",
    description: [
      "Rate, rank, and rediscover your favorite homemade meals with a fun ELO system.",
      "Manage recipes, upload photos, and track your culinary journey!"
    ],
    github: "https://github.com/richinmrudul/Cooked",
    demo: "https://cooked-omega.vercel.app/"
  },
  {
    title: "NBA MVP Predictor",
    tech: "Python, Flask, Pandas, scikit-learn",
    description: [
      "Predict the next NBA MVP using machine learning on historical player data.",
      "A Flask API serving real-time predictions — who's your pick?"
    ],
    github: "https://github.com/richinmrudul/nba-mvp-predictor"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl border border-cyan-500/40 p-6 bg-slate-900/40 hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
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
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  <FaGithub size={22} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
