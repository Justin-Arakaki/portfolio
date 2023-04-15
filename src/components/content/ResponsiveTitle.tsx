import { Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';
import calcResponsiveFontSize from '../../utils/calcResponsiveFontSize';

export default function ResponsiveTitle() {
  const windowWidth = useWindow();
  const theme = useTheme();
  const titleBoxStyle: SxProps<Theme> = {
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: { ml: 0 },
    [theme.breakpoints.up('lg')]: { ml: '8rem' },
  };
  const baseWindow = theme.breakpoints.values.md;
  const h1FontSize = String(theme.typography.h1.fontSize);
  const h2FontSize = String(theme.typography.h2.fontSize);
  const nameFontSize = calcResponsiveFontSize(
    windowWidth,
    baseWindow,
    h1FontSize
  );
  const titleFontSize = calcResponsiveFontSize(
    windowWidth,
    baseWindow,
    h2FontSize
  );

  return (
    <Box sx={titleBoxStyle}>
      <Typography variant="h1" color="primary" fontSize={nameFontSize}>
        Justin Arakaki
      </Typography>
      <Typography variant="h2" color="text.secondary" fontSize={titleFontSize}>
        a web developer.
      </Typography>
    </Box>
  );
}
