import { SxProps, Theme, Typography, useTheme } from '@mui/material';
import { useSiteData } from '../contexts/SiteDataContext';
import ResponsiveTitle from '../components/content/ResponsiveTitle';
import Section from '../components/ui/Section';

export default function AboutMe() {
  const theme = useTheme();
  const { link, content } = useSiteData().pages.aboutme;
  const helloStyle: SxProps<Theme> = {
    marginBottom: '4rem',
    [theme.breakpoints.down('sm')]: { marginBottom: '2rem' },
    [theme.breakpoints.up('lg')]: { marginBottom: '4rem' },
  };
  const blurbStyle: SxProps<Theme> = {
    maxWidth: 650,
    marginTop: '4rem',
    [theme.breakpoints.down('sm')]: { marginTop: '2rem' },
    [theme.breakpoints.up('lg')]: { marginTop: '4rem' },
  };

  return (
    <Section id={link} sx={{ mt: '8rem' }}>
      <Typography variant="h4" sx={helloStyle}>
        {content.greeting}
      </Typography>
      <ResponsiveTitle />
      <Typography variant="body1" sx={blurbStyle}>
        {content.about}
      </Typography>
    </Section>
  );
}
