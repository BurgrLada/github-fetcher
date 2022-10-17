import React, { useState } from 'react'
import Search from './components/Search'
import UserHeader from './components/UserHeader'
import Repos from './components/Repos'
import Organizations from './components/Organizations'
import Container from '@mui/material/Container'
import { FullUser } from './types'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import './App.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [fullUser, setUser] = useState<FullUser | null>(null)
  const [status, setStatus] = useState({
    loading: false,
    error: '',
  })

  // Theme switching logic
  const ColorModeContext = React.createContext({
    toggleColorMode: () => {
      /* do nothing. */
    },
  })
  // get default theme
  const getCurrentTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  }
  const [mode, setMode] = React.useState<'light' | 'dark'>(getCurrentTheme)
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <ThemeSwitcher useTheme={useTheme} colorMode={colorMode} />
          <Container maxWidth="md" sx={{ mt: '2rem' }}>
            <h1 style={{ textAlign: 'center' }}>GitHub Fetcher</h1>
            <Search setUser={setUser} setStatus={setStatus} status={status} />
            {fullUser ? <UserHeader user={fullUser.user} /> : ''}
            {fullUser ? <Repos repos={fullUser.repos} /> : ''}
            {fullUser ? (
              <Organizations organizations={fullUser.organizations} />
            ) : (
              ''
            )}
          </Container>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
