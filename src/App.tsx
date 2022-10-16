import React, { useState } from 'react'
import Search from './components/Search'
import UserHeader from './components/UserHeader'
import Repos from './components/Repos'
import Organizations from './components/Organizations'
import Container from '@mui/material/Container'
import { FullUser } from './types'

import './App.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

function App() {
  const [fullUser, setUser] = useState<FullUser>()

  return (
    <div className="App">
      <Container maxWidth="md" sx={{ mt: '5rem' }}>
        <h1 style={{ textAlign: 'center' }}>GitHub Fetcher</h1>
        <Search setUser={setUser} />
        {fullUser ? <UserHeader user={fullUser.user} /> : ''}
        {fullUser ? <Repos repos={fullUser.repos} /> : ''}
        {fullUser ? (
          <Organizations organizations={fullUser.organizations} />
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default App
