import { Navigate, Route, Routes } from 'react-router-dom';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/app-bar/Header';
import siteData from './constants/siteData';
import './App.css';

function App() {
  const pages = siteData.pages;

  return (
    <MasterProvider>
      <Header />
      <Routes>
        <Route path="" element={<Navigate to={pages[0].path} replace />} />
        <Route path={pages[0].path} element={<Home />} />
        <Route path={pages[1].path} element={<AboutMe />} />
        <Route path={pages[2].path} element={<Projects />} />
        <Route path={pages[3].path} element={<Contact />} />
      </Routes>
    </MasterProvider>
  );
}

export default App;
