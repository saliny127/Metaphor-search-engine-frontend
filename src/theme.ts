import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000099',
        },
        secondary: {
            main: '#0000FF',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;