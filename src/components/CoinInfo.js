import { CircularProgress, createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../Config/api';
import { CryptoState } from '../CryptoContext';
import {Line } from 'react-chartjs-2';

const CoinInfo = ({coin}) => {

    const [historicalData, setHistoricalData] =  useState();
    const [days, setDays] = useState(1);

    const { currency } = CryptoState()

    const fetchHistoricData = async() => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

        setHistoricalData(data.prices);
    }

    // console.log('data', historicalData);
useEffect(()=> {
    fetchHistoricData();
},[currency, days]);


const darkTheme = createTheme(
    {
        palette:{
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    },
);

const useStyles = makeStyles((theme)=> ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down('md')]:{
        width: '100%',
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
        },
    }
}));

const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
    <div className={classes.container}>
    {
        !historicalData ? (
            <CircularProgress
            style={{
                color: 'gold'
            }}
            size={250}
            thickness={2}
             />
        ):(
            <>
            <Line
                data={{
                    labels:historicalData.map((coin) => {
                    
                        let date = new Date(coin[0]);
                        let time = 
                        date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;

                        return days === 1 ? time:date.toLocaleDateString();
                    }),
                }}
            />
            </>
            )
    }
    </div>
    </ThemeProvider>
  )
}

export default CoinInfo