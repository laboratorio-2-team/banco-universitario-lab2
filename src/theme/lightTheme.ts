import { defaultTheme } from "./defaultTheme";
import { Theme, createTheme } from "@mui/material";
import createPalette from '@mui/material/styles/createPalette';


export const lightTheme: Theme = createTheme({
    ...defaultTheme,
    palette: createPalette({
        mode: 'light',
        secondary:{
            main: "#0000"
        },
    })
});