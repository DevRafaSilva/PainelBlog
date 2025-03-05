import React from 'react';
import MenuLateral from '../../Componentes/MenuLateral';
import { Box } from '@mui/material';
import GraficoBarra from '../../Componentes/Graficos/GraficoBarra';

const Post = () => {
  return (
    <>
      <Box sx={{ flex: '1' }}>
        <div
          style={{
            backgroundColor: '#fbfbfb',
            paddingLeft: '46px',
            paddingRight: '46px',
            height: '100vh',
          }}
        >
          <GraficoBarra />
        </div>
      </Box>
    </>
  );
};

export default Post;
