import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Organization } from '../types'
import { Avatar } from '@mui/material'

export default function Organizations({
  organizations,
}: {
  organizations: Organization[]
}) {
    if (organizations.length === 0){
        return (
            <div>
                <h3>No organizations</h3>
            </div>
        )
      }
  return (
    <div>
        <h3>Organizations</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="github organizations">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Avatar</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {organizations.map((row) => (
                <TableRow
                key={row.login}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.login}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                    <Avatar alt={row.login} src={row.avatar_url} />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}
