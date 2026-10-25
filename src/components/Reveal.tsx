import React from 'react';
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
 */
export const Reveal = <T extends React.ElementType = 'div'>({
  children,
  delay = 0,
  as,
  className = '',
  style = {},
  ...props
}: RevealProps<T>) => {
  const Component = as || 'div';
  const { ref, isVisible } = useInView<HTMLElement>();

  const animationStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    transitionDelay: delay > 0 ? `${delay}s` : undefined,
    willChange: isVisible ? 'auto' : 'opacity, transform',
    ...style,
  };

  return (
    <Component
      ref={ref}
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
