import React from "react";
import { motion } from "framer-motion";
import BadgeIcon from "./BadgeIcon";

const About: React.FC = () => {
  const badges = [
    { type: "education" as const, label: "Education" },
    { type: "software" as const, label: "Software" },
    { type: "ai" as const, label: "AI/ML" },
    { type: "research" as const, label: "Research" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-pokemon-yellow mb-4 text-center">
            Trainer Bio
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.type}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-pokemon-blue/20 border border-pokemon-blue/50 rounded-full">
                  <BadgeIcon type={badge.type} size={20} />
                </div>
                <span className="text-xs text-gray-400">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
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
