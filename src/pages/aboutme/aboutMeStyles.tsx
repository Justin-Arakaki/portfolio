import { SxProps, Theme } from '@mui/material';

export const aboutMeWrapperStyle = (theme: Theme): SxProps<Theme> => ({
  paddingBlock: '30vh',
  [theme.breakpoints.down('sm')]: {
    paddingBlock: '30vh',
  },
});

export const helloStyle = (theme: Theme): SxProps<Theme> => ({
  marginBottom: '4rem',
  [theme.breakpoints.down('sm')]: { marginBottom: '2rem' },
  [theme.breakpoints.up('lg')]: { marginBottom: '4rem' },
});

export const blurbStyle = (theme: Theme): SxProps<Theme> => ({
  maxWidth: 650,
  marginTop: '4rem',
  [theme.breakpoints.down('sm')]: { marginTop: '2rem' },
  [theme.breakpoints.up('lg')]: { marginTop: '4rem' },
});
