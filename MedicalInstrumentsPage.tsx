import React from 'react';

const MedicalInstrumentsPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Medical Instruments
          </h1>
          <p className="text-cyber-blue text-xl">
            Precision manufacturing for life-saving devices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h2 className="text-2xl font-bold text-cyber-blue mb-4">
              Medical Manufacturing Excellence
            </h2>
            <p className="text-cyber-blue/80 mb-4">
              Our ISO 13485 certified facility specializes in manufacturing precision 
              medical instruments and components. We maintain strict quality controls 
              and cleanroom conditions for critical medical applications.
            </p>
            <ul className="text-cyber-blue space-y-2">
              <li>• ISO 13485 certified</li>
              <li>• Cleanroom manufacturing</li>
              <li>• Biocompatible materials</li>
              <li>• Full documentation packages</li>
            </ul>
          </div>
          
          <div className="bg-cyber-black/50 rounded-lg overflow-hidden border border-cyber-blue/20">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800"
              alt="Medical Manufacturing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Products</h3>
            <p className="text-cyber-blue/80">
              Surgical instruments, implants, diagnostic devices
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Materials</h3>
            <p className="text-cyber-blue/80">
              Medical-grade metals, plastics, and composites
            </p>
          </div>
          <div className="bg-cyber-black/50 rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Quality</h3>
            <p className="text-cyber-blue/80">
              100% inspection and validation testing
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Get Medical Manufacturing Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalInstrumentsPage;