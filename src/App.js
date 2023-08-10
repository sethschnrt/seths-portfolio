import React from 'react';
import colors from './utils/colors';
import './App.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import AboutSkills from './components/AboutSkills'
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const appStyle = {
    backgroundColor: colors.PRIMARY,
    color: colors.SECONDARY
};

return (
  <div style={appStyle}>
      <Navbar />
      <LandingSection />
      <div className='aboutSkills'>
      <AboutSkills />
      </div>
      <div className="Portfolio">
      <Portfolio />
      </div>
      <div className='Contact'>
      <Contact />
      </div>
      <Footer />
  </div>
);

};

export default App;
