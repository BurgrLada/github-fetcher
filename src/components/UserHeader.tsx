import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function BasicTable() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: "1rem" }}>
            <Avatar alt="User User" src="/static/images/avatar/1.jpg" />
            <span style={{ marginLeft: ".5rem" }}>User User</span>
        </Box>

)}