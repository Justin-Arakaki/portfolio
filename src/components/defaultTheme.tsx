import { createTheme } from '@mui/material';

// WARNING: Make sure all font sizes are in rem!!
const mono = 'Source Code Pro';
const sans = 'Montserrat';
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#66fcf1',
    },
    secondary: {
      main: '#45a29e',
    },
    text: {
      primary: '#c5c6c7',
      secondary: '#ffffff',
    },
    background: {
      paper: '#1f2833',
      default: '#0b0c10',
    },
  },
  typography: {
    fontFamily: sans,
    button: {
      fontFamily: mono,
      fontWeight: 400,
      fontSize: '1rem',
      textTransform: 'none',
    },
    h1: {
      fontWeight: 200,
      fontSize: '5rem',
    },
    h2: {
      fontWeight: 200,
      fontSize: '3.5rem',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.625rem',
    },
    h4: {
      fontFamily: mono,
      fontWeight: 400,
      fontSize: '1.175rem',
    },
    body1: {
      fontWeight: 200,
      fontSize: '1.25rem',
    },
    body2: {
      fontWeight: 200,
      fontSize: '1rem',
    },
  },
});

// Responsive Fonts
const smDown = defaultTheme.breakpoints.down('sm');
defaultTheme.typography.h1[smDown] = {
  fontSize: '2.5rem',
};
defaultTheme.typography.h2[smDown] = {
  fontSize: '1.8rem',
};
defaultTheme.typography.h3[smDown] = {
  fontSize: '1.8rem',
};
defaultTheme.typography.h4[smDown] = {
  fontSize: '1.1rem',
};
defaultTheme.typography.body1[smDown] = {
  fontSize: '1rem',
};
defaultTheme.typography.body2[smDown] = {
  fontSize: '1rem',
};

export default defaultTheme;
