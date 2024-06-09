import React from 'react';
import KeyRatiosAndEstimates from './components/KeyRatiosAndEstimates';
import { Container, Typography } from '@mui/material';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
    return (
        <>
            <LandingPage/>
            <KeyRatiosAndEstimates />
        </>
    );
};

export default App;
