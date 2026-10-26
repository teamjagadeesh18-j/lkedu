import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export interface RevealProps<T extends React.ElementType = 'div'> {
  children?: React.ReactNode;
  delay?: number; // Delay in seconds (e.g., 0.15, 0.3)
  as?: T;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  [key: string]: any;
}

/**
 * Reusable Reveal component that applies a GPU-accelerated fade-up reveal animation
 * triggered by the Intersection Observer API as the element scrolls into view.
 * 
 * Optimized for butter-smooth scrolling across all devices:
 * - Only enables `willChange` during the active animation window.
 * - Collapses transform and transition styles to 'none' upon completion so elements
 *   rejoin standard compositing, completely eliminating GPU layer explosion and scroll jank.
 */
export const Reveal = <T extends React.ElementType = 'div'>({
  children,
  delay = 0,
  as,
  className = '',
  style = {},
  ...props
}: RevealProps<T>) => {
  const Component = (as || 'div') as React.ElementType;
  const { ref, isVisible } = useInView<HTMLElement>();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // After delay + 600ms duration + 50ms buffer, teardown layer promotion
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, (delay + 0.65) * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  const animationStyle: React.CSSProperties = animationCompleted
    ? {
        opacity: 1,
        transform: 'none',
        transition: 'none',
        willChange: 'auto',
        ...style,
      }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: delay > 0 ? `${delay}s` : undefined,
        willChange: isVisible ? 'opacity, transform' : 'auto',
        ...style,
      };

  return (
    <Component
      ref={ref as any}
      className={`reveal-wrapper ${className}`}
      style={animationStyle}
      data-reveal={isVisible ? 'visible' : 'hidden'}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;

