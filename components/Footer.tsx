
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-b-dark-green text-b-tan mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bauchi Creative Hub. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-4 text-xs">
          <a href="#" className="hover:text-b-orange transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-b-orange transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-b-orange transition-colors">Contact Us</a>
        </div>
        <div className="mt-4 text-xs text-gray-400">
            <p>Designed with respect for the socio-cultural context of Northern Nigeria.</p>
            <p>Optimized for low-bandwidth environments.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
