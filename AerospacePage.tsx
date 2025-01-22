import React from 'react';

const AerospacePage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Aerospace Manufacturing
          </h1>
          <p className="text-cyber-blue text-xl">
            Precision components for mission-critical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Aerospace Excellence
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              We specialize in manufacturing high-precision components for commercial, 
              military, and space applications. Our AS9100D certification ensures 
              the highest quality standards for aerospace manufacturing.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• AS9100D certified facility</li>
              <li>• Experience with flight-critical parts</li>
              <li>• Advanced materials expertise</li>
              <li>• Full traceability</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800"
              alt="Aerospace Manufacturing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Materials</h3>
            <p className="text-cyber-blue/80">
              Titanium, Inconel, aerospace aluminum alloys
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Applications</h3>
            <p className="text-cyber-blue/80">
              Engine components, structural parts, landing gear
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Quality</h3>
            <p className="text-cyber-blue/80">
              100% inspection with detailed documentation
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Get Aerospace Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AerospacePage;