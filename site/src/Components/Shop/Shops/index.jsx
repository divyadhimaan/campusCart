import React from 'react';
import UserNavbar from '../../Navbar/UserNavbar';
import Cards from '../../Card/index';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const Shops = () => {
  return (
    <div className='background'>
      {/* Navbar */}
      <UserNavbar />

      {/* Page Title */}
      <Container sx={{ pt: 10, pb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
          Explore Different Types of Shops
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#555', mt: 2 }}>
          Discover a variety of shops to suit your needs and preferences.
        </Typography>
      </Container>

      {/* Cards Section */}
      <Container sx={{ pb: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          <Cards />
        </Grid>
      </Container>
    </div>
  );
};

export default Shops;
