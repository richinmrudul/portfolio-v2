import React from "react";

interface PokeballIconProps {
  size?: number;
  className?: string;
}

const PokeballIcon: React.FC<PokeballIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="#FF3E4D" strokeWidth="2" fill="white" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="#FF3E4D" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="#FF3E4D" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
      <path d="M 2 12 Q 7 9, 12 12" stroke="#FF3E4D" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M 22 12 Q 17 15, 12 12" stroke="#FF3E4D" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
};

export default PokeballIcon;

