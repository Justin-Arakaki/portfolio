/* eslint-disable @typescript-eslint/no-unused-vars */
import { SxProps, Theme } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';

export const skillItem: SxProps<Theme> = () => {
  const windowWidth = useWindow();
  const { skillItemBp } = useSiteData().windowBp;
  const isLargeWindow = windowWidth > skillItemBp[1];
  const isSmallWindow = windowWidth < skillItemBp[0];

  let width;
  switch (true) {
    case isLargeWindow:
      width = '30%';
      break;
    case isSmallWindow:
      width = '100%';
      break;
    default:
      width = '50%';
      break;
  }
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isLargeWindow ? '1rem' : '0.3rem',
    height: 40,
    width: width,
    minWidth: 140,
  };
};

export const iconCorrection: SxProps<Theme> = {
  color: 'text.primary',
  paddingTop: '2px',
};

export const skillListWrapperStyle: SxProps<Theme> = {
  borderRadius: 5,
  backgroundColor: 'background.paper',
  padding: '1rem',
  boxShadow: (theme: Theme) => `0 0 0 1px ${theme.palette.secondary.main}`,
};

export const skillContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

export const dividerStyle: SxProps<Theme> = () => ({
  marginBottom: '1rem',
  '&::before, &::after': {
    borderColor: 'text.secondary',
    borderWidth: '1px',
  },
});
