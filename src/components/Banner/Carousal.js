import React, { useEffect, useState } from 'react'
import { makeStyles, Img } from '@material-ui/core';
import axios from 'axios';
import { TrendingCoins } from '../../Config/api';
import { CryptoState } from '../../CryptoContext';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    carousal: {
    height: "50%",
    display: 'flex',
    alignItems: 'center',
    },
   
  }));


const Carousal = () => {

    const [trending, setTrending] = useState([]); 

    const classes = useStyle();

    const { currency } = CryptoState();

const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data); 
}


useEffect(()=>{
fetchTrendingCoins();
}, [currency]);

const items = trending.map((coin) => {
return(
    <Link className={classes.carouselItem}
    to={`/coins/${coin.id}`}>
    <img 
        src={coin?.image}
        alt={coin.name}
        height='80'
        style={{marginBottom: 10}}
    />
    <span>
        {coin?.symbol}
        &nbsp
        <span>
            
        </span>
    </span>
    </Link>
)
})

const responsive = {
0: {
    items: 2,
},
512:{
    items:4,
}
}
  return (
    <div className={classes.carousal}>
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
        />
        
    </div>
  )
}

export default Carousal