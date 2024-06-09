
import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface ValueProps {
  value: string;
}

const Value: React.FC<ValueProps> = ({ value }) => (
  <Typography variant="h3" gutterBottom>{value}</Typography>
);

export default Value;
