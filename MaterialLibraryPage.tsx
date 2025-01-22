import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const MaterialLibraryPage = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
              Material Library
            </h1>
            <p className="text-cyber-blue text-xl">
              Comprehensive material selection guide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Material Categories
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-cyber-purple font-bold">Metals</h3>
                  <ul className="text-cyber-blue/80">
                    <li>• Aluminum (6061, 7075)</li>
                    <li>• Stainless Steel (303, 304, 316)</li>
                    <li>• Titanium (Grade 5)</li>
                    <li>• Tool Steel</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-cyber-purple font-bold">Plastics</h3>
                  <ul className="text-cyber-blue/80">
                    <li>• PEEK</li>
                    <li>• Delrin/POM</li>
                    <li>• UHMW</li>
                    <li>• Polycarbonate</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4">
                Material Properties
              </h2>
              <div className="space-y-4 text-cyber-blue/80">
                <p>Each material includes detailed specifications:</p>
                <ul className="text-cyber-blue space-y-2">
                  <li>• Mechanical properties</li>
                  <li>• Thermal characteristics</li>
                  <li>• Chemical resistance</li>
                  <li>• Cost comparison</li>
                  <li>• Typical applications</li>
                  <li>• Manufacturing considerations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Industry Specific</h3>
              <p className="text-cyber-blue/80">
                Materials certified for medical, aerospace, and automotive
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Custom Materials</h3>
              <p className="text-cyber-blue/80">
                Specialty materials available upon request
              </p>
            </div>
            <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
              <h3 className="text-xl font-bold text-cyber-blue mb-4">Finish Options</h3>
              <p className="text-cyber-blue/80">
                Surface treatment and coating selections
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
              Download Material Specifications
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaterialLibraryPage;