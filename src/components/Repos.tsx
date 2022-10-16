import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Repo } from '../types'

export default function Repos({ repos }: { repos: Repo[] }) {
  if (repos.length === 0) {
    return (
      <div>
        <h3>No repositories</h3>
      </div>
    )
  }
  return (
    <div>
      <h3>Repositories</h3>
      <TableContainer component={Paper} sx={{ mb: '1rem' }}>
        <Table sx={{ minWidth: 650 }} aria-label="github repositories">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Forks</TableCell>
              <TableCell>Watchers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a href={row.html_url}>{row.name}</a>
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.forks_count}</TableCell>
                <TableCell>{row.watchers_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
