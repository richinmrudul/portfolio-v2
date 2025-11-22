import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EasterEggs: React.FC = () => {
  const [trainerLevel, setTrainerLevel] = useState(0);

  useEffect(() => {
    // Calculate trainer level based on number of projects (you can enhance this)
    // For now, using a simple calculation
    setTrainerLevel(25); // Base level, can be enhanced with API calls
  }, []);

  return (
    <>
      {/* Floating Pikachu Silhouette */}
      <motion.div
        className="fixed bottom-4 right-4 opacity-10 pointer-events-none z-50"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-4xl">⚡</div>
      </motion.div>

      {/* Trainer Level Display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-4 left-4 bg-pokemon-offnavy/80 backdrop-blur-sm border border-pokemon-yellow/30 rounded-lg px-3 py-2 text-xs text-pokemon-yellow z-50"
      >
        Trainer Level: {trainerLevel}
      </motion.div>
    </>
  );
};

export default EasterEggs;

