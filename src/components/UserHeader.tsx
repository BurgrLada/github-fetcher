import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { User } from '../types'
import { Card, CardContent } from '@mui/material'

export default function UserHeader({ user }: { user: User }) {
  return (
    <Card
      sx={{ my: '2rem', px: '2rem', width: 1 / 2, mx: 'auto', minWidth: 300 }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar alt={user.login} src={user.avatar_url} />
          <a href={user.html_url} title="See GitHub profile">
            <h2 style={{ marginLeft: '.5rem' }}>{user.login}</h2>
          </a>
        </Box>
      </CardContent>
    </Card>
  )
}
