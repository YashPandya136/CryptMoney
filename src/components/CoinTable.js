import React, { useEffect, useState } from "react";
import { CoinList } from "../Config/api";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import {
  createTheme,
  TableContainer,
  TextField,
  Table,
  TableHead,
  ThemeProvider,
  Typography,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Container } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";


const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loding, setLoding] = useState(false);
  const [search, setSearch] = useState('');

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoding(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoding(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Josefin Sans" }}
        >
          CryptoCurrency Prices by Market Cap
        </Typography>
        <TextField 
            label='Looking for ....' variant='outlined'
            style={{marginBottom: 20, width: '100%'}}
            onChange={(e)=>setSearch(e.target.value)}
        />

        <TableContainer>
            {
                loding ? (
                    <LinearProgress style={{backgroundColor: "gold"}} />
                ) : (
                    <Table>
                        <TableHead style={{
                            backgroundColor: 'goldenrod'
                        }}>
                        <TableRow>
                            {
                                ['Coin', 'Price', '24h Change', 'Market Cap'].map((head)=> (
                                    <TableCell
                                    style={{
                                        color: 'black',
                                        fontWeight: '700',
                                        fontFamily: 'Josefin Sans',
                                    }}
                                    key={head}
                                    align={head === 'Coin'? ' ': 'right'}
                                    >
                                       {head} 
                                    </TableCell>
                                ))}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            
                        </TableBody>
                    </Table>
                )
            }
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinTable;
