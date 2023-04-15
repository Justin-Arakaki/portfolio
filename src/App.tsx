import { Navigate, Route, Routes } from 'react-router-dom';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/app-bar/Header';
import BodyContainer from './components/ui/BodyContainer';
import siteData from './constants/siteData';
import './App.css';

function App() {
  const pages = siteData.pages;

  return (
    <MasterProvider>
      <Header />
      <BodyContainer>
        <Routes>
          <Route path="*" element={<Navigate to={pages[0].path} replace />} />
          <Route path={pages[0].path} element={<AboutMe />} />
          <Route path={pages[1].path} element={<Projects />} />
          <Route path={pages[2].path} element={<Resume />} />
          <Route path={pages[3].path} element={<Contact />} />
        </Routes>
      </BodyContainer>
    </MasterProvider>
  );
}

export default App;
