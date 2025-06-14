import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const KanalListeleme = () => {
  const kanallar = [
    { id: 1, isim: 'Kanal 1' },
    { id: 2, isim: 'Kanal 2' },
    { id: 3, isim: 'Kanal 3' }
  ];

  return (
    <List>
      {kanallar.map(( kanal ) => (
        <div key={kanal.id}>
          <ListItem>
            <ListItemText primary={kanal.isim} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default KanalListeleme;