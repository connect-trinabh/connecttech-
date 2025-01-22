import React from 'react';

const CNCMachiningPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            CNC Machining
          </h1>
          <p className="text-cyber-blue text-xl">
            High-precision machining for complex components
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Advanced CNC Capabilities
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              Our state-of-the-art CNC machining center features 5-axis machines capable of 
              producing complex geometries with exceptional precision. We handle everything from 
              prototype parts to full production runs.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• 3, 4, and 5-axis machining</li>
              <li>• Tolerances to ±0.0002"</li>
              <li>• Complex geometries</li>
              <li>• Production volumes from 1-10,000+</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1565087170449-fa23854a6100?auto=format&fit=crop&w=800"
              alt="CNC Machining Center"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Materials</h3>
            <p className="text-cyber-blue/80">
              All metals, plastics, and composites
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Programming</h3>
            <p className="text-cyber-blue/80">
              Advanced CAM with simulation verification
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Quality</h3>
            <p className="text-cyber-blue/80">
              In-process inspection and verification
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Get CNC Machining Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CNCMachiningPage;