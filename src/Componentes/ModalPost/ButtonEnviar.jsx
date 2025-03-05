import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
const ButtonEnviar = ({ error, postarBlog }) => {
  const ButtonMUI = styled(Button)(({ theme }) => ({
    backgroundColor: '#4caf50',
    color: '#c8e6c9',
  }));
  return (
    <>
      <ButtonMUI
        disabled={error}
        onClick={postarBlog}
        sx={{ placeSelf: 'end', my: 4, display: 'block' }}
        variant="container"
      >
        ENVIAR
      </ButtonMUI>
    </>
  );
};

export default ButtonEnviar;
