import React from 'react';
import {Box, TextField, Button} from '@mui/material/';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function BasicTable() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <GitHubIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Username" variant="standard" />
            <Button variant="contained" sx={{ ml: 2}}>Search</Button>
        </Box>
)}