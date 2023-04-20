import { useSiteData } from '../../contexts/SiteDataContext';
import Section from '../../components/ui/Section';
import SamplePage from '../SamplePage';

export default function Skills() {
  const { link, pageNum, label } = useSiteData().pages.skills;
  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <SamplePage />
    </Section>
  );
}
