
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import MapView from './MapView';

const Location = () => {
  return (
    <section id="location" className="section">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
        <p className="text-muted-foreground text-lg">
          We're conveniently located in Kitchener, just a short drive from downtown.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="glass-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-golf/10 rounded-full flex items-center justify-center text-golf shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground mb-2">
                  1535 New Dundee Rd<br />
                  Kitchener, ON N2P 2P5
                </p>
                <a 
                  href="https://maps.google.com/?q=1535+New+Dundee+Rd+Kitchener+ON+N2P+2P5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-golf hover:text-golf-dark transition-colors font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-golf/10 rounded-full flex items-center justify-center text-golf shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="text-muted-foreground">Monday - Sunday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Walk-ins welcome. No reservations required.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-golf/10 rounded-full flex items-center justify-center text-golf shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground mb-2">
                  Have questions? Give us a call:
                </p>
                <a 
                  href="tel:+15195551234" 
                  className="text-golf hover:text-golf-dark transition-colors font-medium text-lg"
                >
                  (519) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full">
          <MapView />
        </div>
      </div>
    </section>
  );
};

export default Location;
