import { Box, SxProps, Theme, Typography } from '@mui/material';
import { useSiteData } from '../contexts/SiteDataContext';
import ProjectCard from '../components/content/ProjectCard';
import Section from '../components/ui/Section';

export default function Projects() {
  const { link, pageNum, label, list, content } = useSiteData().pages.projects;

  const boxStyle: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  };
  const projects = list.map((info, index) => (
    <ProjectCard
      title={info.title}
      description={info.description}
      image={info.image}
      demoUrl={info.demoUrl}
      technologies={info.technologies}
      key={index}
    />
  ));
  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <Typography variant="h4" mt={2} mb={6}>
        {content.blurb}
      </Typography>
      <Box sx={boxStyle}>{projects}</Box>
    </Section>
  );
}
