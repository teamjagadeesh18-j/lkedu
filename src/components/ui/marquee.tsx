import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: number; // seconds per cycle
}

export function Marquee({
  children,
  pauseOnHover = true,
  reverse = false,
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-1 [--gap:1.25rem] [gap:var(--gap)] select-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}

export default Marquee;
