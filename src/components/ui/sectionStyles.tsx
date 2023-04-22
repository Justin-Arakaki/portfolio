import { SxProps, Theme } from '@mui/material';

export const sectionStyle = (theme: Theme): SxProps<Theme> => ({
  width: '100%',
  paddingTop: '12vh',
  paddingBottom: '33vh',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '4rem',
    paddingBottom: 0,
  },
});
