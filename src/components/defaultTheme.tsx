import { createTheme } from '@mui/material';

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
      main: '#66FCF1',
    },
    secondary: {
      main: '#FFF',
    },
    text: {
      primary: '#C5C6C7',
      secondary: '#66FCF1',
    },
    background: {
      paper: '#1F2833',
      default: '#0B0C10',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    button: {
      fontWeight: 200,
      fontSize: '1.175rem',
      textTransform: 'none',
    },
    h1: {
      fontWeight: 500,
      fontSize: '4rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 200,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 200,
      fontSize: '1.625rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.175rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
});

export default defaultTheme;
