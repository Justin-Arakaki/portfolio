import { Box, Typography } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
        <KeyboardDoubleArrowUpIcon />
      </Box>
      <Typography variant="body1">{description}</Typography>
    </>
  );
}
