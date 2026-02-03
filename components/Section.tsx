import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  variant = 'light' 
}) => {
  const variants = {
    light: "bg-paper text-slate-800",
    dark: "bg-bio-dark text-white",
    gradient: "bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-900"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${variants[variant]} ${className}`}>
      {children}
    </section>
  );
};