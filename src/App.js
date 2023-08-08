import React from 'react';
import colors from './utils/colors';
import './App.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import AboutSkills from './components/AboutSkills'
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
      {/* Rest of your app */}
  </div>
);

};

export default App;
