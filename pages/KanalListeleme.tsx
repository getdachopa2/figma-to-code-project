import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const KanalListeleme = ({ kanallar }) => {
  return (
    <Grid container spacing={2}>
      {kanallar.map((kanal) => (
        <Grid item xs={12} sm={6} md={4} key={kanal.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{kanal.ad}</Typography>
              <Typography color="textSecondary">{kanal.aciklama}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default KanalListeleme;