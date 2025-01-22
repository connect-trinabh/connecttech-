import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 7477045362'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@connecttech.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: 'Plot no. 29, Sector-F, Industrial Area Govindpura, Bhopal, Madhya Pradesh (462023)'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      content: 'Mon-Fri: 8:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your manufacturing needs? Contact us today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => (
            <div key={info.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-white border border-gray-300 text-gray-900 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white border border-gray-300 text-gray-900 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-white border border-gray-300 text-gray-900 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};