import { Box, SxProps } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const flexy: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  };

  return (
    <MasterProvider>
      <Box sx={flexy}>
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
