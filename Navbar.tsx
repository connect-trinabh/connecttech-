import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavDropdown } from './NavDropdown';
import { Logo } from './Logo';
import { services, industries, resources, about } from './navigation/navData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-cyber-black/90 backdrop-blur-md border-b border-cyber-blue/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavDropdown title="Services" items={services} />
            <NavDropdown title="Industries" items={industries} />
            <NavDropdown title="Resources" items={resources} />
            <NavDropdown title="About Us" items={about} />
            <a href="/contact" className="px-4 py-2 text-cyber-blue hover:text-cyber-purple transition-colors duration-300">
              Contact Us
            </a>
            <a 
              href="/quote"
              className="neon-border px-6 py-2 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded"
            >
              GET QUOTE
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cyber-blue hover:text-cyber-purple transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-black/95 backdrop-blur-md border-t border-cyber-blue/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {[...services, ...industries, ...resources, ...about].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-3 py-2 text-cyber-blue hover:text-cyber-purple hover:bg-cyber-blue/10 rounded transition-colors"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/quote"
              className="block px-3 py-2 text-white bg-cyber-blue/20 hover:bg-cyber-blue/30 rounded transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};