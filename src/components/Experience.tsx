import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  icon: string;
  position: "left" | "right";
}

const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "Boilerexams",
    dates: "August 2025 - Present",
    bullets: [
      "Help maintain and improve backend infrastructure for a study platform used by 30,000+ Purdue students, ensuring reliability during high-traffic exam periods and finals week spikes.",
      "Support backend systems powering 8.5M+ submissions, 380k+ study hours, and 190+ Purdue exams, working on endpoints that handle large-scale data ingestion, accuracy tracking, and activity across 3,000+ questions.",
      "Rewrite core API endpoints in Go (Golang) to improve performance, reduce latency, and handle heavy exam load more efficiently; containerize services with Docker, optimize PostgreSQL queries, and strengthen error handling + logging."
    ],
    icon: "BE",
    position: "right"
  },
  {
    title: "Software Engineer",
    company: "Profitize",
    dates: "July 2025 - Present",
    bullets: [
      "Built a SaaS platform for 500+ Amazon FBA/FBM sellers to automate profit analysis, CSV-based reporting, and product research using live Amazon data, cutting manual effort and improving insight quality across product categories.",
      "Engineered full-stack system using React, Python, Playwright, Selenium, and RapidFuzz to reduce manual research time by ~80% through dynamic scraping, real-time fuzzy matching, and cross-referencing of Amazon product listings.",
      "Shipped production-ready frontend/backend with Netlify, Render, and GitHub Actions CI/CD, improving release speed by 60% and achieving <2s load times across devices through mobile-first design and automated staging workflows."
    ],
    icon: "P",
    position: "left"
  },
  {
    title: "Undergraduate Data Science Researcher",
    company: "The Data Mine - Purdue University (Corteva Agriscience)",
    dates: "August 2025 - Present",
    bullets: [
      "Developing an internal HR onboarding chatbot using LLMs with a Retrieval-Augmented Generation (RAG) pipeline, collaborating with Corteva Agriscience through The Data Mine to streamline employee onboarding processes.",
      "Leveraging LangChain, LangGraph, and OpenAI models to enhance context retention and accuracy for employee questions, improving the chatbot's ability to provide relevant and precise responses.",
      "Containerizing and deploying the system in Docker while utilizing Python, R, and SQL for large-scale data analysis, establishing a robust foundation for production deployment and scalability.",
      "Iteratively improving chatbot performance through employee testing and accuracy benchmarks, ensuring the solution meets real-world requirements and user expectations."
    ],
    icon: "DM",
    position: "right"
  },
  {
    title: "Webmaster",
    company: "Purdue Computer Science Club",
    dates: "August 2025 - Present",
    bullets: [
      "Designed and developed the official Purdue CS Club website using Next.js, TypeScript, Tailwind, and Framer Motion.",
      "Implemented a scalable component system and modern UI/UX including dynamic event filtering, mobile-optimized navigation, modals, and consistent theming."
    ],
    icon: "CS",
    position: "left"
  },
  {
    title: "Undergraduate Data Science Researcher",
    company: "The Data Mine - Purdue University (Indiana Soybean Alliance)",
    dates: "August 2024 - May 2025",
    bullets: [
      "Collaborated with the Indiana Soybean Alliance to develop an AI-enhanced tool that reduced data collection time by 96.41% (428.4s → 14.31s), drastically improving efficiency and performance over the prior year's manual workflow.",
      "Integrated large language models (LLMs) like ChatGPT to streamline program classification workflows, enhance overall user interaction quality and experience, and enable automated data analysis through natural language processing techniques.",
      "Migrated hard-coded datasets to a live PostgreSQL database, enabling real-time data updates, advanced search functionality, and efficient admin publishing and content control through a fully integrated, user-friendly dashboard interface."
    ],
    icon: "DM",
    position: "right"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm uppercase tracking-wider text-gray-400 text-center">
            WHAT I HAVE DONE SO FAR
          </p>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-cyan-400 mb-16 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  exp.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${exp.position === "left" ? "text-right" : "text-left"}`}>
                  <div className="bg-slate-800/80 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
                    <div className={`flex ${exp.position === "left" ? "justify-end" : "justify-start"} items-baseline gap-3 mb-1 flex-wrap`}>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="text-white text-sm">{exp.dates}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.company}</p>
                    <ul className="space-y-2 text-gray-300 list-disc list-inside">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">{exp.icon}</span>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

