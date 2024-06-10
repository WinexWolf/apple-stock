import React, { useEffect, useState } from 'react';
import KeyRatiosAndEstimates from './components/KeyRatiosAndEstimates';
import { Container, Typography } from '@mui/material';
import LandingPage from './components/LandingPage';
import { fetchStockData } from './services/api';
//import CandlestickChart from './components/CandlestickChart';

const App: React.FC = () => {
   
    return (
        <>
        <LandingPage />
            <KeyRatiosAndEstimates />
        </>
    );
};

export default App;
