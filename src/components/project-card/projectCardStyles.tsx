/* eslint-disable @typescript-eslint/no-unused-vars */
import { SxProps, Theme } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import { useWindow } from '../../contexts/WindowContext';

export const cardStyle: SxProps<Theme> = () => {
  const windowWidth = useWindow();
  const { windowBp } = useSiteData();
  const isLargeWindow = windowWidth > windowBp.projectCardBp;

  return {
    display: 'flex',
    flexDirection: 'column',
    width: isLargeWindow ? 'calc(50% - 0.5rem)' : '100%',
    height: isLargeWindow ? 300 : 250,
    borderRadius: 5,
    backgroundColor: 'paper',
    boxShadow: (theme: Theme) => `0 0 0 1px ${theme.palette.secondary.main}`,
  };
};
