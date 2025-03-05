import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const ButtonComponent = ({ setModal }) => {
  const ButtonMUI = styled(Button)(({ theme }) => ({
    backgroundColor: '#4caf50',
    color: '#c8e6c9',
  }));

  function abrirModal() {
    setModal(true);
  }

  return (
    <>
      <ButtonMUI
        onClick={() => abrirModal()}
        sx={{ display: 'block', placeSelf: 'end', my: 5 }}
        bgColor="#4caf50"
        variant="contained"
      >
        CONCLUIR
      </ButtonMUI>
    </>
  );
};

export default ButtonComponent;
