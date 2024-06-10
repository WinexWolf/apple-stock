import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { footerStyles } from '../styles';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#000',
        color: 'white',
      }}
    >
      <Container style={footerStyles} maxWidth="lg">
        <Grid container spacing={4}>
          {/* For small screens, stack grid items vertically */}
          <Grid item xs={12} sm={4} textAlign="center" sx={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" variant="body1" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              Contact
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              Careers
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center" sx={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="inherit" variant="body1" display="block">
              Blog
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              Help Center
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center" sx={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" variant="body1" display="block">
              Facebook
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              Twitter
            </Link>
            <Link href="#" color="inherit" variant="body1" display="block">
              LinkedIn
            </Link>
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
