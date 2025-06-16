import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const KanalListeleme = () => {
  const kanallar = [
    { id: 1, isim: 'Genel', mesajSayisi: 120 },
    { id: 2, isim: 'Projeler', mesajSayisi: 45 },
    { id: 3, isim: 'Destek', mesajSayisi: 78 },
    { id: 4, isim: 'İcmalar', mesajSayisi: 34 },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ p: 2, backgroundColor: '#1976d2', color: '#fff' }}>Kanal Listesi</Typography>
      <List>
        {kanallar.map((kanal) => (
          <ListItem key={kanal.id} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <ListItemText
              primary={kanal.isim}
              secondary={`${kanal.mesajSayisi} mesaj`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default KanalListeleme;