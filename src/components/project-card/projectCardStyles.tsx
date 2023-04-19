/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { useWindow } from '../../contexts/WindowContext';

export const cardStyle: SxProps<Theme> = () => {
  const windowWidth = useWindow();
  const isLargeWindow = windowWidth > 700;

  return {
    display: 'flex',
    flexDirection: 'column',
    width: isLargeWindow ? 'calc(50% - 0.5rem)' : '100%',
    height: isLargeWindow ? 300 : '50vh',
    borderRadius: 5,
    backgroundColor: 'paper',
    boxShadow: 'none',
  };
};
