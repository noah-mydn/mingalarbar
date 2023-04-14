import { ThemeProvider } from '@emotion/react';
import './App.css';
import theme from './theme/theme';
import { Navbar } from './components/Navbar';
import {useMediaQuery } from '@mui/material';
import { Home } from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const tabletScreen = useMediaQuery(theme.breakpoints.down('md'));
  const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
         <Navbar tabletScreen={tabletScreen}/>
         <Home mobileScreen={mobileScreen} tabletScreen={tabletScreen}/>
    </ThemeProvider>
  );
}

export default App;
