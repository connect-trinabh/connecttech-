import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const ProductionToolingPage = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
              Production Tooling
            </h1>
            <p className="text-cyber-blue text-xl">
              Custom tooling solutions for efficient manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Custom Tooling Solutions
              </h2>
              <p className="text-cyber-blue/80 mb-4">
                We design and manufacture custom fixtures, jigs, and production tools 
                that optimize your manufacturing process. Our tooling solutions increase 
                efficiency while maintaining precise tolerances.
              </p>
              <ul className="text-cyber-blue space-y-2">
                <li>• Custom fixture design</li>
                <li>• Production automation tools</li>
                <li>• Quality control gauges</li>
                <li>• Assembly fixtures</li>
              </ul>
            </div>
            
            <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Production Tooling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Design</h3>
              <p className="text-cyber-blue/80">
                Advanced CAD/CAM design for optimal functionality
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Validation</h3>
              <p className="text-cyber-blue/80">
                Comprehensive testing and verification
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Support</h3>
              <p className="text-cyber-blue/80">
                Ongoing maintenance and optimization
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
              Request Tooling Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductionToolingPage;