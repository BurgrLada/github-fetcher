import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material/'
import GitHubIcon from '@mui/icons-material/GitHub'
import { EventChange, EventKey, FullUser, User, IUserProps } from '../types'
import { loadFullUser } from '../api'

export default function Search({ setUser }: IUserProps) {
  const [searchText, setSearchText] = useState('')
  const searchHandler = (e: EventChange) => {
    setSearchText(e.target.value)
  }
  const getUser = (): void => {
    console.log(searchText)
    loadFullUser(searchText).then((data) => {
      console.log('tu', data)
      if (data) setUser(data)
    })
    setUser(undefined)
  }
  const handleKeyDown = (e: EventKey) => {
    if (e.key === 'Enter') {
      getUser()
    }
  }

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
    >
      <GitHubIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        id="input-with-sx"
        label="Username"
        variant="standard"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
      <Button variant="contained" sx={{ ml: 2 }} onClick={getUser}>
        Search
      </Button>
    </Box>
  )
}
