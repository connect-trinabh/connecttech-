import React from 'react';

const ReverseEngineeringPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Reverse Engineering
          </h1>
          <p className="text-cyber-blue text-xl">
            Converting physical parts into precise digital models
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Advanced Scanning Technology
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              Using cutting-edge 3D scanning and metrology equipment, we can capture exact dimensions 
              and geometries of your parts with accuracy up to 0.001mm. Our engineering team converts 
              scan data into fully parametric 3D CAD models.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• High-precision 3D scanning</li>
              <li>• CAD model creation</li>
              <li>• Full dimensional analysis</li>
              <li>• Engineering documentation</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800"
              alt="Reverse Engineering Process"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">3D Scanning</h3>
            <p className="text-cyber-blue/80">
              Blue light and laser scanning for complex geometries
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">CAD Modeling</h3>
            <p className="text-cyber-blue/80">
              Conversion to native CAD formats with full feature trees
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Documentation</h3>
            <p className="text-cyber-blue/80">
              Complete technical documentation and analysis
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Request Reverse Engineering Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReverseEngineeringPage;