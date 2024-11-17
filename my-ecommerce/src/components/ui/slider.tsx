// components/ui/Slider.tsx
import React from 'react';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Slider: React.FC<SliderProps> = (props) => {
  return (
    <input
      type="range"
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      {...props}
    />
  );
};