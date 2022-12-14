import { createTheme } from '@mui/material/styles';
import { green, purple, red, blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
    },
});
