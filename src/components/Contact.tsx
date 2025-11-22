import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white border-t-4 border-pokemon-red">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pokemon-yellow mb-12 text-center"
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
            <motion.div
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaEnvelope className="text-pokemon-red text-4xl mb-2" />
            </motion.div>
            <a
              href="mailto:richinm@gmail.com"
              className="text-gray-300 hover:text-pokemon-red transition-colors text-center"
            >
              richinm@gmail.com
            </a>
            <a
              href="mailto:rmrudul@purdue.edu"
              className="text-gray-300 hover:text-pokemon-red transition-colors text-center"
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
            <motion.div
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            >
              <FaLinkedin className="text-pokemon-red text-4xl mb-2" />
            </motion.div>
            <a
              href="https://linkedin.com/in/richin-mrudul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pokemon-red transition-colors"
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
            <motion.div
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
            >
              <FaGithub className="text-pokemon-red text-4xl mb-2" />
            </motion.div>
            <a
              href="https://github.com/richinmrudul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pokemon-red transition-colors"
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

