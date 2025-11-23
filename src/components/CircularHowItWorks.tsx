const CircularHowItWorks = () => {
  const steps = [
    {
      number: "01.",
      title: "Pick Your Look",
      description: "Browse endless styles for any occasion.",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      number: "02.",
      title: "Delivered in 60 Mins",
      description: "Your outfit arrives, ready to wear.",
      position: "bottom-[15%] right-0 translate-x-[40%]",
    },
    {
      number: "03.",
      title: "Wear & Return",
      description: "Enjoy the moment. We handle the rest.",
      position: "bottom-[15%] left-0 -translate-x-[40%]",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="how-it-works-heading" className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-headline text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-4">
          How It Works
        </h2>
        <div className="hidden md:block relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto aspect-square" aria-label="How Popclozet works - circular diagram">
          {/* 2D Rotating Green Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Outer Ring with 2D rotation */}
              <div 
                className="absolute inset-0 rounded-full animate-rotate-clockwise motion-reduce:animate-none"
                style={{
                  animation: 'rotate-clockwise 20s linear infinite',
                  transformOrigin: 'center center',
                }}
              >
                {/* Main ring with gradient */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-r from-green-500 via-green-400 via-green-500 to-green-400 p-[3px]">
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </div>
                </div>
                {/* Glow and shadow layers */}
                <div className="absolute inset-0 rounded-full border-[6px] border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.6),0_0_80px_rgba(34,197,94,0.3),inset_0_0_40px_rgba(34,197,94,0.2)]"></div>
                {/* Highlight effect */}
                <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-br from-green-300/50 via-transparent to-green-600/30"></div>
              </div>
              {/* Inner static ring for depth */}
              <div className="absolute inset-[15%] rounded-full border-2 border-green-400/20"></div>
            </div>
          </div>
          
          {/* Curved arrows following the circular path - rotating with ring */}
          <svg 
            className="absolute inset-0 w-full h-full animate-rotate-clockwise motion-reduce:animate-none" 
            viewBox="0 0 200 200"
            style={{
              animation: 'rotate-clockwise 20s linear infinite',
              transformOrigin: 'center center',
            }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#22c55e" />
              </marker>
              {/* Glow effect for arrows */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Arrow from Step 1 to Step 2 */}
            <path
              d="M 100 20 A 70 70 0 0 1 160 130"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              markerEnd="url(#arrowhead)"
              filter="url(#glow)"
            />
            {/* Arrow from Step 2 to Step 3 */}
            <path
              d="M 160 135 A 70 70 0 0 1 40 135"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              markerEnd="url(#arrowhead)"
              filter="url(#glow)"
            />
            {/* Arrow from Step 3 to Step 1 */}
            <path
              d="M 35 130 A 70 70 0 0 1 95 20"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              markerEnd="url(#arrowhead)"
              filter="url(#glow)"
            />
          </svg>

          {/* Steps positioned around the circle - fixed on ring, rotating with ring but counter-rotating to stay upright */}
          <div 
            className="absolute inset-0 animate-rotate-clockwise motion-reduce:animate-none"
            style={{
              animation: 'rotate-clockwise 20s linear infinite',
              transformOrigin: 'center center',
            }}
          >
            {steps.map((step, index) => (
              <article
                key={index}
                className={`absolute ${step.position} text-center max-w-[200px] animate-rotate-counter motion-reduce:animate-none`}
                aria-label={`Step ${index + 1}: ${step.title}`}
                style={{
                  animation: 'rotate-counter 20s linear infinite',
                  transformOrigin: 'center center',
                }}
              >
                <div className="bg-background p-3 sm:p-4 md:p-5 rounded-lg shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300 max-w-[180px] sm:max-w-[200px]">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary/60 mb-1 sm:mb-2" aria-hidden="true">
                    {step.number}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-headline mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile Version - Stacked */}
        <div className="md:hidden space-y-4 sm:space-y-5 md:space-y-6" role="list">
          {steps.map((step, index) => (
            <article
              key={index}
              className="text-center space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card shadow-card border border-border/50"
              role="listitem"
              aria-label={`Step ${index + 1}: ${step.title}`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary/60" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-headline">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularHowItWorks;
