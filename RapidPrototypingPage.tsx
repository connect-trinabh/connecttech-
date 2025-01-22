import React from 'react';

const RapidPrototypingPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Rapid Prototyping
          </h1>
          <p className="text-cyber-blue text-xl">
            From concept to prototype in record time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Swift Iteration Cycles
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              Our advanced rapid prototyping services help you validate designs quickly and efficiently. 
              Using the latest in additive and subtractive manufacturing technologies, we can produce 
              functional prototypes in as little as 24 hours.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• 24-48 hour turnaround available</li>
              <li>• Multiple material options</li>
              <li>• Functional testing capability</li>
              <li>• Design optimization support</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
              alt="Rapid Prototyping Process"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">3D Printing</h3>
            <p className="text-cyber-blue/80">
              Industrial SLA, SLS, and FDM technologies for various applications
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">CNC Prototypes</h3>
            <p className="text-cyber-blue/80">
              Precision machined prototypes in production materials
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Design Support</h3>
            <p className="text-cyber-blue/80">
              Expert feedback and design for manufacturing guidance
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Request Prototype Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RapidPrototypingPage;