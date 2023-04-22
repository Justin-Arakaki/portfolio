import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function useSequentialAnimation(count: number) {
  const controls = useAnimation();

  useEffect(() => {
    const animateSequence = async (index: number) => {
      if (index < count) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
        animateSequence(index + 1);
      }
    };

    animateSequence(0);
  }, [count, controls]);

  return controls;
}
