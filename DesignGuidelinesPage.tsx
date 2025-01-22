import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const DesignGuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
              Design Guidelines
            </h1>
            <p className="text-cyber-blue text-xl">
              Optimize your designs for manufacturing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Design for Manufacturing
              </h2>
              <p className="text-cyber-blue/80 mb-4">
                Our comprehensive design guidelines help ensure your parts are optimized 
                for manufacturing efficiency while maintaining quality and reducing costs.
              </p>
              <ul className="text-cyber-blue space-y-2">
                <li>• Wall thickness recommendations</li>
                <li>• Feature size limitations</li>
                <li>• Surface finish specifications</li>
                <li>• Tolerance capabilities</li>
              </ul>
            </div>
            
            <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                File Preparation
              </h2>
              <div className="space-y-4 text-cyber-blue/80">
                <p>Accepted CAD Formats:</p>
                <ul className="list-disc pl-6 text-cyber-blue">
                  <li>STEP (.stp, .step)</li>
                  <li>IGES (.igs, .iges)</li>
                  <li>Solidworks (.sldprt)</li>
                  <li>AutoCAD (.dwg)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">CNC Guidelines</h3>
              <p className="text-cyber-blue/80">
                Specific design considerations for CNC machined parts
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Tolerances</h3>
              <p className="text-cyber-blue/80">
                Standard and precision tolerance capabilities
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Quality</h3>
              <p className="text-cyber-blue/80">
                Inspection and quality control procedures
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
              Download Complete Guidelines
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DesignGuidelinesPage;