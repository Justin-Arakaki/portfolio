import hexRgb from 'hex-rgb';
import { AppBar, SxProps, Theme, Toolbar, Typography } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';
import CustyDrawer from './CustyDrawer';
import ElevationScroll from './ElevationScroll';
import NavStack from './NavStack';

export default function Header() {
  const windowWidth = useWindow();
  const navigationType =
    windowWidth < 700 ? (
      <CustyDrawer />
    ) : (
      <NavStack direction="row" spacing={4} />
    );
  const appBarStyle: SxProps<Theme> = {
    position: 'fixed',
    color: 'text.primary',
    bgcolor: (theme: Theme) => {
      const color = theme.palette.background.default;
      return hexRgb(color, { alpha: 0.4, format: 'css' });
    },
    backdropFilter: 'blur(10px)',
  };

  return (
    <ElevationScroll>
      <AppBar sx={appBarStyle}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h3" color="primary">
            just_
          </Typography>
          {navigationType}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
