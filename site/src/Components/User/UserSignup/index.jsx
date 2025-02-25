import React, { useState } from "react";
import IndexNavbar from "../../Navbar/IndexNavbar";
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

const theme = createTheme();

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  address: "",
  pincode: "",
};

export default function SignUp() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    if (form.password === form.confirmPassword) {
      Axios.post("http://localhost:5000/signup-user", form).then((res) => {
        console.log(res);
      });
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <IndexNavbar />
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2} sx={{ height: "100vh" }}>
          {/* Left half for the image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                backgroundImage: 'url("/path/to/your-image.jpg")', // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>

          {/* Right half for the form */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: "80%" }}>
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <FlashOnIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
                Create Your Account
              </Typography>
              <form
                noValidate
                style={{ marginTop: 25 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      required
                      fullWidth
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="username"
                      label="Username"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email Address"
                      required
                      fullWidth
                      type="email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="address"
                      label="Address"
                      required
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="phoneNumber"
                      label="Phone Number"
                      required
                      fullWidth
                      type="tel"
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
                  <Grid item xs={12}>
                    <TextField
                      name="confirmPassword"
                      label="Confirm Password"
                      required
                      fullWidth
                      type="password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="pincode"
                      label="Pincode"
                      required
                      fullWidth
                      type="text"
                      maxLength="6"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "success.main", borderRadius: "50px" }}
                  onClick={signupUser}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login-user" variant="body2">
                      Already have an account? Log in
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
