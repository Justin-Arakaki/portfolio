import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';

interface Props {
  onClick: () => void;
}

export default function HamburgerButton({ onClick }: Props) {
  return (
    <IconButton
      disableRipple
      disableTouchRipple
      color="primary"
      aria-label="open drawer"
      onClick={onClick}
      edge="start"
    >
      <Menu />
    </IconButton>
  );
}
