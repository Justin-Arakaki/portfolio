import { Container, SxProps } from '@mui/material';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Header from './components/app-bar/Header';
import FloatingButtons from './components/floating-buttons/FloatingButtons';
import './App.css';

function App() {
  const bodyContainerStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20vh',
    maxWidth: '800px !important',
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
