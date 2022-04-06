import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [setAlert] = CryptoState();

  const handleSubmit = () => {
    if(password!=confirmPassword){
      setAlert({
        open: true,
        message: "Password do not match !!!",
        type: "error",         
      })
      return;
    }
    
  }
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
        <TextField 
            variant='outlined'
            type='email'
            label=' Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
        />
        <TextField 
            variant='outlined'
            type='password'
            label=' Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
        />
        <TextField 
            variant='outlined'
            type='Confirm Password'
            label='Confirm  Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
        />
        <Button
          variant="contained"
          size="large"
          style={{backgroundColor: "#EEBC1D"}}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
    </Box>
  );
};

export default Signup;
