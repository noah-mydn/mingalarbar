import React from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import theme from './theme/theme';
import { Navbar } from './components/Navbar';
import {useMediaQuery } from '@mui/material';
import { Home } from './pages/Home';
import {Menu} from './pages/Menu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { fetchMenu } from './redux/reducers/menuSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const tabletScreen = useMediaQuery(theme.breakpoints.down('md'));
  const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(fetchMenu());
  },[dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar tabletScreen={tabletScreen} mobileScreen={mobileScreen}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home tabletScreen={tabletScreen} mobileScreen={mobileScreen}/>}/>
          <Route path='/menu' element={<Menu tabletScreen={tabletScreen} mobileScreen={mobileScreen}/>}/>
        </Routes>
        
      </BrowserRouter>   
    </ThemeProvider>
  );
}

export default App;
