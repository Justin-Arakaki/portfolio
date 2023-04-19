import { useSiteData } from '../../contexts/SiteDataContext';
import Section from '../../components/ui/Section';
import SamplePage from '../SamplePage';

export default function Resume() {
  const { link, pageNum, label } = useSiteData().pages.resume;
  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <SamplePage />
    </Section>
  );
}
