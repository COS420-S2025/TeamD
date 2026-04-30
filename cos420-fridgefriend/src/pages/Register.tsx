import React from 'react'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import FormControl from '@mui/material/FormControl';
import logo from "../Logo.png";


interface RegisterProps{
  setRegister:(register:boolean)=>void;
}

const Register: React.FC<RegisterProps> = ({setRegister}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    console.log("FORM SUBMITTED");
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      console.log("User registered successfully");
      navigate('/')
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
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
          <Typography variant="h5">Register</Typography>
          <Box component='form' noValidate onSubmit={handleRegister} sx={{ mt: 3}}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password (Minimum 6 characters)"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleRegister}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#58EB94", color: "black"}}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid>
                <Link to="/">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;