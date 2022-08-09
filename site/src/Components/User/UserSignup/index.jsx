import React, { useState } from "react";
import IndexNavbar from "../../Navbar/IndexNavbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FlashOnIcon from "@mui/icons-material/FlashOn";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        ⚡ Flash
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
  address: "",
  pincode: "",
  // date:""
};

export default function SignUp({props}) {
  // const [isSignup, setIsSignup ] = useState(true);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(form);
    // isSignup ? register() : login();
    // const {  firstName, lastName, email, phoneNumber, password } = form;
  };

  const signupUser = () => {
    console.log("in signup user app");

    Axios({
      method: "POST",
      data: {
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        phoneNumber: form.phoneNumber,
        password: form.password,
        address: form.address,
        pincode: form.pincode,
        // date: form.date
      },
      withCredentials: true,
      url: "http://localhost:5000/signup-user",
    }).then((res) => console.log(res));
    
  };

  return (
    <ThemeProvider theme={theme}>
      <IndexNavbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <FlashOnIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up as Customer
          </Typography>
          <form
            action="/login"
            method="post"
            component="form"
            noValidate
            onSubmit={handleSubmit}
            // sx={{ mt: 3 }}
            style={{marginTop: 25}}

          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  autoComplete="address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Number"
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="pincode"
                  label="Pincode"
                  type="text"
                  id="pincode"
                  pattern="\d{6}"
                  maxLength="4"
                  placeholder="Pincode"
                  autoComplete="pincode"
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name="date"
                    label=""
                    type="datetime-local"
                    id="date"
                    placeholder="Date"
                    autoComplete="date"
                    onChange={handleChange}
                  />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "success.main" }}
              onClick={signupUser}
              // href="/shops"
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
