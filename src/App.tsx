import { Container, SxProps, useTheme } from '@mui/material';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Header from './components/app-bar/Header';
import FloatingButtons from './components/floating-buttons/FloatingButtons';
import './App.css';

function App() {
  const theme = useTheme();
  const bodyContainerStyle: SxProps = {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15vh',
    },
  };

  return (
    <MasterProvider>
      <Header />
      <Container maxWidth="md" sx={bodyContainerStyle}>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <FloatingButtons />
    </MasterProvider>
  );
}

export default App;
