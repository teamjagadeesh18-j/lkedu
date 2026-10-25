import React from 'react';
import { cn } from '@/lib/utils'; // Assuming a `cn` utility for classnames

// Define the type for individual logo props
export interface Logo {
  src: string;
  alt: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
}

// Define the props for the main component
export interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

/**
 * A responsive, self-contained, and infinitely scrolling marquee component.
 * It pauses on hover and uses shadcn/ui theme variables for styling.
 * This component includes its own CSS animation and does not require tailwind.config.js modifications.
 */
const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    // Map speed prop to animation duration
    const durationMap = {
      normal: '35s',
      slow: '60s',
      fast: '15s',
    };
    const animationDuration = durationMap[speed];

    return (
      <>
        {/* The @keyframes for the marquee animation */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'w-full bg-white text-neutral-900 rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_4px_20px_-2px_rgba(17,24,39,0.04)]',
            className
          )}
          {...props}
        >
          {/* Header Section */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b border-[#E5E7EB]">
              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-1.5">
                  CAREER & RECRUITMENT NETWORK
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
                  {title}
                </h2>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm self-start lg:justify-self-end leading-relaxed max-w-md">
                {description}
              </p>
            </div>
          </div>

          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden py-4"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            }}
          >
            <div 
              className="flex w-max items-center gap-5 py-2 pr-5 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out" 
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
              }}
            >
              {/* Render logos twice to create a seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="group relative h-24 w-48 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-neutral-300 transition-all duration-300 p-4"
                >
                  {/* Original Logo in its authentic corporate colors */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
