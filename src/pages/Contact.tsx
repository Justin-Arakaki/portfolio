import { useSiteData } from '../contexts/SiteDataContext';
import Section from '../components/ui/Section';
import SamplePage from './SamplePage';

export default function Contact() {
  const { link } = useSiteData().pages.contact;
  return (
    <Section id={link}>
      <SamplePage title="Contact" />
    </Section>
  );
}
