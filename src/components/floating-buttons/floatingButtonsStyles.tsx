import { SxProps, Theme } from '@mui/material';

export const floatingBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  right: '2rem',
};

export const lineStyle: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  height: '20vh',
  width: '1px',
  marginTop: '0.5rem',
};

export const iconStyle: SxProps<Theme> = {
  color: 'text.primary',
  transition: '0.5s',
  ['&:hover']: { color: 'text.secondary' },
};
