import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { CoinList } from './Config/api';
import axios from 'axios';

const Crypto = createContext();


const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState('INR');
    const [user, setUser] = useState(null);
    const [symbol, setSymbol] = useState('₹');
    const [coins, setCoins] = useState([]);
    const [loding, setLoding] = useState(false);


  const fetchCoins = async () => {
    setLoding(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoding(false);
  };

useEffect(() => {
    if(currency === 'INR') setSymbol('₹');
    else if (currency === 'USD') setSymbol('$');
}, [currency]);

    return (
    <Crypto.Provider value={{currency, symbol, setCurrency, coins, loding, fetchCoins}}>
    {
        children
    }
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
   return useContext(Crypto);
}