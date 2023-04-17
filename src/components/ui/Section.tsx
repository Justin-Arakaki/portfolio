import { Box, SxProps, Theme } from '@mui/material';

interface SectionProps {
  id: string;
  children: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme>;
}

export default function Section({ id, children, sx }: SectionProps) {
  const sectionStyle: SxProps<Theme> = {
    width: '100%',
    paddingTop: '8rem',
    ...sx,
  };
  return (
    <Box id={id} sx={sectionStyle}>
      {children}
    </Box>
  );
}
