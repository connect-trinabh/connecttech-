import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'Precision Machining',
      description: 'Advanced CNC and VMC milling for intricate designs'
    },
    {
      title: 'High-Performance Materials',
      description: 'Specializing in difficult-to-machine alloys'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored products meeting specific industry needs'
    },
    {
      title: 'Innovation & R&D',
      description: 'Continuous improvement in design and manufacturing'
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise in advanced manufacturing technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border border-gray-200 p-8 rounded-lg hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
              <p className="text-gray-600 mb-4">{capability.description}</p>
              <ChevronRight className="text-cyan-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};