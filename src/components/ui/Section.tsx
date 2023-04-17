import { Box, SxProps, Theme } from '@mui/material';

interface SectionProps {
  id: string;
  children: React.ReactNode[];
  sx?: SxProps<Theme>;
}

export default function Section({ id, children, sx }: SectionProps) {
  const sectionStyle: SxProps<Theme> = {
    ...sx,
    width: '100%',
  };
  return (
    <Box id={id} sx={sectionStyle}>
      {children}
    </Box>
  );
}
