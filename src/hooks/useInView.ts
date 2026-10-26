import { useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
  triggerOnce?: boolean;
}

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

interface ObserverInstance {
  observer: IntersectionObserver;
  callbacks: Map<Element, ObserverCallback>;
}

// Global pool of shared IntersectionObserver instances to prevent observer explosion
const observerMap = new Map<string, ObserverInstance>();

function getPooledObserver(
  key: string,
  options: IntersectionObserverInit
): ObserverInstance {
  let instance = observerMap.get(key);
  if (!instance) {
    const callbacks = new Map<Element, ObserverCallback>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cb = callbacks.get(entry.target);
        if (cb) {
          cb(entry);
        }
      });
    }, options);
    instance = { observer, callbacks };
    observerMap.set(key, instance);
  }
  return instance;
}

/**
 * Custom hook to detect when an element enters the viewport.
 * Uses a high-performance pooled Intersection Observer with fallback for unsupported environments
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

    // Create a key for the pool based on options
    const thresholdKey = Array.isArray(threshold) ? threshold.join(',') : threshold;
    const poolKey = `${rootMargin}_${thresholdKey}_${root ? 'custom' : 'doc'}`;

    const { observer, callbacks } = getPooledObserver(poolKey, {
      threshold,
      rootMargin,
      root: root || undefined,
    });

    const handleIntersect: ObserverCallback = (entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          callbacks.delete(element);
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    };

    callbacks.set(element, handleIntersect);
    observer.observe(element);

    return () => {
      callbacks.delete(element);
      observer.unobserve(element);
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

