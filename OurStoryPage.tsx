import React from 'react';
import { History, Target, Users, Award } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-4 animate-glow">
            Our Story
          </h1>
          <p className="text-cyber-blue text-xl">
            Pioneering precision manufacturing with innovative technology 
            and unwavering commitment to quality.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <History className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Our Beginning</h3>
            <p className="text-cyber-blue/80">
              Founded in 2010, Connect Tech started with a vision to revolutionize 
              precision manufacturing through advanced technology and innovation. 
              Our journey began with a small team of passionate engineers and a 
              commitment to excellence.
            </p>
          </div>
          
          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Target className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Growth & Innovation</h3>
            <p className="text-cyber-blue/80">
              Through continuous investment in cutting-edge technology and talent, 
              we've expanded our capabilities across multiple industries. Our 
              commitment to innovation has led to breakthrough manufacturing 
              processes and industry-leading quality standards.
            </p>
          </div>

          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Users className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Our Team</h3>
            <p className="text-cyber-blue/80">
              Today, our team of over 200 skilled professionals includes engineers, 
              technicians, and manufacturing specialists. We foster a culture of 
              continuous learning and innovation, ensuring we stay at the forefront 
              of manufacturing technology.
            </p>
          </div>

          <div className="bg-cyber-black/50 p-8 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
            <Award className="w-12 h-12 text-cyber-blue mb-4" />
            <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Industry Recognition</h3>
            <p className="text-cyber-blue/80">
              Our commitment to excellence has earned us numerous industry 
              accolades and certifications. We're proud to be recognized as a 
              leader in precision manufacturing and continue to set new standards 
              for quality and innovation.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
            Start Your Project With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;