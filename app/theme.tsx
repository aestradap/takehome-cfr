import {createTheme, Theme} from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Palette {
        customColor?: Palette['primary'];
    }

    interface PaletteOptions {
        customColor?: Palette['primary'];
    }
}
const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#3AAFC1',
        },
        secondary: {
            main: '#145388',
        },
        customColor: {
            main: '#011C2F', // Color personalizado
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
 export default theme;