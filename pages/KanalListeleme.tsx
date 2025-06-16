import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const KanalListeleme: React.FC = () => {
  const kanallar = [
    { id: 1, isim: 'Genel', açıklama: 'Genel konular' },
    { id: 2, isim: 'Teknoloji', açıklama: 'Teknoloji ile ilgili güncellemeler' },
    { id: 3, isim: 'Yemek', açıklama: 'Yemek tarifleri ve önerileri' },
    { id: 4, isim: 'Seyahat', açıklama: 'Gezi ve seyahat ipuçları' }
  ];

  return (
    <Box padding={2} maxWidth={400} border={1} borderColor="grey.300" borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        Kanallar
      </Typography>
      <List>
        {kanallar.map((kanal) => (
          <ListItem key={kanal.id} button>
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