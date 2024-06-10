import React, { useEffect, useState } from 'react';
import KeyRatiosAndEstimates from './components/KeyRatiosAndEstimates';
import { Container, Typography } from '@mui/material';
import LandingPage from './components/LandingPage';
import { fetchStockData } from './services/api';
//import CandlestickChart from './components/CandlestickChart';
import { mainStyles } from './styles';

const App: React.FC = () => {
   
    return (
        <div style={mainStyles}>
        <LandingPage />
            <KeyRatiosAndEstimates />
        </div>
    );
};

export default App;
