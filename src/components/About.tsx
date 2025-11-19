import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <img
              src="/richin-headshot.png"
              alt="Richin Mrudul"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
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
            Hi! My name is <span className="text-cyan-400 font-semibold">Richin Mrudul</span>, 
            and I'm a second-year Computer Science student at Purdue University with a 
            concentration in <span className="text-cyan-400">Machine Intelligence</span>.
            I love using technology to build projects that solve real-world problems and make people's lives easier.
            Outside of coding, I enjoy playing guitar and drums, cooking, eating good food, and hanging out with my friends.
            I'm also a huge <span className="text-cyan-400">Sacramento Kings</span> fan and hope we go to the playoffs soon.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
