import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
  });



const Header = () => {

    const classes = useStyles();
 
    const history = useNavigate();

  return (
   <AppBar color='transparent' position='static'>
   <Container>
   <Toolbar>
   <Typography onClick={() => history.push('/')} className={classes.title}>CryptMoney</Typography>  
   <Select variant='outlined' style={{
       width: 100,
       height: 40,
       marginLeft: 15,
   }}>
   <MenuItem value={"INR"}>
       INR
   </MenuItem>
   <MenuItem value={"USD"}>
       USD
   </MenuItem>
   </Select>     
   </Toolbar>
   </Container>
   </AppBar>
  )
}

export default Header