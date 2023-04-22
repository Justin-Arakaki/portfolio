import { useState, useEffect, RefObject } from 'react';

interface IntersectionOptionsProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function useIntersection(
  ref: RefObject<Element>,
  options: IntersectionOptionsProps = {
    rootMargin: '10px 10px',
    threshold: 1,
  }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
}
