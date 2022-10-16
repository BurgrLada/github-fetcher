import { Box, IconButton } from '@mui/material'
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

// Code from MaterialUI docs, see https://mui.com/material-ui/customization/theming/
export default function ThemeSwitcher({ useTheme, colorMode }: any) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'end',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 2,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}
