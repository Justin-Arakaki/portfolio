import { Link, useLocation } from 'react-router-dom';
import { SxProps, Theme, Box, ButtonBase, Typography } from '@mui/material';

interface ButtonProps {
  label: string;
  link: string;
  listNo?: number;
  handleClose?: () => void;
}

export default function NavButton({
  label,
  link,
  listNo,
  handleClose,
}: ButtonProps) {
  const location = useLocation();
  const isToggledOn = location.pathname === `/${link}`;
  const toggledStyle: SxProps<Theme> = {
    color: (theme: Theme) => theme.palette.secondary.main,
  };
  const untoggledStyle: SxProps<Theme> = {
    transition: '0.5s',
    ['&:hover']: {
      color: (theme: Theme) => theme.palette.text.secondary,
    },
  };
  const buttonStyle = isToggledOn ? toggledStyle : untoggledStyle;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="button" color="secondary" mr="0.25rem">
        {listNo}.
      </Typography>
      <ButtonBase
        component={Link}
        to={link}
        disableRipple={true}
        sx={buttonStyle}
        onClick={handleClose}
      >
        <Typography variant="button">{label}</Typography>
      </ButtonBase>
    </Box>
  );
}
