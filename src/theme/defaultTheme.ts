import { Theme, createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette';

export const defaultTheme: Theme = createTheme({
    typography: {
        fontFamily: 'Montserrat Alternates',
        fontSize: 12,
    },
    palette: createPalette({
        mode: 'light'
    })

});

