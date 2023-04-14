import { AppBar, SxProps, Theme, Toolbar, Typography } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';
import CustyDrawer from './CustyDrawer';
import ElevationScroll from './ElevationScroll';
import NavStack from './NavStack';
import Spacer from '../ui/Spacer';

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
    bgcolor: 'background.default',
  };

  return (
    <>
      <ElevationScroll>
        <AppBar sx={appBarStyle}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h3" color="primary">
              JA
            </Typography>
            {navigationType}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Spacer size="large" />
    </>
  );
}
