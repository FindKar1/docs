import React from 'react';

interface ButtonWithIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center gap-2 bg-blue-500">
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default ButtonWithIcon;
