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
    height: 300,
    borderRadius: 5,
    backgroundColor: 'paper',
    boxShadow: (theme: Theme) => `0 0 0 1px ${theme.palette.secondary.main}`,
  };
};

export const techBubbleStyle: SxProps<Theme> = {
  borderColor: 'primary.main',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 10,
  paddingInline: 1,
};

export const bubbleBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
};
