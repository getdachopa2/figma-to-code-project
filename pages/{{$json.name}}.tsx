Certainly! Below is a sample React functional component using Next.js and Material-UI that corresponds to a hypothetical Figma frame named "Kanal Listeleme v1.0". Please note that this implementation is a basic setup; you might need to adjust the styles, props, and structure depending on the exact design details from your Figma frame.

```tsx
// components/KanalListeleme.tsx

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import Head from 'next/head';

const KanalListeleme: React.FC = () => {
  const channels = [
    { id: 1, name: 'Channel 1', description: 'Description of Channel 1' },
    { id: 2, name: 'Channel 2', description: 'Description of Channel 2' },
    { id: 3, name: 'Channel 3', description: 'Description of Channel 3' },
    // Add more channels as needed
  ];

  return (
    <>
      <Head>
        <title>Kanal Listeleme - v1.0</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Kanal Listeleme</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          {channels.map((channel) => (
            <Grid item xs={12} sm={6} md={4} key={channel.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {channel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {channel.description}
                  </Typography>
                  <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                    Join Channel
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default KanalListeleme;
```

### Usage in a Next.js Page
You can then import and use this component in a Next.js page like this:

```tsx
// pages/index.tsx

import KanalListeleme from '../components/KanalListeleme';

const Home: React.FC = () => {
  return (
    <div>
      <KanalListeleme />
    </div>
  );
};

export default Home;
```

### Important Notes
1. Remember to install Material-UI if you haven't:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

2. Adjust the channel data according to your Figma design. Ensure that card design, spacing, and other styles match your design closely.
3. You can expand this component by adding any extra functionality based on design specifications, like search functionality, filters, etc.