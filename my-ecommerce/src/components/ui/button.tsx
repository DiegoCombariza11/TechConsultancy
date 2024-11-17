// components/ui/button.tsx
import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none transition-colors';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };
  const sizeStyles = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
    icon: 'p-2',
  };

  const classes = classNames(baseStyles, variantStyles[variant], sizeStyles[size], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};