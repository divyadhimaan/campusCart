import React from 'react';
import IndexNavbar from '../Navbar/IndexNavbar';
import { Grid, Card, Container, Button, CardMedia } from '@mui/material';
import shop from './../../assets/img/shop.png';
import user from './../../assets/img/user.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function User() {
  return (
    <div style={{ background: 'linear-gradient(to right, #a1ffce, #faffd1)', minHeight: '100vh' }}>
      <IndexNavbar />
      <Container style={{ paddingTop: "50px" }}>
        <Grid container spacing={2} justifyContent="center">
          
          {/* Customer Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
              <Container sx={{ height: "250px", backgroundColor: "#b8dde9", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardMedia
                component="img"
                alt="Customer Icon"
                image={user}
                sx={{
                    height: "160px",
                    width: "160px",
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
                />
              </Container>
              <Card.Body sx={{ textAlign: "center", padding: "1.5rem" }}>
                <Card.Title sx={{ fontSize: "24px", fontWeight: "bold" }}>Customer</Card.Title>
                <Button
                  variant="outlined"
                  size="large"
                  href="/signup-user"
                  sx={{
                    marginTop: "20px",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: "1rem",
                  }}
                >
                  Continue <ArrowRightAltIcon />
                </Button>
              </Card.Body>
            </Card>
          </Grid>

          {/* Shop Owner Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
              <Container sx={{ height: "250px", backgroundColor: "#b8dde9", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CardMedia
                component="img"
                alt="Customer Icon"
                image={shop}
                sx={{
                    height: "160px",
                    width: "160px",
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
                />
              </Container>
              <Card.Body sx={{ textAlign: "center", padding: "1.5rem" }}>
                <Card.Title sx={{ fontSize: "24px", fontWeight: "bold" }}>Shop Owner</Card.Title>
                <Button
                  variant="outlined"
                  size="large"
                  href="/signup-shop"
                  sx={{
                    marginTop: "20px",
                    textTransform: "none",
                    width: "100%",
                    borderRadius: "1rem",
                  }}
                >
                  Continue <ArrowRightAltIcon />
                </Button>
              </Card.Body>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
