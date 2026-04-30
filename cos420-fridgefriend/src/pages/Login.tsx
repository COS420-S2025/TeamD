import React from 'react'
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Grid from '@mui/material/Grid'
import { useState } from "react";
import { Link, redirect,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth,} from '../firebase';
import logo from "../Logo.png";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
            await signInWithEmailAndPassword(auth,email, password);
            console.log("Sign in Successful")
            navigate('/home');
        } catch (error) {
            console.error('Sign in error:', error);
        }
        
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleLogin}
          sx={{
            mt: 10,
            mb: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} width="100px"></img>
          <Typography variant="h4" sx={{m: 2}}>FridgeFriend</Typography>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#58EB94", color: "black"}}
              onClick={handleLogin}
            >
              Login
            </Button>
            
            <Grid container justifyContent={"center"}>
              <Grid>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;