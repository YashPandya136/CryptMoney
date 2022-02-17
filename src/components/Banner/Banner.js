import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container';
import React from 'react'
import { Typography } from '@material-ui/core';

const useStyle = makeStyles({
    banner: {
      backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline: {

    },
  });

const Banner = () => {

    const classes = useStyle();
  return (
    <div className={classes.banner}>
    <Container className={classes.bannerContent}>
    <div className={classes.tagline}>
<Typography
    variant='h2'
    style={{
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        fontFamily: 'Josefin Sans',
    }}
>
    CryptMoney
</Typography>
<Typography
    variant='subtitle2'
    style={{
        textAlign: 'center',
        color: 'darkgray',
        fontFamily: 'Josefin Sans',
        textTransform: 'capitalize',
    }}
>
    Where you will get all Info about Crypto Currency
</Typography>
    </div>
    </Container>
    </div>
  )
}

export default Banner