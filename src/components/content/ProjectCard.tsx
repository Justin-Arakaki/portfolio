import {
  Box,
  CardMedia,
  CardContent,
  SxProps,
  Theme,
  Typography,
  Paper,
  Card,
} from '@mui/material';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  image,
  description,
  demoUrl,
  technologies,
}: ProjectCardProps) {
  const cardStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(50% - 0.5rem)',
    height: 300,
    borderRadius: 5,
    backgroundColor: 'paper',
    boxShadow: 'none',
  };
  const imageStyle: SxProps<Theme> = {
    height: '60%',
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia image={image} title={title} sx={imageStyle} />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" color="text.secondary" mb={1}>
            {title}
          </Typography>
          <Typography variant="h5">-Hover-</Typography>
        </Box>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
}
