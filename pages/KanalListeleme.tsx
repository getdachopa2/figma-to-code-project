import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const KanalListeleme = () => {
  const kanallar = [
    { id: 1, isim: 'Genel' },
    { id: 2, isim: 'Projeler' },
    { id: 3, isim: 'Yardım' },
    { id: 4, isim: 'Duyurular' },
  ];

  return (
    <Box
      sx={{
        width: 300,
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#fafafa',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          padding: 2,
          backgroundColor: '#1976d2',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        Kanallar
      </Typography>
      <List disablePadding>
        {kanallar.map((kanal) => (
          <ListItem key={kanal.id} button>
            <ListItemText primary={kanal.isim} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default KanalListeleme;