import { motion } from 'framer-motion';

interface FadeInProps {
  delay?: number;
  duration?: number;
  move?: boolean;
  children: React.ReactNode;
}

export default function FadeIn({
  children,
  delay = 0,
  move = true,
  duration = 0.5,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: move ? -10 : 0 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
