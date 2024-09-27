import React from 'react';

type CanadaButtonProps = {
  label: string;
  className?: string;
};

const CanadaButton: React.FC<CanadaButtonProps> = ({ label, className = '' }) => {
  return (
    <button
      className={`font-space-grotes text-dream-canada border border-dream-canada rounded-full cursor-default px-3 py-1 text-sm font-medium${className}`}
    >
      {label}
    </button>
  );
};

export default CanadaButton;
