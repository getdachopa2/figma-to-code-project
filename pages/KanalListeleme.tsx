import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const KanalListeleme = () => {
  const kanallar = [
    { id: 1, isim: '#Genel', aboneSayisi: 1200 },
    { id: 2, isim: '#Programlama', aboneSayisi: 950 },
    { id: 3, isim: '#Müzik', aboneSayisi: 800 },
    { id: 4, isim: 'Duyurular', aboneSayisi: 500 }
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Kanal Listesi
      </Typography>
      <Grid container spacing={2}>
        {kanallar.map((kanal) => (
          <Grid item xs={12} key={kanal.id}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {kanal.isim}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Abone Sayısı: {kanal.aboneSayisi}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KanalListeleme;