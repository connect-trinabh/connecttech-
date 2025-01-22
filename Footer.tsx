import React from 'react';
import { Logo } from './Logo';
import { services, industries, resources, about } from './navigation/navData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo />
            <div className="mt-4 space-y-4 text-cyber-blue/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-cyber-blue" />
                <p>Plot no. 29, Sector-F,<br />Industrial Area Govindpura,<br />Bhopal, Madhya Pradesh (462023)</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyber-blue" />
                <p>+91 7477045362</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyber-blue" />
                <p>info@connecttech.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyber-blue" />
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-cyber-blue mb-4">About Us</h3>
            <ul className="space-y-2">
              {about.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-cyber-blue/70 hover:text-cyber-blue transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyber-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cyber-blue/60">
              &copy; {new Date().getFullYear()} Connect Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-cyber-blue/60 hover:text-cyber-blue transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-cyber-blue/60 hover:text-cyber-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};