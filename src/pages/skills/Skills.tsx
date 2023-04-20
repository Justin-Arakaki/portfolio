import { Stack, Typography } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import SkillList from '../../components/skill-list/SkillList';
import Section from '../../components/ui/Section';

export default function Skills() {
  const { link, pageNum, label, content } = useSiteData().pages.skills;

  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <Typography variant="h4" color="text.secondary" mb={5}>
        {content.blurb}
      </Typography>
      <Stack spacing={2}>
        <SkillList header="Frontend" skills={content.frontend} />
        <SkillList header="Backend" skills={content.backend} />
      </Stack>
    </Section>
  );
}
