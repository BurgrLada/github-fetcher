import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material/'
import LoadingButton from '@mui/lab/LoadingButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import { EventChange, EventKey, FullUser, User, IUserProps } from '../types'
import { loadFullUser } from '../api'

export default function Search({ setUser }: IUserProps) {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchHandler = (e: EventChange) => {
    setSearchText(e.target.value)
  }
  const getUser = (): void => {
    setLoading(true)
    setError(null)
    loadFullUser(searchText)
      .then((data) => {
        console.log("1")
        if (data) setUser(data)
        setLoading(false)
      })
      // prevents bugged loading and displays 404
      .catch(() => {
        console.log("2")
        setLoading(false)
        setError('User not found.')
      })
    setUser(undefined)
  }
  const handleKeyDown = (e: EventKey) => {
    if (e.key === 'Enter') {
      getUser()
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <GitHubIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Username"
          variant="standard"
          onChange={searchHandler}
          onKeyDown={handleKeyDown}
        />
        <LoadingButton
          size="small"
          onClick={getUser}
          loading={loading}
          variant="contained"
          sx={{ ml: 2 }}
        >
          Search
        </LoadingButton>
      </Box>
      {error ? <h2 style={{ textAlign: 'center' }}>{error}</h2> : ''}
    </div>
  )
}
