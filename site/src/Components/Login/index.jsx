import React, { useState } from "react";
import IndexNavbar from "../Navbar/IndexNavbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import loginImg from './../../assets/img/login.jpg';
import signupImg from './../../assets/img/signup.jpg';



const theme = createTheme();


export default function Login({ type }) {
  const isShop = type === "shop";

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const endpoint = isShop ? "http://localhost:5000/login-shop" : "http://localhost:5000/login-user";
    Axios.post(endpoint, form).then((res) => {
      console.log(res);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <IndexNavbar />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2} sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                height: "100%",
                backgroundImage: `url(${signupImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>

          {/* Right Side - Login Form */}
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center",  height: "100vh" }}>
            <Box sx={{ width: "100%", maxWidth: "400px", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <FlashOnIcon />
                </Avatar>
              </Box>

              <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                {isShop ? "Login as Shop Owner" : "Login to Your Account"}
              </Typography>

              <form noValidate style={{ marginTop: 25 }} onSubmit={(e) => e.preventDefault()}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name={isShop ? "username" : "email"}
                      label={isShop ? "Username" : "Email Address"}
                      required
                      fullWidth
                      type={isShop ? "text" : "email"}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      label="Password"
                      required
                      fullWidth
                      type="password"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                {/* Login Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#1976d2",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>

                {/* Signup Link */}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href={isShop ? "/signup-shop" : "/signup-user"} variant="body2">
                      {isShop ? "Don't have a shop account? Sign Up" : "Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
