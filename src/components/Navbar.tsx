import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import PokeballIcon from "./PokeballIcon";

const Navbar: React.FC = () => {
  const links = ["home", "about", "experience", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-pokemon-navy to-pokemon-offnavy backdrop-blur-lg z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <PokeballIcon size={20} className="text-pokemon-red" />
          <h1 className="text-2xl font-bold text-pokemon-yellow tracking-wide">
            Richin<span className="text-white">.</span>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                className="capitalize cursor-pointer hover:text-pokemon-red border-b-2 border-transparent hover:border-pokemon-red transition-all pb-1"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
