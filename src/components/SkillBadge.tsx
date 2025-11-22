import React from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, color, delay = 0 }) => {
  const polygonPath = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="flex flex-col items-center gap-2 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        whileHover={{ 
          rotate: 360,
          scale: 1.1,
          rotateY: 15,
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
        className="relative w-16 h-16"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Base gem shape with 3D depth */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: polygonPath,
            backgroundColor: "#374151",
            background: `
              linear-gradient(135deg, #4B5563 0%, #374151 25%, #1F2937 50%, #374151 75%, #4B5563 100%),
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.5) 0%, transparent 50%)
            `,
            filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
            boxShadow: `
              inset 0 2px 4px rgba(255, 255, 255, 0.2),
              inset 0 -2px 4px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(0, 0, 0, 0.2),
              0 4px 8px rgba(0, 0, 0, 0.4)
            `,
          }}
        />
        
        {/* Top face highlight */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 50% 15%, 0% 30%)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          }}
        />
        
        {/* Right face highlight */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(70% 0%, 100% 30%, 100% 70%, 70% 100%, 85% 50%)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
          }}
        />
        
        {/* Left face shadow */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0% 30%, 30% 0%, 30% 100%, 0% 70%)",
            background: "linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        
        {/* Bottom face shadow */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(30% 100%, 70% 100%, 100% 70%, 0% 70%)",
            background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        
        {/* Inner shine/reflection */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(40% 10%, 60% 10%, 80% 30%, 80% 50%, 60% 70%, 40% 70%, 20% 50%, 20% 30%)",
            background: "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)",
          }}
        />
        
        {/* Icon container */}
        <div 
          className="relative z-10 flex items-center justify-center w-full h-full"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))",
          }}
        >
          {icon}
        </div>
      </motion.div>
      <span className="text-xs text-gray-400 text-center max-w-[64px] leading-tight">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;

