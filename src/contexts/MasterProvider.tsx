import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../components/themes/defaultTheme';
import { SiteDataProvider } from './SiteDataContext';
import { WindowProvider } from './WindowContext';

interface Props {
  children: ReactNode;
}

export default function MasterProvider({ children }: Props) {
  return (
    <WindowProvider>
      <SiteDataProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </SiteDataProvider>
    </WindowProvider>
  );
}
