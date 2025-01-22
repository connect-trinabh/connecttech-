import React from 'react';

const PrecisionManufacturingPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Precision Manufacturing
          </h1>
          <p className="text-cyber-blue text-xl">
            Achieving micron-level accuracy for your most demanding projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Industry-Leading Precision
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              Our state-of-the-art manufacturing facility utilizes the latest in 5-axis machining technology,
              achieving tolerances as tight as ±0.0002 inches. Perfect for aerospace components, medical devices,
              and high-precision robotics parts.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• Tolerances down to ±0.0002"</li>
              <li>• 5-axis simultaneous machining</li>
              <li>• Advanced surface finishing</li>
              <li>• Complex geometry capabilities</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1565087170449-fa23854a6100?auto=format&fit=crop&w=800"
              alt="Precision Manufacturing Equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Quality Assurance</h3>
            <p className="text-cyber-blue/80">
              Every part undergoes rigorous inspection using CMM and laser scanning technology.
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Material Expertise</h3>
            <p className="text-cyber-blue/80">
              Specialized experience with titanium, Inconel, medical-grade plastics, and more.
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Industry Certified</h3>
            <p className="text-cyber-blue/80">
              ISO 9001:2015 certified with aerospace and medical device certifications.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Get a Manufacturing Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrecisionManufacturingPage;