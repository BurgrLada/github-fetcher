import React from 'react';
import Search from './components/Search';
import UserHeader from './components/UserHeader';
import Repos from './components/Repos';
import Organizations from './components/Organizations';
import Container from '@mui/material/Container';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Container maxWidth="md" sx={{ mt: "5rem" }}>
        <h1 style={{ textAlign: 'center' }}>GitHub Fetcher</h1>
        <Search />
        <UserHeader />
        <Repos />
        <Organizations />
      </Container>
    </div>
  );
}

export default App;
