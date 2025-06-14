import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const KanalListeleme: React.FC<{ kanallar: Array<{ id: number, isim: string }> }> = ({ kanallar }) => {
  return (
    <Box>
      <Typography variant="h6">Kanal Listeleme</Typography>
      <List>
        {kanallar.map( kanal => (
          <ListItem key={kanal.id}>
            <ListItemText primary={kanal.isim} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default KanalListeleme;