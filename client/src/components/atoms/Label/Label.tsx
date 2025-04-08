// src/components/atoms/Label/Label.tsx
import React from 'react';

type LabelProps = {
  text: string;
  color?: string;      
  textColor?: string;  
};

const Label: React.FC<LabelProps> = ({
  text,
  color = 'bg-orange-200',
  textColor = 'text-gray-800',
}) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${color} ${textColor}`}>
      {text}
    </span>
  );
};

export default Label;
