import debounce from 'lodash/debounce';
import { createContext, useEffect, useState } from 'react';
import { Children, createUseContext } from '../utils/contextConstructor';

const WindowContext = createContext<number | null>(null);

export const useWindow = createUseContext(WindowContext, 0);

export function WindowProvider({ children }: Children) {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', debounce(handleResizeWindow, 200));
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<WindowContext.Provider value={width}>{children}</WindowContext.Provider>
	);
}
