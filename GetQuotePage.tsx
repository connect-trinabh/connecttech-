import React from 'react';
import { Upload } from 'lucide-react';

const GetQuotePage = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-cyber-black/50 rounded-lg p-8 border border-cyber-blue/20">
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text mb-8">Request a Quote</h1>
            <div className="space-y-6">
              <div className="text-sm text-cyber-blue/80 mb-8 text-center">
                We'll get back to you within 24-48 hours
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-cyber-blue mb-1">
                    Job Title/Position
                  </label>
                  <input
                    type="text"
                    className="w-full bg-cyber-black/30 border border-cyber-blue/20 text-cyber-blue rounded-md px-4 py-3 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cyber-blue mb-1">
                    Industry *
                  </label>
                  <select className="w-full bg-cyber-black/30 border border-cyber-blue/20 text-cyber-blue rounded-md px-4 py-3 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue">
                    <option>Select Industry</option>
                    <option>Aerospace</option>
                    <option>Automotive</option>
                    <option>Oil & Gas</option>
                    <option>Robotics</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cyber-blue mb-1">
                    Project Details *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Include material, number of parts, color, surface finish, and any other relevant details"
                    className="w-full bg-cyber-black/30 border border-cyber-blue/20 text-cyber-blue rounded-md px-4 py-3 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                  />
                </div>

                <div className="border-2 border-dashed border-cyber-blue/20 rounded-lg p-6 hover:border-cyber-blue/40 transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-cyber-blue/60" />
                    <div className="mt-4">
                      <label className="cursor-pointer">
                        <span className="text-cyber-blue hover:text-cyber-purple transition-colors">Upload files</span>
                        <input type="file" className="hidden" multiple />
                      </label>
                      <p className="text-sm text-cyber-blue/60 mt-2">
                        Accepted formats: STL, STEP, IGES (Max 30MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-cyber-blue/60">
                By submitting this form, you agree to our terms & conditions and privacy policy.
              </div>

              <button className="w-full neon-border px-8 py-4 bg-cyber-black border border-cyber-blue text-cyber-blue hover:text-white hover:bg-cyber-blue/20 transition-all duration-300 rounded-lg text-lg">
                Submit Quote Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;