import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const KanalListeleme: React.FC = () => {
  const kanallar = [
    { id: 1, isim: 'Genel', açıklama: 'Genel kanal' },
    { id: 2, isim: 'Projeler', açıklama: 'Projeler hakkında konuşulur' },
    { id: 3, isim: 'Eğlence', açıklama: 'Eğlence ve sohbet' },
  ];

  return (
    <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', padding: 2, borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Kanal Listesi
      </Typography>
      <List>
        {kanallar.map((kanal) => (
          <ListItem key={kanal.id} sx={{ mb: 1, borderRadius: 1, '&:hover': { backgroundColor: 'action.hover' } }}>
            <ListItemText
              primary={kanal.isim}
              secondary={kanal.açıklama}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default KanalListeleme;