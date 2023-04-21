import { useState } from 'react';
import { SxProps, Theme, Drawer } from '@mui/material';
import HamburgerButton from './HamburgerButton';
import NavStack from './NavStack';

export default function CustyDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  const drawerStyle: SxProps<Theme> = {
    '& .MuiDrawer-paper': {
      paddingTop: '1rem',
      width: '50vw',
      minWidth: '20rem',
      boxSizing: 'border-box',
    },
  };
  const navStackStyle: SxProps<Theme> = {
    marginTop: '2rem',
    alignItems: 'center',
  };

  return (
    <>
      <HamburgerButton onClick={handleDrawerOpen} />
      <Drawer
        variant="temporary"
        anchor="right"
        open={isOpen}
        onClose={handleDrawerClose}
        sx={drawerStyle}
      >
        <NavStack
          spacing={4}
          handleClose={handleDrawerClose}
          sx={navStackStyle}
        />
      </Drawer>
    </>
  );
}
