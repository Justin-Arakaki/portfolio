import { Box, ButtonBase, SxProps, Theme, Typography } from '@mui/material';

interface ButtonProps {
  label: string;
  link: string;
  listNo?: number;
  isToggledOn?: boolean;
  handleClose?: () => void;
}

export default function NavButton({
  label,
  link,
  listNo,
  isToggledOn,
  handleClose,
}: ButtonProps) {
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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="button" color="secondary" mr="0.25rem">
        {listNo}.
      </Typography>
      <ButtonBase
        disableRipple={true}
        sx={buttonStyle}
        href={hashLink}
        onClick={handleClose}
      >
        <Typography variant="button">{label}</Typography>
      </ButtonBase>
    </Box>
  );
}
