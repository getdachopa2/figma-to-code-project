import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const KanalListeleme = ({ kanallar }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>İsim</TableCell>
            <TableCell>Açıklama</TableCell>
            <TableCell>Durum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kanallar.map((kanal) => (
            <TableRow key={kanal.id}>
              <TableCell>{kanal.isim}</TableCell>
              <TableCell>{kanal.aciklama}</TableCell>
              <TableCell>{kanal.durum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KanalListeleme;