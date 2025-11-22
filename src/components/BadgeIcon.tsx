import React from "react";

interface BadgeIconProps {
  type: "education" | "software" | "ai" | "research";
  size?: number;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({ type, size = 20 }) => {
  const icons = {
    education: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v2h20V7L12 2zm0 2.18L18.82 9H5.18L12 4.18zM4 11v9h16v-9H4zm2 2h12v5H6v-5z" />
      </svg>
    ),
    software: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
      </svg>
    ),
    ai: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    research: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
  };

  return <div className="text-pokemon-yellow">{icons[type]}</div>;
};

export default BadgeIcon;

