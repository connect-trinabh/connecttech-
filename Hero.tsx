import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 cyber-grid animate-grid-flow opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight mb-4 animate-glow bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Next Generation Manufacturing
          </h1>
          <p className="text-xl text-cyber-blue/80 mb-8 max-w-2xl mx-auto">
            Precision engineering meets cutting-edge technology.
            Revolutionizing manufacturing for tomorrow's innovations.
          </p>
          <div className="flex justify-center gap-6">
            <button className="neon-border px-8 py-3 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded">
              Get Started
            </button>
            <button className="px-8 py-3 border border-cyber-purple text-cyber-purple hover:text-white hover:bg-cyber-purple/20 transition-all duration-300 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};