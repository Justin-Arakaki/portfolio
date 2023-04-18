import { Box, Stack, SxProps, Theme, Typography, Button } from '@mui/material';

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
  const techBubbleStyle: SxProps<Theme> = {
    borderColor: 'primary.main',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    paddingInline: 1,
  };
  const bubbleBoxStyle: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };
  const containerStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  };
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
        <Button
          disableFocusRipple
          disableTouchRipple
          variant="outlined"
          color="primary"
          href={demoUrl}
          disabled={isDisabled}
        >
          Demo
        </Button>
        <Button
          disableFocusRipple
          disableTouchRipple
          variant="outlined"
          color="primary"
          href={ghUrl}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
}
