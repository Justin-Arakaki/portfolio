import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import defaultTheme from '../components/defaultTheme';
import { WindowProvider } from './WindowContext';

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
