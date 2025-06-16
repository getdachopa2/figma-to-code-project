import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { VideoLibrary } from '@mui/icons-material';

const KanalListeleme: React.FC = () => {
  const kanallar = [
    { name: 'Kanal A' },
    { name: 'Kanal B' },
    { name: 'Kanal C' },
    { name: 'Kanal D' }
  ];
  return (
    <Box
      sx={{
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',
        bgcolor: '#fff'
      }}
    >
      <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" component="div" color="text.primary">
          Kanal Listesi
        </Typography>
      </Box>
      <List disablePadding>
        {kanallar.map((kanal, index) => (
          <ListItem
            button
            key={index}
            sx={{ borderBottom: '1px solid #eee' }}
          >
            <ListItemIcon>
              <VideoLibrary color="primary" />
            </ListItemIcon>
            <ListItemText primary={kanal.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default KanalListeleme;