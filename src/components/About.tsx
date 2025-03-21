
import React from 'react';

const About = () => {
  const features = [
    {
      title: "40 Hitting Mats",
      description: "Spacious setup with plenty of room for practice",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <line x1="2" y1="15.5" x2="12" y2="8.5"></line>
          <line x1="22" y1="15.5" x2="12" y2="8.5"></line>
        </svg>
      )
    },
    {
      title: "15 Years Experience",
      description: "Proudly serving the Kitchener community since 2009",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "Walk-ins Welcome",
      description: "No reservations needed, just drop by and start swinging",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3"></path>
          <path d="M8 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3"></path>
          <path d="M4 12h16"></path>
        </svg>
      )
    },
    {
      title: "Open Daily",
      description: "Available from 9am to 8pm, seven days a week",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Jim's Driving Range</h2>
        <p className="text-muted-foreground text-lg">
          For 15 years, we've been the go-to destination for golfers in Kitchener looking to improve their game in a relaxed environment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-golf/10 rounded-full flex items-center justify-center text-golf mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1596133108915-48e2de4e3bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80" 
            alt="Golfer at driving range" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
