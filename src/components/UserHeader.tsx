import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { User } from '../types'

export default function UserHeader({ user }: { user: User }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: '1rem',
      }}
    >
      <Avatar alt={user.login} src={user.avatar_url} />
      <h2 style={{ marginLeft: '.5rem' }}>{user.login}</h2>
    </Box>
  )
}
