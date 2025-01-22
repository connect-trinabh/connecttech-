import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Aerospace',
      description: 'High-precision components for propulsion systems and structural parts',
      icon: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=64&h=64&fit=crop'
    },
    {
      title: 'Robotics',
      description: 'Manufacturing robotic components and automation systems',
      icon: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=64&h=64&fit=crop'
    },
    {
      title: 'Oil and Gas',
      description: 'Precision manufacturing for high-pressure environments',
      icon: 'https://images.unsplash.com/photo-1582584116743-a18f6e4be8ba?w=64&h=64&fit=crop'
    },
    {
      title: 'Automotive',
      description: 'Custom parts for performance and electric vehicles',
      icon: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=64&h=64&fit=crop'
    }
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering precision manufacturing solutions across diverse sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={industry.icon}
                alt={industry.title}
                className="w-16 h-16 mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
              <button className="mt-4 text-cyan-600 flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};