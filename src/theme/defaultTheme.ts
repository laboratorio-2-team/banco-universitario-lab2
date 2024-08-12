import { Theme, createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette';

export const defaultTheme: Theme = createTheme({

    palette: createPalette({
        mode: 'dark'
    })

});

