import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';

export const iconStyle: SxProps<Theme> = {
  color: 'text.secondary',
  paddingBottom: '4px',
};

export const socialsWrapperStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '4rem',
};

export const iconButtonStyle: SxProps<Theme> = () => {
  const windowWidth = useWindow();
  const { windowBp } = useSiteData();
  const isLargeWindow = windowWidth > windowBp.contactsBp;

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
