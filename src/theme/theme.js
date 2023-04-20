import { createTheme } from "@mui/material";

const theme= createTheme({
    palette: {
        primary : {
            main:'#FFD369',
        },
        secondary: {
            light:'#2b323d',
            main:'#222831',
            dark:'#181C23',
        },
        text: {
            main:'#EEEEEE',
        },
        info: {
            main:'#101317',
        }
    },

    typography: {
        fontFamily:['Philosopher', 'Jost', 'sans-serif'].join(','),
        fontSize:16,
    },
});

export default theme;