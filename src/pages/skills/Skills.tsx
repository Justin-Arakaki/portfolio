import { useSiteData } from '../../contexts/SiteDataContext';
import SkillList from '../../components/skill-list/SkillList';
import Section from '../../components/ui/Section';

export default function Skills() {
  const { link, pageNum, label, content } = useSiteData().pages.skills;

  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <SkillList header="Frontend" skills={content.frontend} />
      <SkillList header="Backend" skills={content.backend} />
    </Section>
  );
}
