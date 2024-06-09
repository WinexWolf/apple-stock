import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import citiLogo from '../assets/citi-logo.png'; // Import your logo image here

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Avatar alt="Logo" src={citiLogo} sx={{ marginRight: '8px', width: '40px', height: '40px' }} />
    <Typography variant="h6" color="primary.dark">{title}</Typography>
    </Box>
    
);

export default Title;
