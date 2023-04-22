import { Box, ButtonBase, SxProps, Theme, Typography } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';
import FadeIn from '../animations/FadeIn';

interface ButtonProps {
  label: string;
  link: string;
  listNo?: number;
  delay: number;
  isToggledOn?: boolean;
  handleClose?: () => void;
}

export default function NavButton({
  label,
  link,
  listNo,
  delay,
  isToggledOn,
  handleClose,
}: ButtonProps) {
  const { drawerBp } = useSiteData().windowBp;
  const windowWidth = useWindow();
  const isLargeWindow = windowWidth > drawerBp;

  const delayConst = isLargeWindow ? 0.5 : 0;
  const hashLink = `#${link}`;
  const toggledStyle: SxProps<Theme> = {
    color: 'primary.main',
  };
  const untoggledStyle: SxProps<Theme> = {
    transition: '0.5s',
    ['&:hover']: { color: 'text.secondary' },
  };
  const buttonStyle = isToggledOn ? toggledStyle : untoggledStyle;

  return (
    <FadeIn delay={delayConst + delay * 0.1} animateOnVisible={false}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="button" color="secondary" mr="0.25rem">
          {listNo}.
        </Typography>
        <ButtonBase
          disableRipple
          sx={buttonStyle}
          href={hashLink}
          onClick={handleClose}
        >
          <Typography variant="button">{label}</Typography>
        </ButtonBase>
      </Box>
    </FadeIn>
  );
}
