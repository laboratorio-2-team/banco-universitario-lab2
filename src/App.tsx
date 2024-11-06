import { useState } from 'react'
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './theme';
import { Router } from './routers/Router'
import { CssBaseline } from '@mui/material';

function App() {
  const [isDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
