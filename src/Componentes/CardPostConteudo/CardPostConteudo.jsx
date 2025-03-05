import React, { useRef } from 'react';
import { Box } from '@mui/material';
import CriarConteudo from './CriarConteudo';
const CardPostConteudo = () => {
  const append = useRef();
  return (
    <>
      <Box
        ref={append}
        sx={{ maxWidth: '800px', width: '100%', mx: 'auto', px: 6 }}
      >
        <CriarConteudo append={append} />
      </Box>
    </>
  );
};

export default CardPostConteudo;
