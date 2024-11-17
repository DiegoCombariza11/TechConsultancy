// components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-blue-500' }) => {
  return (
    <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${color}`}>
      {children}
    </span>
  );
};