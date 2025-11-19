import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <FaEnvelope className="text-cyan-400 text-4xl mb-2" />
            <a
              href="mailto:richinm@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-center"
            >
              richinm@gmail.com
            </a>
            <a
              href="mailto:rmrudul@purdue.edu"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-center"
            >
              rmrudul@purdue.edu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <FaLinkedin className="text-cyan-400 text-4xl mb-2" />
            <a
              href="https://linkedin.com/in/richin-mrudul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              linkedin.com/in/richin-mrudul
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <FaGithub className="text-cyan-400 text-4xl mb-2" />
            <a
              href="https://github.com/richinmrudul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              github.com/richinmrudul
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

