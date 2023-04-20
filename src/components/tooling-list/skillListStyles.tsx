/* eslint-disable @typescript-eslint/no-unused-vars */
import { SxProps, Theme } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';

export const skillItem: SxProps<Theme> = (theme) => {
  const windowWidth = useWindow();

  let width;
  switch (true) {
    case windowWidth < 460:
      width = '100%';
      break;
    case 460 <= windowWidth && windowWidth < 580:
      width = '45%';
      break;
    default:
      width = '30%';
      break;
  }

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    height: 40,
    width: width,
  };
};

export const iconCorrection: SxProps<Theme> = {
  color: 'text.primary',
  paddingTop: '2px',
};

export const skillWrapperStyle: SxProps<Theme> = {
  borderRadius: 5,
  backgroundColor: 'background.paper',
  marginTop: '1rem',
  marginBottom: '1rem',
  padding: '1rem',
};

export const skillContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

export const dividerStyle: SxProps<Theme> = (theme) => ({
  marginBottom: '1rem',
  '&::before, &::after': {
    borderColor: 'text.secondary',
    borderWidth: '1px',
  },
});
