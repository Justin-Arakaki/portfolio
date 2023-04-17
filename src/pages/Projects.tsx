import { useSiteData } from '../contexts/SiteDataContext';
import Section from '../components/ui/Section';
import SamplePage from './SamplePage';

export default function Projects() {
  const { link } = useSiteData().pages.projects;
  return (
    <Section id={link}>
      <SamplePage title="Projects" />
    </Section>
  );
}
