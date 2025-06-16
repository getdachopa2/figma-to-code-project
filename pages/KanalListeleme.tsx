import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const KanalListeleme: React.FC = () => {
  const channels = [{ name: 'Genel' }, { name: 'Proje Güncellemeleri' }, { name: 'Yardım' }];
  const [expanded, setExpanded] = React.useState<boolean>(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ width: 300, border: '1px solid #ccc', borderRadius: 2, overflow: 'hidden' }}>
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 1,
          backgroundColor: '#f0f0f0',
          cursor: 'pointer'
        }}
      >
        <Typography variant="subtitle1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Kanallar
        </Typography>
        <IconButton size="small" aria-label={expanded ? 'Kapat' : 'Aç'}>
          {expanded ? <Remove /> : <Add />}
        </IconButton>
      </Box>
      {expanded && (
        <Box>
          {channels.map((channel, index) => (
            <Box
              key={index}
              sx={{
                padding: 1,
                paddingLeft: 3,
                borderTop: index !== 0 ? '1px solid #eee' : 'none',
                backgroundColor: '#fff',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f9f9f9'
                }
              }}
            >
              <Typography variant="body2"># {channel.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default KanalListeleme;