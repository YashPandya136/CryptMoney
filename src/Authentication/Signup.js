import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

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
    </Box>
  );
};

export default Signup;
