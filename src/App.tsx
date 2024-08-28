import { useState } from 'react'
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './theme';
import { Router } from './routers/Router'

import './styles/App.css'




function App() {
  const [isDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
