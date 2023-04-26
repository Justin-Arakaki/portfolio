import { Box, IconButton, Tooltip } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
import {
  floatingBoxStyle,
  iconStyle,
  lineStyle,
} from './floatingButtonsStyles';
import FadeIn from '../animations/FadeIn';

export default function FloatingButtons() {
  const { pages, windowBp } = useSiteData();
  const { socials } = pages.contact;
  const windowWidth = useWindow();

  if (windowWidth < windowBp.floatingButtonsBp) return null;

  const buttons = socials.map((info, index) => {
    const SocialIcon = info.icon;

    return (
      <Tooltip title={info.title} placement="left">
        <IconButton
          disableRipple
          aria-label={info.title}
          href={info.link}
          key={index}
        >
          <SocialIcon sx={iconStyle} />
        </IconButton>
      </Tooltip>
    );
  });

  return (
    <FadeIn delay={2.1} movement={false} animateOnVisible={false}>
      <Box sx={floatingBoxStyle}>
        {buttons}
        <Box sx={lineStyle} />
      </Box>
    </FadeIn>
  );
}
