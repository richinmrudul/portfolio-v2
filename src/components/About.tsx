import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Hi! My name is <span className="text-cyan-400 font-semibold">Richin Mrudul</span>, 
          and I'm a second-year Computer Science student at Purdue University with a 
          concentration in <span className="text-cyan-400">Machine Intelligence</span>.
          I love using technology to build projects that solve real-world problems and make people's lives easier.
          Outside of coding, I enjoy playing guitar and drums, cooking, eating good food, and hanging out with my friends.
          I’m also a huge <span className="text-cyan-400">Sacramento Kings</span> fan and hope we go to the playoffs soon.
        </motion.p>

      </div>
    </section>
  );
};

export default About;
