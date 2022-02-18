import { AppBar, Container, ThemeProvider, createTheme, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import '../App.css';

const useStyles = makeStyles({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Josefin Sans',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
  });

const Header = () => {

    const classes = useStyles();
 
    const navigate = useNavigate();

    const {currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        }
    });

  return (
<ThemeProvider theme={darkTheme}>

   <AppBar color='transparent' position='static'>
   <Container>
   <Toolbar>
   <Typography onClick={() => navigate('../', { replace: true })} className={classes.title} variant='h6'  >CryptMoney</Typography>  
   <Select variant='outlined' style={{
       width: 100,
       height: 40,
       marginRight: 15,
   }}
   value={currency}
   onChange={(e)=>setCurrency(e.target.value)}
   >
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
   </ThemeProvider>
  )
}

export default Header