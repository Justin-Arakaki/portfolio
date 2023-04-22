import { Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { sectionStyle } from './sectionStyles';
import FadeInOnScroll from '../animations/FadeInOnScroll';

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
  const customSectionStyle = { ...sectionStyle(theme), ...sx };

  const title =
    pageNum && label ? (
      <FadeInOnScroll>
        <Box display="flex" gap={1} alignItems="flex-end" mb={2}>
          <Typography variant="h4" color="secondary">
            {pageNum}.
          </Typography>
          <Typography variant="h3" color="primary">
            {label}
          </Typography>
        </Box>
      </FadeInOnScroll>
    ) : null;

  return (
    // <FadeInOnScroll>
    <Box id={id} sx={customSectionStyle}>
      {title}
      {children}
    </Box>
    // </FadeInOnScroll>
  );
}
