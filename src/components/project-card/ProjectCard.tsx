import { useState, useRef } from 'react';
import { Card, CardContent, CardMedia, SxProps, Theme } from '@mui/material';
import useClickOut from '../../hooks/useClickOut';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
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
  const windowWidth = useWindow();
  const { windowBp } = useSiteData();
  const isLargeWindow = windowWidth > windowBp.projectCardBp;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isPulledUp, setIsPulledUp] = useState(false);
  const handleMouseOver = () => {
    if (!isLargeWindow) return;
    setIsPulledUp(true);
  };
  const handleMouseOut = () => {
    if (!isLargeWindow) return;
    setIsPulledUp(false);
  };
  const handleTouch = () => {
    if (isLargeWindow) return;
    setIsPulledUp(!isPulledUp);
  };
  const handleTouchOut = () => {
    if (isLargeWindow) return;
    setIsPulledUp(false);
  };
  useClickOut(wrapperRef, handleTouchOut);

  const imageStyle: SxProps<Theme> = {
    height: isPulledUp ? '0%' : '70%',
    transition: '0.25s',
  };
  const contentStyle: SxProps<Theme> = {
    height: isPulledUp ? '100%' : '30%',
    transition: '0.25s',
  };

  const content = isPulledUp ? (
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
      onClick={handleTouch}
      ref={wrapperRef}
      sx={cardStyle}
    >
      <CardMedia image={image} title={title} sx={imageStyle} />
      <CardContent sx={contentStyle}>{content}</CardContent>
    </Card>
  );
}
