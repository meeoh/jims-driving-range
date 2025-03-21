
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-golf-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-golf-dark font-bold">JDR</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Jim's Driving Range
              </span>
            </div>
            <p className="text-white/80 max-w-md">
              Providing the Kitchener community with a premium golf practice experience for over 15 years. Come visit us and improve your swing!
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
                <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#location" className="text-white/80 hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Details</h3>
              <ul className="space-y-2">
                <li className="text-white/80">
                  1535 New Dundee Rd<br />
                  Kitchener, ON N2P 2P5
                </li>
                <li className="text-white/80">
                  9:00 AM - 8:00 PM<br />
                  7 days a week
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Jim's Driving Range. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2 text-white/40">|</span>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
