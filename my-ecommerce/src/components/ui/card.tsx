// components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 border-t">
      {children}
    </div>
  );
};