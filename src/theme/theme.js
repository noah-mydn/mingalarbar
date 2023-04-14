import { createTheme } from "@mui/material";

const theme= createTheme({
    palette: {
        primary : {
            main:'#FFD369',
        },
        secondary: {
            light:'#393E46',
            main:'#222831',
        },
        text: {
            main:'#EEEEEE',
        },
    },

    typography: {
        fontFamily:['Philosopher', 'sans-serif'].join(','),
        fontSize:16,
    },
});

export default theme;