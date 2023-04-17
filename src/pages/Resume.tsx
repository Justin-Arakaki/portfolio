import { useSiteData } from '../contexts/SiteDataContext';
import Section from '../components/ui/Section';
import SamplePage from './SamplePage';

export default function Resume() {
  const { link } = useSiteData().pages.resume;
  return (
    <Section id={link}>
      <SamplePage title="Resume" />
    </Section>
  );
}
