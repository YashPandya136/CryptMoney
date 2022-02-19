import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../Config/api';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {

  const {id } = useParams();
  const [coin, setCoin] = useState();

  const {currency, symbol } = CryptoState();

  const fetchCoin = async() => { 
    const {data} = await axios.get(SingleCoin(id));
    
    setCoin(data);
  }


  useEffect(() => {
    fetchCoin();
  },[]);

const useStyle = makeStyles(() => {
   
});

const classes = useStyle();

  return (
    <div className={classes.container}>
    <div className={classes.sidebar}>
      {/* sidebar */}
    </div>
    Chat
    </div>
  )
}

export default CoinPage