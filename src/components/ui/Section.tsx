import { Box, Typography, SxProps, Theme, useTheme } from '@mui/material';

interface SectionProps {
  id: string;
  pageNum?: number;
  label?: string;
  children?: React.ReactNode | React.ReactNode[];
  sx?: SxProps<Theme>;
}

export default function Section({
  id,
  pageNum,
  label,
  children,
  sx: sx,
}: SectionProps) {
  const theme = useTheme();
  const sectionStyle: SxProps<Theme> = {
    width: '100%',
    paddingTop: '12vh',
    paddingBottom: '33vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '4rem',
      paddingBottom: 0,
    },
    ...sx,
  };
  const title =
    pageNum && label ? (
      <Box display="flex" gap={1} alignItems="flex-end" mb={2}>
        <Typography variant="h4" color="secondary">
          {pageNum}.
        </Typography>
        <Typography variant="h3" color="primary">
          {label}
        </Typography>
      </Box>
    ) : null;
  return (
    <Box id={id} sx={sectionStyle}>
      {title}
      {children}
    </Box>
  );
}
