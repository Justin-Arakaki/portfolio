import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';

interface AppearOnScrollProps {
  children: React.ReactNode;
}

export default function AppearOnScroll({ children }: AppearOnScrollProps) {
  const refElement = useRef(null);
  const isVisible = useIntersection(refElement);

  return <div ref={refElement}>{isVisible && children}</div>;
}
