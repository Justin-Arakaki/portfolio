import { Box, Stack, Typography } from '@mui/material';
import DemoButton from './DemoButton';
import {
  bubbleBoxStyle,
  containerStyle,
  techBubbleStyle,
} from './projectCardStyles';

interface HoverInfoProps {
  title: string;
  description?: string;
  technologies: string[];
  ghUrl: string | undefined;
  demoUrl: string | undefined;
}

export default function HoverInfo({
  title,
  description,
  technologies,
  ghUrl,
  demoUrl,
}: HoverInfoProps) {
  const isDisabled: boolean = demoUrl ? false : true;

  const techBubbles = technologies.map((value, index) => {
    return (
      <Box key={index} sx={techBubbleStyle}>
        <Typography variant="body1" color="text.secondary">
          {value}
        </Typography>
      </Box>
    );
  });

  return (
    <Box sx={containerStyle}>
      <Stack spacing={1}>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Box sx={bubbleBoxStyle}>{techBubbles}</Box>
      </Stack>
      <Box display="flex" justifyContent="right" gap={1}>
        <DemoButton href={demoUrl} disabled={isDisabled}>
          Demo
        </DemoButton>
        <DemoButton href={ghUrl}>GitHub</DemoButton>
      </Box>
    </Box>
  );
}
