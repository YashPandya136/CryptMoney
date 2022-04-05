import { Snackbar } from '@material-ui/core';
import React from 'react'
import {CryptoState} from '../CryptoContext';

const Alert = () => {

    const {alert, setAlert} = CryptoState();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setAlert({open: false});
    };
  
  return (

    <Snackbar>

    </Snackbar>
    )
}

export default Alert