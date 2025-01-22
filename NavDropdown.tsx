import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface NavItem {
  title: string;
  path: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center px-4 py-2 text-cyber-blue hover:text-cyber-purple transition-colors duration-300">
        {title}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-1 w-64 bg-cyber-black/95 backdrop-blur-md border border-cyber-blue/20 rounded shadow-lg shadow-cyber-blue/20">
          <div className="py-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-4 py-2 text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};