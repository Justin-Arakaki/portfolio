import { Box, Typography, useTheme } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import FadeIn from '../../components/animations/FadeIn';
import ResponsiveTitle from '../../components/content/ResponsiveTitle';
import Section from '../../components/ui/Section';
import { aboutMeWrapperStyle, blurbStyle, helloStyle } from './aboutMeStyles';

export default function AboutMe() {
  const theme = useTheme();
  const { link, content } = useSiteData().pages.aboutme;

  return (
    <Section id={link} sx={aboutMeWrapperStyle(theme)}>
      <Box sx={{ paddingInline: '1rem' }}>
        <FadeIn delay={1.4} animateOnVisible={false}>
          <Typography variant="h4" sx={helloStyle(theme)}>
            {content.greeting}
          </Typography>
        </FadeIn>
        <FadeIn delay={1.5} animateOnVisible={false}>
          <ResponsiveTitle />
        </FadeIn>
        <FadeIn delay={1.6} animateOnVisible={false}>
          <Typography variant="body1" sx={blurbStyle(theme)}>
            {content.about}
          </Typography>
        </FadeIn>
      </Box>
    </Section>
  );
}
