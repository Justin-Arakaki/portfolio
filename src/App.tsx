import { Container, SxProps } from '@mui/material';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/app-bar/Header';
import FloatingButtons from './components/floating-buttons/FloatingButtons';
import './App.css';

function App() {
  const bodyContainerStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20vh',
    maxWidth: 800,
    paddingInline: '2.5rem !important',
  };

  return (
    <MasterProvider>
      <Header />
      <Container sx={bodyContainerStyle}>
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
      </Container>
      <FloatingButtons />
    </MasterProvider>
  );
}

export default App;
