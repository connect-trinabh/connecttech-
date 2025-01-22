import React from 'react';
import { Settings, Wrench, Zap, Server } from 'lucide-react';

const CapabilitiesPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Manufacturing Capabilities
          </h1>
          <p className="text-cyber-blue text-xl">
            Advanced manufacturing solutions powered by cutting-edge technology 
            and decades of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Settings className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Advanced Machinery</h3>
            <p className="text-cyber-blue/80">
              State-of-the-art CNC machines, CMM equipment, and automation 
              systems for precise manufacturing.
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Wrench className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Technical Expertise</h3>
            <p className="text-cyber-blue/80">
              Skilled engineers and technicians with extensive experience 
              across multiple industries and technologies.
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Zap className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Rapid Production</h3>
            <p className="text-cyber-blue/80">
              Optimized workflows and automated processes for fast 
              turnaround without compromising quality.
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Server className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Data-Driven Quality</h3>
            <p className="text-cyber-blue/80">
              Advanced quality control systems with real-time monitoring 
              and comprehensive documentation.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-blue mb-8">Technical Specifications</h2>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4">Machining Capabilities</h4>
                <ul className="space-y-2 text-cyber-blue/80">
                  <li>• 5-Axis CNC Machining</li>
                  <li>• High-Speed Precision Turning</li>
                  <li>• Wire EDM</li>
                  <li>• Surface Grinding</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4">Size Capacity</h4>
                <ul className="space-y-2 text-cyber-blue/80">
                  <li>• Max Turning Diameter: 20"</li>
                  <li>• Max Milling Size: 40" x 20" x 20"</li>
                  <li>• Minimum Feature Size: 0.0005"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Discuss Your Project Requirements
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesPage;