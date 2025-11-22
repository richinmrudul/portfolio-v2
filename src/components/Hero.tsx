import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import PokeballIcon from "./PokeballIcon";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      {/* Pokéball Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <PokeballIcon size={400} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -5 }}
        className="relative z-10 max-w-2xl mx-auto bg-pokemon-offnavy/80 backdrop-blur-sm rounded-lg p-8 border border-pokemon-yellow/30 shadow-[0_0_20px_#FFD34E33]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-bold mb-4 text-pokemon-yellow"
        >
          Hi, I'm Richin 👋
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <p className="text-pokemon-blue text-lg font-semibold mb-1">
            Class: Software Engineer
          </p>
          <p className="text-pokemon-blue text-lg font-semibold">
            Region: Purdue University
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl"
        >
          A Computer Science student passionate about software engineering,
          AI, and full-stack development.
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-10 relative z-10"
      >
        <FaArrowDown className="text-pokemon-yellow text-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
