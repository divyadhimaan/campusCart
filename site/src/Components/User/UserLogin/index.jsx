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
  username: "",
  password: "",
};

export default function SignUp(props) {
  const [form, setForm] = useState(initialState);
  // const [data, setData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(form);
    setForm(initialState);
  };

  const Userlogin = () => {
    Axios.post("http://localhost:5000/login-user", form).then((res) => {
      console.log(res);
    });
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
            Log In as Customer
          </Typography>
          <form
            action="/login-user"
            method="post"
            component="form"
            noValidate
            onSubmit={handleSubmit}
            // sx={{ mt: 10}}
            style={{ marginTop: 25 }}
          >
            <Grid container spacing={2}>
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                {( isSignup 
                    ? 
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive notifications via email."
                    />
                    :
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                  )}
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "success.main" }}
              onClick={Userlogin}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup-user" variant="body2">
                  Don't have an account? Sign Up
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
