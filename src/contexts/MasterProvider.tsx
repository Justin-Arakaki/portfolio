import { WindowProvider } from './WindowContext';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import defaultTheme from '../components/defaultTheme';

interface Props {
  children: ReactNode;
}

export default function MasterProvider({ children }: Props) {
  return (
    <WindowProvider>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </WindowProvider>
  );
}
