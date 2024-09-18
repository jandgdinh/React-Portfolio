import React from 'react';
import logo from '../sitelogo.png'; 
import './SplashScreen.css'; 

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;