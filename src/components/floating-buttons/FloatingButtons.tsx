import { Box, IconButton } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
import {
  floatingBoxStyle,
  iconStyle,
  lineStyle,
} from './floatingButtonsStyles';
import FadeIn from '../animations/FadeIn';

export default function FloatingButtons() {
  const { pages, windowBp: windowBreakpoints } = useSiteData();
  const { socials } = pages.contact;
  const windowWidth = useWindow();

  if (windowWidth < windowBreakpoints.floatingButtonsBp) return null;

  const buttons = socials.map((info, index) => {
    const SocialIcon = info.icon;

    return (
      <IconButton
        disableRipple
        aria-label={info.title}
        href={info.link}
        key={index}
      >
        <SocialIcon sx={iconStyle} />
      </IconButton>
    );
  });

  return (
    <FadeIn delay={2.2} move={false}>
      <Box sx={floatingBoxStyle}>
        {buttons}
        <Box sx={lineStyle} />
      </Box>
    </FadeIn>
  );
}
