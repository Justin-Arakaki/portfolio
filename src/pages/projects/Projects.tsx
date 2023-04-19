import { Box } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import ProjectCard from '../../components/project-card/ProjectCard';
import ToolingList from '../../components/tooling-list/ToolingList';
import Section from '../../components/ui/Section';
import { boxStyle } from './projectStyles';

export default function Projects() {
  const { link, pageNum, label, list } = useSiteData().pages.projects;

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
      <ToolingList />
      <Box sx={boxStyle}>{projects}</Box>
    </Section>
  );
}
