import { Box, Typography } from '@mui/material';

interface MainInfoProps {
  title: string;
  description: string;
}

export default function MainInfo({ title, description }: MainInfoProps) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="text.secondary" mb={1}>
          {title}
        </Typography>
        <Typography variant="h5">-Hover-</Typography>
      </Box>
      <Typography variant="body1">{description}</Typography>
    </>
  );
}
