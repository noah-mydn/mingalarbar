import { ThemeProvider } from '@emotion/react';
import './App.css';
import theme from './theme/theme';
import { Navbar } from './components/Navbar';
import { useMediaQuery } from '@mui/material';

function App() {

  const mobileScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Navbar mobileScreen={mobileScreen}/>
    </ThemeProvider>
  );
}

export default App;
