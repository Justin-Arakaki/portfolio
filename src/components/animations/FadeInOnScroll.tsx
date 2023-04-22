import AppearOnScroll from './AppearOnScroll';
import FadeIn from './FadeIn';

interface AppearOnScrollProps {
  children: React.ReactNode;
}

export default function FadeInOnScroll({ children }: AppearOnScrollProps) {
  return (
    <AppearOnScroll>
      <FadeIn delay={0.25}>{children}</FadeIn>
    </AppearOnScroll>
  );
}
