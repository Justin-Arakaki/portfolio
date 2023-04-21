import { Box, Typography, useTheme } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import ResponsiveTitle from '../../components/content/ResponsiveTitle';
import Section from '../../components/ui/Section';
import { aboutMeWrapperStyle, blurbStyle, helloStyle } from './aboutMeStyles';

export default function AboutMe() {
  const theme = useTheme();
  const { link, content } = useSiteData().pages.aboutme;

  return (
    <Section id={link} sx={aboutMeWrapperStyle(theme)}>
      <Box sx={{ paddingInline: '1rem' }}>
        <Typography variant="h4" sx={helloStyle(theme)}>
          {content.greeting}
        </Typography>
        <ResponsiveTitle />
        <Typography variant="body1" sx={blurbStyle(theme)}>
          {content.about}
        </Typography>
      </Box>
    </Section>
  );
}
