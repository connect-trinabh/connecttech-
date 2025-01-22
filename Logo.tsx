import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className="flex items-center">
      <svg 
        className={className} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M75 25L50 37.5L25 25L50 12.5L75 25ZM75 75L50 87.5L25 75L50 62.5L75 75Z" 
          fill="currentColor" 
          className="text-connect-blue-500"
        />
        <path 
          d="M87.5 50L62.5 62.5L37.5 50L62.5 37.5L87.5 50ZM62.5 50L37.5 62.5L12.5 50L37.5 37.5L62.5 50Z" 
          fill="currentColor" 
          className="text-connect-blue-400"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-connect-blue-500">Connect Tech</span>
    </div>
  );
};