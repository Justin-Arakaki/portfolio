import { useState } from 'react';
import { Card, CardContent, CardMedia, SxProps, Theme } from '@mui/material';
import HoverInfo from './HoverInfo';
import MainInfo from './MainInfo';
import { cardStyle } from './projectCardStyles';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  demoUrl: string | undefined;
  ghUrl: string | undefined;
  technologies: string[];
}

export default function ProjectCard({
  title,
  image,
  description,
  demoUrl,
  ghUrl,
  technologies,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const imageStyle: SxProps<Theme> = {
    height: isHovered ? '0%' : '70%',
    transition: '0.25s',
  };
  const contentStyle: SxProps<Theme> = {
    height: isHovered ? '100%' : '30%',
    transition: '0.25s',
  };

  const content = isHovered ? (
    <HoverInfo
      title={title}
      description={description}
      technologies={technologies}
      demoUrl={demoUrl}
      ghUrl={ghUrl}
    />
  ) : (
    <MainInfo title={title} description={description} />
  );

  return (
    <Card
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={cardStyle}
    >
      <CardMedia image={image} title={title} sx={imageStyle} />
      <CardContent sx={contentStyle}>{content}</CardContent>
    </Card>
  );
}
