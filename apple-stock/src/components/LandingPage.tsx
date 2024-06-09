import React from 'react';
import { Button, Typography } from '@mui/material';
import { landingPageStyles } from '../styles';
import gsachLogo from '../assets/gsach-logo.png';
import stockImage from '../assets/stock-image.png';

const LandingPage: React.FC = () => {
  const handleGetStarted = () => {
    const keyRatiosSection = document.getElementById('keyratios');
    if (keyRatiosSection) {
      keyRatiosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={landingPageStyles.container}>
      <div>
        <div style={landingPageStyles.text}>Welcome to Stockify!</div>
        <div style={landingPageStyles.subtext}>Your one-stop destination for all things stocks.</div>
        <Button style={landingPageStyles.button} variant="contained" color="primary" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
      <img src={stockImage} alt="Landing" style={landingPageStyles.logo} />
    </div>
  );
};

export default LandingPage;