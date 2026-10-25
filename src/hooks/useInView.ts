import { useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
  triggerOnce?: boolean;
}

/**
 * Custom hook to detect when an element enters the viewport.
 * Uses the Intersection Observer API with fallback for unsupported environments
 * and respects the `prefers-reduced-motion` accessibility preference.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    root = null,
    triggerOnce = true,
  } = options;

  const ref = useRef<T | null>(null);

  // Initialize visibility: immediately visible if SSR, IntersectionObserver is unavailable,
  // or user prefers reduced motion.
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    if (!('IntersectionObserver' in window)) return true;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    // If already triggered and only trigger once, nothing to do
    if (isVisible && triggerOnce) return;

    // Fallback: If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Accessibility: Respect prefers-reduced-motion by showing immediately
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, triggerOnce, isVisible]);

  // Support both tuple [ref, isVisible] and object { ref, isVisible } destructuring
  const result = { ref, isVisible };
  (result as any)[Symbol.iterator] = function* () {
    yield ref;
    yield isVisible;
  };

  return result as { ref: React.RefObject<T | null>; isVisible: boolean } & [
    React.RefObject<T | null>,
    boolean
  ];
}

export default useInView;
