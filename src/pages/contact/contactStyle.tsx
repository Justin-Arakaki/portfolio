import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';

export const iconStyle: SxProps<Theme> = {
  color: 'text.secondary',
  paddingBottom: '4px',
};

export const socialsWrapperStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '3rem',
  marginTop: '4rem',
};

export const iconButtonStyle: SxProps<Theme> = () => {
  const windowWidth = useWindow();
  const isLargeWindow = windowWidth > 680;

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    color: 'primary',
    borderRadius: '5px',
    width: isLargeWindow ? 150 : 200,
    marginInline: isLargeWindow ? 0 : '50px',
  };
};
