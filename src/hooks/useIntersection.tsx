import { useState, useEffect, RefObject } from 'react';

interface IntersectionOptionsProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Only invokes once! Delete observer.unobserve(entry.target)
// if necessary

export default function useIntersection(
  ref: RefObject<Element>,
  options: IntersectionOptionsProps = {
    rootMargin: '-100px',
    threshold: 1,
  }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return isVisible;
}
