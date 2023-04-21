import { Box, IconButton } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
import {
  iconStyle,
  floatingBoxStyle,
  lineStyle,
} from './floatingButtonsStyles';

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
    <Box sx={floatingBoxStyle}>
      {buttons}
      <Box sx={lineStyle} />
    </Box>
  );
}
