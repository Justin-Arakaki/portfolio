import { Box, Button, Typography } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import Section from '../../components/ui/Section';
import {
  iconButtonStyle,
  iconStyle,
  socialsWrapperStyle,
} from './contactStyle';

export default function Contact() {
  const { link, pageNum, label, content, socials } =
    useSiteData().pages.contact;
  const socialButtons = socials.map((info, index) => {
    const SocialIcon = info.icon;

    return (
      <Button
        disableRipple
        variant="outlined"
        aria-label={info.title}
        href={info.link}
        key={index}
        sx={iconButtonStyle}
      >
        <SocialIcon sx={iconStyle} />
        <Typography variant="body2" color="text.secondary">
          {info.title}
        </Typography>
      </Button>
    );
  });

  return (
    <Section id={link} pageNum={pageNum} label={label}>
      <Typography variant="h4" color="text.secondary" mb={5}>
        {content.blurb}
      </Typography>
      <Box maxWidth={500}>
        <Typography variant="body1" color="text.secondary">
          {content.message}
        </Typography>
      </Box>
      <Box sx={socialsWrapperStyle}>{socialButtons}</Box>
    </Section>
  );
}
