import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface FadeInProps {
  delay?: number;
  duration?: number;
  movement?: boolean;
  animateOnVisible?: boolean;
  children: React.ReactNode;
}

export default function FadeIn({
  children,
  delay = 0,
  movement = true,
  animateOnVisible = true,
  duration = 0.5,
}: FadeInProps) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { margin: '-40%' });

  const variants = {
    hidden: { opacity: 0, translateY: movement ? -10 : 0 },
    visible: { opacity: 1, translateY: 0 },
  };
  let animate = 'visible';
  if (animateOnVisible) {
    animate = isVisible ? 'visible' : 'hidden';
  }

  return (
    <motion.div
      ref={animateOnVisible ? ref : null}
      variants={variants}
      initial="hidden"
      animate={animate}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
