import React from 'react';
import { Droplet, Shield, Cog, Wrench } from 'lucide-react';

const OilAndGasPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Oil & Gas Manufacturing Solutions
          </h1>
          <p className="text-cyber-blue text-xl">
            Precision-engineered components and solutions for the demanding 
            requirements of the oil and gas industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Droplet className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Downhole Equipment</h3>
            <p className="text-cyber-blue/80">
              High-precision manufacturing of critical downhole tools and 
              components designed to withstand extreme conditions.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Shield className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Safety Systems</h3>
            <p className="text-cyber-blue/80">
              Reliable manufacturing of safety-critical components for 
              wellhead and surface equipment.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Cog className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Processing Equipment</h3>
            <p className="text-cyber-blue/80">
              Custom fabrication of processing equipment components with 
              precise tolerances and material specifications.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Wrench className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Maintenance Parts</h3>
            <p className="text-cyber-blue/80">
              Rapid manufacturing of replacement parts and components for 
              critical maintenance operations.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-blue mb-8">Industry Certifications</h2>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20">
            <ul className="space-y-4 text-cyber-blue/80">
              <li>• API Q1 Certification</li>
              <li>• ISO 9001:2015</li>
              <li>• API Spec 6A</li>
              <li>• NACE MR0175/ISO 15156</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Request Oil & Gas Manufacturing Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default OilAndGasPage;