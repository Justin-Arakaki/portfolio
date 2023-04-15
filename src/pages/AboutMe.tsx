import { Box, Typography } from '@mui/material';
import ResponsiveTitle from '../components/content/ResponsiveTitle';

export default function AboutMe() {
  return (
    <Box width="100%" mt={8}>
      <Typography variant="h4" textAlign="left" mb={8}>
        Hello, my name is
      </Typography>
      <ResponsiveTitle />
    </Box>
  );
}
