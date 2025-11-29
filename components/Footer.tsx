import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-card border-t border-tech-border text-tech-muted mt-6 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} London Creative Hub. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center space-x-4 text-[10px] md:text-xs">
          <a href="#" className="hover:text-tech-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-tech-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-tech-primary transition-colors">Contact Us</a>
        </div>
        <div className="mt-3 text-[10px] text-gray-600">
            <p>Designed for the dynamic creative ecosystem of London.</p>
            <p>Powered by <span className="text-tech-secondary">GenAI</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;