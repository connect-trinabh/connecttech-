import React from 'react';
import { Gauge, Microscope, FileCheck, RefreshCw } from 'lucide-react';

const QualityInspectionPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Quality Inspection Services
          </h1>
          <p className="text-cyber-blue text-xl">
            Advanced metrology and inspection services ensuring precise measurements 
            and quality control for critical components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Gauge className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Dimensional Inspection</h3>
            <p className="text-cyber-blue/80">
              High-precision measurement services using advanced CMM technology 
              and laser scanning for complex geometries.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Microscope className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Material Analysis</h3>
            <p className="text-cyber-blue/80">
              Comprehensive material testing and analysis to ensure compliance 
              with industry standards and specifications.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <FileCheck className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Quality Documentation</h3>
            <p className="text-cyber-blue/80">
              Detailed inspection reports and certificates of conformance for 
              full traceability and compliance.
            </p>
          </div>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <RefreshCw className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">In-Process Inspection</h3>
            <p className="text-cyber-blue/80">
              Real-time quality monitoring and verification during manufacturing 
              to ensure consistent quality.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-blue mb-8">Inspection Equipment</h2>
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20">
            <ul className="space-y-4 text-cyber-blue/80">
              <li>• Coordinate Measuring Machines (CMM)</li>
              <li>• Optical Measurement Systems</li>
              <li>• 3D Laser Scanners</li>
              <li>• Surface Roughness Testers</li>
              <li>• Hardness Testing Equipment</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Get Quality Inspection Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityInspectionPage;