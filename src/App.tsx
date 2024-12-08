import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { darkTheme, lightTheme } from './theme';
import { Router } from './routers/Router'
import { CssBaseline } from '@mui/material';
import { store } from '@store/store';

function App() {
  const [isDarkTheme] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default App
