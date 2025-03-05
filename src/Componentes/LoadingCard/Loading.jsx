import { Box } from '@mui/material';
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Loading = ({ error, enviado }) => {
  console.log(enviado);
  return (
    <>
      {error && (
        <Box
          sx={{
            border: '2px solid #ff9800',
            px: 6,
            color: '#e65100',
            py: 1.4,
            position: 'absolute',
            right: '100px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bottom: '120px',
            borderRadius: '8px',
            bgcolor: '#ffb74d',
          }}
        >
          {error && <p>{error}</p>}
          <ErrorIcon />
        </Box>
      )}
      {enviado && (
        <Box
          sx={{
            border: '2px solid #4caf50',
            px: 6,
            color: '#1b5e20',
            py: 1.4,
            position: 'absolute',
            right: '100px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bottom: '120px',
            borderRadius: '8px',
            bgcolor: '#c8e6c9',
          }}
        >
          {enviado && <p>Postagem enviada</p>}
          <CheckCircleIcon />
        </Box>
      )}
    </>
  );
};

export default Loading;
