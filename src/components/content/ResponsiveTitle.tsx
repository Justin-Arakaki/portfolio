import { Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
import calcResponsiveFontSize from '../../utils/calcResponsiveFontSize';

export default function ResponsiveTitle() {
  const windowWidth = useWindow();
  const theme = useTheme();
  const { content } = useSiteData().pages.aboutme;
  const titleBoxStyle: SxProps<Theme> = {
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: { marginLeft: 0 },
    [theme.breakpoints.up('lg')]: { marginLeft: '4rem' },
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
        {content.name}
      </Typography>
      <Typography variant="h2" color="text.secondary" fontSize={titleFontSize}>
        {content.title}
      </Typography>
    </Box>
  );
}
