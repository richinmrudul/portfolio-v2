import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-bold mb-4 text-cyan-400"
      >
        Hi, I'm Richin 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        A Computer Science student passionate about software engineering,
        AI, and full-stack development.
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-10"
      >
        <FaArrowDown className="text-cyan-400 text-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
