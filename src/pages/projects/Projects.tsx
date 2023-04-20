import { Box, Typography } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import ProjectCard from '../../components/project-card/ProjectCard';
import Section from '../../components/ui/Section';
import { boxStyle } from './projectStyles';

export default function Projects() {
  const { link, pageNum, label, list, content } = useSiteData().pages.projects;

  const projects = list.map((item, index) => (
    <ProjectCard
      title={item.title}
      description={item.description}
      image={item.image}
      demoUrl={item.demoUrl}
      ghUrl={item.ghUrl}
      technologies={item.technologies}
      key={index}
    />
  ));

  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <Typography variant="h4" color="text.secondary" mb={5}>
        {content.blurb}
      </Typography>
      <Box sx={boxStyle}>{projects}</Box>
    </Section>
  );
}
