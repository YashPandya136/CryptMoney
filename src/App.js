import './App.css';
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import {makeStyles} from '@material-ui/core/styles'

function App() {


  const useStyles = makeStyles({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  });

const classes = useStyles();

 return(
   <Router>
   <div className={classes.App}>
     <Header/>
     <Routes>
     <Route path='/' element={<Homepage/>} exact />
     <Route path='/coins/:id' element={<CoinPage/>} />

     </Routes>
   </div>
   </Router>
 );
}

export default App;
