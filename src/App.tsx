/* eslint-disable @typescript-eslint/no-shadow */
import { Box } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
	return (
		<MasterProvider>
			<Box>
				<Routes>
					<Route path="*" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/aboutme" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Box>
		</MasterProvider>
	);
}

export default App;
