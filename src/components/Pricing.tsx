
import React from 'react';

const Pricing = () => {
  const bucketOptions = [
    {
      name: 'Medium Bucket',
      price: '$10',
      description: 'Perfect for a quick practice session',
      features: [
        'Approx. 50 balls',
        'Ideal for short game practice',
        'Great for beginners'
      ],
      accent: false
    },
    {
      name: 'Large Bucket',
      price: '$15',
      description: 'Our most popular option for serious practice',
      features: [
        'Approx. 100 balls',
        'Perfect for full practice sessions',
        'Best value for money'
      ],
      accent: true
    }
  ];

  return (
    <section id="pricing" className="section bg-muted">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Affordable Pricing</h2>
        <p className="text-muted-foreground text-lg">
          No memberships or complicated packages. Just pay for the balls you need and start swinging.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {bucketOptions.map((option, index) => (
          <div 
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${
              option.accent 
                ? 'bg-white border-2 border-golf relative' 
                : 'bg-white'
            }`}
          >
            {option.accent && (
              <div className="absolute top-0 right-0 bg-golf text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{option.price}</span>
              </div>
              <p className="text-muted-foreground mb-6">{option.description}</p>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-golf"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href="#location"
                  className={`inline-block w-full py-3 rounded-md font-medium transition-colors ${
                    option.accent
                      ? 'bg-golf hover:bg-golf-dark text-white'
                      : 'bg-secondary/10 hover:bg-secondary/20 text-secondary'
                  }`}
                >
                  Visit Us Today
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All buckets are available for walk-in customers. No reservations required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
