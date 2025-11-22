import React from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="w-16 h-16 flex items-center justify-center rounded-lg border-2 shadow-lg"
        style={{
          backgroundColor: `${color}20`,
          borderColor: `${color}80`,
          boxShadow: `0 0 10px ${color}40`,
        }}
      >
        <div className="text-2xl">{icon}</div>
      </div>
      <span className="text-xs text-gray-400 text-center max-w-[64px] leading-tight">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;

