import React from 'react';
import colors from './utils/colors';
import './App.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import AboutSkills from './components/AboutSkills'
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';

function App() {
  const appStyle = {
    backgroundColor: colors.PRIMARY,
    color: colors.SECONDARY
};

return (
  <div style={appStyle}>
      <Navbar />
      <LandingSection />
      <AboutSkills />
      <Portfolio />
      <Contact />
  </div>
);

};

export default App;
