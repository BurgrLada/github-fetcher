import React, { useEffect, useState } from 'react'
import { Box, TextField, Button } from '@mui/material/'
import LoadingButton from '@mui/lab/LoadingButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import { EventChange, EventKey, FullUser, User, ISearchProps } from '../types'
import { loadFullUser } from '../api'
import { tsConstructSignatureDeclaration } from '@babel/types'

export default function Search({ setUser, setStatus, status }: ISearchProps) {
  const [searchText, setSearchText] = useState('')

  const searchHandler = (e: EventChange) => {
    setSearchText(e.target.value)
  }

  const getUser = (): void => {
    if (status.loading) return
    setStatus({ loading: true, error: '' })
    loadFullUser(searchText)
      .then((data) => {
        if (data) {
          setUser(data)
          setStatus({ loading: false, error: '' })
        } else setStatus({ loading: false, error: 'User not found.' })
      })
      // prevents bugged loading and displays 404
      .catch((e) => {
        if (e.response.status == 404)
          setStatus({ loading: false, error: 'User not found.' })
        else if (e.response.status == 403)
          setStatus({
            loading: false,
            error: 'Too many requests to api from this IP.',
          })
        else setStatus({ loading: false, error: 'User not found.' })
        setUser(null)
      })
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
          loading={status.loading}
          variant="contained"
          sx={{ ml: 2 }}
        >
          Search
        </LoadingButton>
      </Box>
      {status.error !== '' ? (
        <h2 style={{ textAlign: 'center' }}>{status.error}</h2>
      ) : (
        ''
      )}
    </div>
  )
}
